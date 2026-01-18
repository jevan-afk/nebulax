import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getNoticeBySlug } from "@/lib/noticesStore";

interface NoticePageProps {
  params: { slug: string };
}

export default async function NoticeDetailPage({ params }: NoticePageProps) {
  const notice = await getNoticeBySlug(params.slug);

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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Next</p>
              <p className="text-sm text-ink-600">
                더 많은 공지와 업데이트를 확인하고 싶으신가요?
              </p>
              <Button href="/notices" variant="secondary">
                공지사항 더보기
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
