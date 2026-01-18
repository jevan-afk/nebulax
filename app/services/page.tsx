import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import {
  featuredCards,
  serviceDetails,
  serviceHighlights,
  serviceIntro,
  updates
} from "@/lib/content";

export default function ServicesPage() {
  const serviceAnchors = ["cloud", "colocation", "website"];

  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Services</p>
            <h1 className="text-4xl font-semibold text-ink-900 md:text-5xl">
              클라우드 서비스를 찾으시나요?
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-600">
              {serviceIntro.description}
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <Card key={service.title} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-100">
                  <service.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h2 className="text-xl font-semibold text-ink-900">{service.title}</h2>
                <p className="text-sm leading-relaxed text-ink-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-ink-100/50">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCards.map((card, index) => (
              <Card key={card.title} className="space-y-4" id={serviceAnchors[index]}>
                <h3 className="text-lg font-semibold text-ink-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{card.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                Service Detail
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                NebulaX 서비스 상세
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                각 서비스별 핵심 기능과 운영 포인트를 확인하세요.
              </p>
            </div>
            <div className="grid gap-6">
              {serviceDetails.map((service) => (
                <Card key={service.id} className="space-y-4" id={service.id}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-ink-900">{service.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                      Detail
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-600">{service.description}</p>
                  <ul className="grid gap-2 text-sm text-ink-600 sm:grid-cols-2">
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
