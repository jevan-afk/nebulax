import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { contactContent, contactTopics } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Contact</p>
              <h1 className="text-4xl font-semibold text-ink-900 md:text-5xl">
                {contactContent.heading}
              </h1>
              <p className="text-lg leading-relaxed text-ink-600">{contactContent.body}</p>
              <div className="rounded-3xl border border-ink-100 bg-ink-100/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Quick Contact
                </p>
                <p className="mt-3 text-sm text-ink-600">
                  긴급 문의는 대표번호로 연락해주세요.
                </p>
                <p className="mt-2 text-lg font-semibold text-ink-900">1644-2781</p>
              </div>
            </div>
            <Card className="space-y-4" id="business">
              <h2 className="text-lg font-semibold text-ink-900">사업자 정보</h2>
              <ul className="space-y-3 text-sm text-ink-600">
                {contactContent.items.map((item) => (
                  <li key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      {item.label}
                    </span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
              <Button href="mailto:contact@nebulax.digital" className="w-full">
                상담 요청 메일 보내기
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Contact Form
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink-900">상담 문의</h2>
                <p className="mt-2 text-sm text-ink-600">
                  서비스 상담과 기술 지원 문의를 남겨주시면 빠르게 연락드리겠습니다.
                </p>
              </div>
              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    이름
                    <input
                      type="text"
                      name="name"
                      placeholder="담당자 이름"
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    회사명
                    <input
                      type="text"
                      name="company"
                      placeholder="회사 또는 조직명"
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    연락처
                    <input
                      type="tel"
                      name="phone"
                      placeholder="연락 가능한 번호"
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    이메일
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  문의 분야
                  <select
                    name="topic"
                    defaultValue=""
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  >
                    <option value="" disabled>
                      문의 분야를 선택해주세요
                    </option>
                    {contactTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  문의 내용
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="필요한 서비스, 일정, 예산 등을 작성해주세요."
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
                <label className="flex items-start gap-2 text-xs text-ink-500">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-ink-300" />
                  <span>개인정보 수집 및 이용에 동의합니다.</span>
                </label>
                <Button className="w-full">문의 보내기</Button>
              </form>
            </Card>
            <div className="space-y-4 rounded-3xl border border-ink-100 bg-white p-8 shadow-card" id="support">
              <h3 className="text-xl font-semibold text-ink-900">기술 지원</h3>
              <p className="text-sm leading-relaxed text-ink-600">
                NebulaX는 24/7 글로벌 기술 지원으로 고객의 시스템을 안정적으로 운영할 수 있도록
                지원합니다. 긴급 장애 대응이 필요하시면 대표번호로 연락해주세요.
              </p>
              <div className="text-sm font-semibold text-ink-900">대표번호: 1644-2781</div>
              <div className="text-sm text-ink-600">이메일: contact@nebulax.digital</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
