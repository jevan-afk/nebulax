import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  serviceDetails,
  serviceHighlights,
  serviceIntro,
  updates
} from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Services</p>
              <h1 className="text-4xl font-semibold text-ink-900 md:text-5xl">
                {serviceIntro.title}
              </h1>
              <p className="text-lg leading-relaxed text-ink-600">{serviceIntro.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact">서비스 상담하기</Button>
                <Button href="#details" variant="secondary">
                  상세 보기
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Highlights</p>
              <div className="mt-4 space-y-4">
                {serviceHighlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100">
                      <item.icon className="h-5 w-5 text-ink-700" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-ink-900">{item.title}</h2>
                      <p className="text-sm text-ink-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-100/50" id="details">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                Service Detail
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                NebulaX 서비스 상세
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              각 서비스별 핵심 기능과 운영 포인트를 확인하세요.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceDetails.map((service) => (
              <Card key={service.id} className="flex h-full flex-col gap-4" id={service.id}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink-900">{service.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                    {service.id}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-600">{service.description}</p>
                <ul className="mt-auto space-y-2 text-sm text-ink-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="notice">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Notice</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                서비스 공지
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              NebulaX 서비스 이용에 필요한 핵심 안내를 확인하세요.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {updates.map((update) => (
              <Card key={update.title} className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  <span>{update.tag}</span>
                  <span>{update.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink-900">{update.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{update.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
