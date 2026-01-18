import { NextResponse } from "next/server";
import { createInquiry, listInquiries } from "@/lib/inquiries";

export async function GET() {
  return NextResponse.json({ inquiries: listInquiries() });
}

export async function POST(request: Request) {
  const payload = await request.json();

  const requiredFields = ["name", "phone", "email", "serviceType", "message", "consent"];
  const missing = requiredFields.filter((field) => !(field in payload));

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  if (!payload.consent) {
    return NextResponse.json({ error: "Consent is required." }, { status: 400 });
  }

  const inquiry = createInquiry({
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    serviceType: payload.serviceType,
    message: payload.message,
    consent: payload.consent
  });

  return NextResponse.json({ inquiry }, { status: 201 });
}
