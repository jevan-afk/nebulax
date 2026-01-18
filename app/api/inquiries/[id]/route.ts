import { NextResponse } from "next/server";
import { replyToInquiry } from "@/lib/inquiriesStore";

export async function PATCH(request: Request, context: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { replyMessage, admin } = body ?? {};

    if (!replyMessage || !admin) {
      return NextResponse.json({ error: "답변 내용과 관리자 이름이 필요합니다." }, { status: 400 });
    }

    const updated = await replyToInquiry(context.params.id, replyMessage, admin);

    if (!updated) {
      return NextResponse.json({ error: "문의 정보를 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json({ inquiry: updated });
  } catch {
    return NextResponse.json({ error: "답변 등록에 실패했습니다." }, { status: 500 });
  }
}
