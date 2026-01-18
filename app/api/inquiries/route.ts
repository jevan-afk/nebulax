import { NextResponse } from "next/server";
import { createInquiry, listInquiries } from "@/lib/inquiriesStore";

export async function GET() {
  const inquiries = await listInquiries();
  return NextResponse.json({ inquiries });
}

export async function POST(request: Request) {
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
}
