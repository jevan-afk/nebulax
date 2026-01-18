import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { featuredCards, serviceHighlights } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Services</p>
            <h1 className="text-4xl font-semibold text-ink-900 md:text-5xl">
              NebulaX 서비스 포트폴리오
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-600">
              클라우드 매니지드부터 웹 구축까지, NebulaX는 안정적이고 확장 가능한 디지털 인프라를
              제공합니다.
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <Card key={service.title}>
                <h2 className="text-xl font-semibold text-ink-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-ink-100/50">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredCards.map((card) => (
              <Card key={card.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-ink-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{card.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
