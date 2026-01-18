import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function NoticeAdminPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Admin</p>
              <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
                공지사항 작성
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                운영자가 공지사항을 등록할 수 있도록 에디터 UI를 제공합니다.
              </p>
            </div>
            <Card className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                작성 가이드
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                <li>• 공지 유형과 게시 날짜를 함께 입력합니다.</li>
                <li>• 요약 문구는 목록에서 노출됩니다.</li>
                <li>• 본문은 상세 페이지에 노출됩니다.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="space-y-6">
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  제목
                  <input
                    type="text"
                    name="title"
                    placeholder="공지 제목을 입력하세요"
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  카테고리
                  <input
                    type="text"
                    name="tag"
                    placeholder="공지/안내/업데이트"
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  게시일
                  <input
                    type="date"
                    name="date"
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  작성자
                  <input
                    type="text"
                    name="author"
                    placeholder="NebulaX 운영팀"
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-ink-600">
                요약
                <textarea
                  name="summary"
                  rows={3}
                  placeholder="공지사항 요약을 작성하세요"
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-ink-600">
                본문
                <textarea
                  name="content"
                  rows={8}
                  placeholder="공지 상세 내용을 입력하세요"
                  className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                  required
                />
              </label>
              <Button className="w-full">공지사항 등록</Button>
            </form>
          </Card>
        </Container>
      </Section>
    </>
  );
}
