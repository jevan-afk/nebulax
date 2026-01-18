import { NextResponse } from "next/server";
import { findInquiry, respondToInquiry } from "@/lib/inquiries";

interface RouteContext {
  params: { id: string };
}

export async function GET(_: Request, { params }: RouteContext) {
  const inquiry = findInquiry(params.id);
  if (!inquiry) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ inquiry });
}

export async function PATCH(request: Request, { params }: RouteContext) {
  const payload = await request.json();
  if (!payload.response || !payload.responder) {
    return NextResponse.json(
      { error: "response and responder are required." },
      { status: 400 }
    );
  }

  const inquiry = respondToInquiry(params.id, payload.response, payload.responder);
  if (!inquiry) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ inquiry });
}
