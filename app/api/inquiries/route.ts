import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createInquiry, listInquiries } from "@/lib/inquiriesStore";

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

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "메일 서버 설정이 필요합니다. 관리자에게 문의해주세요." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: smtpFrom ?? smtpUser,
      to: "dl_corporate@nebulaxcorp.com",
      replyTo: email,
      subject: `[NebulaX 문의] ${name} - ${serviceType}`,
      text: [
        `이름: ${name}`,
        `연락처: ${phone}`,
        `이메일: ${email}`,
        `문의 유형: ${serviceType}`,
        `문의 내용:`,
        message
      ].join("\n")
    });

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
      { error: "문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
