import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { UpdatesList } from "@/components/UpdatesList";
import { InfoGrid } from "@/components/InfoGrid";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { serviceCategories } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <FeatureGrid />
      <Section>
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                Core Offering
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                NebulaX 서비스 전체 구성
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              클라우드부터 보안, 웹 구축까지 비즈니스에 필요한 핵심 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((service) => (
              <Card key={service.id} className="flex h-full flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-100">
                  <service.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h3 className="text-xl font-semibold text-ink-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{service.description}</p>
                <ul className="mt-auto space-y-2 text-sm text-ink-600">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink-300" />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <ProcessSection />
      <InfoGrid />
      <UpdatesList />
      <CTASection />
    </>
  );
}
