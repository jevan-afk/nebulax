import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { aboutContent, businessInfo, values } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">About</p>
              <h1 className="mt-4 text-4xl font-semibold text-ink-900 md:text-5xl">
                {aboutContent.heading}
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-ink-600">{aboutContent.body}</p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-100">
                  <value.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h2 className="text-xl font-semibold text-ink-900">{value.title}</h2>
                <p className="text-sm leading-relaxed text-ink-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-ink-100/60" id="history">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                Business Info
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-ink-900 md:text-4xl">
                네뷸라엑스 회사 정보
              </h2>
            </div>
            <Card className="space-y-3">
              <div className="flex flex-col gap-1 text-sm text-ink-600">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  회사명
                </span>
                <span>{businessInfo.company}</span>
              </div>
              <div className="flex flex-col gap-1 text-sm text-ink-600">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  사업자등록번호
                </span>
                <span>{businessInfo.registration}</span>
              </div>
              <div className="flex flex-col gap-1 text-sm text-ink-600">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  주소
                </span>
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex flex-col gap-1 text-sm text-ink-600">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  대표번호
                </span>
                <span>{businessInfo.phone}</span>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
      <Section id="careers">
        <Container>
          <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card md:p-10">
            <h2 className="text-2xl font-semibold text-ink-900">함께 성장할 동반자를 찾습니다</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              NebulaX는 고객의 성장 여정을 함께 책임질 전문가와 파트너를 기다립니다. 협업 및
              채용 문의는 문의 페이지를 통해 전달해주세요.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
