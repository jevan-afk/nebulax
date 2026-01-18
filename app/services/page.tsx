import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  faqItems,
  serviceBenefits,
  serviceIntro,
  serviceProcess,
  servicesDetailed,
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                Service Benefits
              </p>
              <div className="mt-4 space-y-4">
                {serviceBenefits.map((item) => (
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
          <div className="grid gap-6">
            {servicesDetailed.map((service) => (
              <Card key={service.id} className="space-y-6" id={service.id}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-100">
                      <service.icon className="h-6 w-6 text-ink-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-ink-900">{service.title}</h3>
                      <p className="text-sm text-ink-500">{service.summary}</p>
                    </div>
                  </div>
                  <Button href="/contact" variant="secondary">
                    {service.cta}
                  </Button>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Highlights
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-600">
                      {service.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Features
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-600">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Deliverables
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-600">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink-400" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-2xl bg-ink-100/50 p-5 text-sm text-ink-700">
                  <span className="font-semibold">대표 활용 사례:</span> {service.useCases.join(", ")}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                상담부터 운영까지
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              서비스 도입 전후 단계별로 필요한 지원을 제공합니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceProcess.map((step, index) => (
              <Card key={step.title} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-semibold text-ink-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-100/60">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                자주 묻는 질문
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              서비스 도입 전 자주 묻는 질문을 확인하세요.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {faqItems.map((item) => (
              <Card key={item.question} className="space-y-3 bg-white">
                <h3 className="text-lg font-semibold text-ink-900">{item.question}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{item.answer}</p>
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
