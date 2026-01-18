import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { listNotices } from "@/lib/noticesStore";

export default async function NoticesPage() {
  const notices = await listNotices();
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Notice</p>
              <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
                공지사항
              </h1>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              NebulaX의 서비스 업데이트와 운영 소식을 확인하세요.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {notices.length === 0 ? (
              <Card>등록된 공지사항이 없습니다.</Card>
            ) : (
              notices.map((notice) => (
                <Link key={notice.id} href={`/notices/${notice.id}`} className="block">
                  <Card className="flex h-full flex-col gap-4">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      <span>{notice.tag}</span>
                      <span>{notice.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-ink-900">{notice.title}</h2>
                    <p className="text-sm leading-relaxed text-ink-600">{notice.summary}</p>
                    <span className="mt-auto text-xs font-semibold text-ink-500">
                      {notice.author}
                    </span>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
