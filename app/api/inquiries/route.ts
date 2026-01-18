import { NextResponse } from "next/server";
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
