import { NextResponse } from "next/server";
import { createNotice, listNotices } from "@/lib/noticesStore";

export async function GET() {
  try {
    const notices = await listNotices();
    return NextResponse.json({ notices });
  } catch {
    return NextResponse.json({ error: "공지사항을 불러오지 못했습니다." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, tag, date, author, summary, content } = body ?? {};

    if (!title || !tag || !date || !author || !summary || !content) {
      return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
    }

    const notice = await createNotice({
      title,
      tag,
      date,
      author,
      summary,
      content
    });

    return NextResponse.json({ notice }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "공지사항 등록에 실패했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
