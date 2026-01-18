import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getNotice, listNotices } from "@/lib/noticesStore";

interface NoticePageProps {
  params: { slug: string };
}

export default async function NoticeDetailPage({ params }: NoticePageProps) {
  const notice = await getNotice(params.slug);
  const notices = await listNotices();
  const related = notices.filter((item) => item.id !== params.slug).slice(0, 3);

  if (!notice) {
    notFound();
  }

  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/notices" className="text-sm text-ink-500 hover:text-ink-900">
              ← 공지사항 목록
            </Link>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              {notice.tag}
            </span>
          </div>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-4xl font-semibold text-ink-900 md:text-5xl">{notice.title}</h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-ink-500">
                <span>{notice.date}</span>
                <span>{notice.author}</span>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-ink-600">{notice.content}</p>
            </div>
            <Card className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                안내 정보
              </p>
              <div className="space-y-3 text-sm text-ink-600">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    카테고리
                  </span>
                  <span>{notice.tag}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    게시일
                  </span>
                  <span>{notice.date}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    작성자
                  </span>
                  <span>{notice.author}</span>
                </div>
              </div>
              <Button href="/notices" variant="secondary">
                공지사항 목록
              </Button>
            </Card>
          </div>
          {related.length > 0 ? (
            <div className="mt-12 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                다른 공지 보기
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Card key={item.id} className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      <span>{item.tag}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                    <p className="text-sm text-ink-600">{item.summary}</p>
                    <Button href={`/notices/${item.id}`} variant="secondary">
                      상세 보기
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
