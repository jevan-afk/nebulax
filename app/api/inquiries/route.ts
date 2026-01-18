import { NextResponse } from "next/server";
import { createInquiry, listInquiries } from "@/lib/inquiriesStore";

async function deliverInquiry(payload: {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error("구글 시트 전송에 실패했습니다.");
    }

    return { destination: "google-sheets" as const };
  }

  const resendKey = process.env.RESEND_API_KEY;
  const resendTo = process.env.RESEND_TO;
  if (resendKey && resendTo) {
    const from = process.env.RESEND_FROM ?? "NebulaX <dl_corporate@nebulaxcorp.com>";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [resendTo],
        subject: `[NebulaX 문의] ${payload.name} / ${payload.serviceType}`,
        html: `
          <h2>NebulaX 문의 접수</h2>
          <p><strong>이름:</strong> ${payload.name}</p>
          <p><strong>연락처:</strong> ${payload.phone}</p>
          <p><strong>이메일:</strong> ${payload.email}</p>
          <p><strong>문의 유형:</strong> ${payload.serviceType}</p>
          <p><strong>문의 내용:</strong><br />${payload.message.replace(/\n/g, "<br />")}</p>
        `
      })
    });

    if (!response.ok) {
      throw new Error("이메일 전송에 실패했습니다.");
    }

    return { destination: "email" as const };
  }

  throw new Error("문의 전송 설정이 필요합니다.");
}

export async function GET() {
  try {
    const inquiries = await listInquiries();
    return NextResponse.json({ inquiries });
  } catch {
    return NextResponse.json({ error: "문의 목록을 불러오지 못했습니다." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, serviceType, message, consent } = body ?? {};

    if (!name || !phone || !email || !serviceType || !message || !consent) {
      return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
    }

    await deliverInquiry({ name, phone, email, serviceType, message });
    const inquiry = await createInquiry({
      name,
      phone,
      email,
      serviceType,
      message,
      consent: Boolean(consent)
    });

    return NextResponse.json({ inquiry }, { status: 201 });
  } catch {
    return NextResponse.json(
      {
        error:
          "문의 전송에 실패했습니다. GOOGLE_SHEETS_WEBHOOK_URL 또는 RESEND_API_KEY 설정을 확인해주세요."
      },
      { status: 500 }
    );
  }
}
