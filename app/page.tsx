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
import { serviceBenefits } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <FeatureGrid />
      <Section className="bg-ink-100/50">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                Why NebulaX
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                안정적인 운영을 위한 핵심 가치
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              NebulaX는 운영 안정성, 확장성, 보안을 중심으로 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceBenefits.map((benefit) => (
              <Card key={benefit.title} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <benefit.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h3 className="text-lg font-semibold text-ink-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{benefit.description}</p>
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
