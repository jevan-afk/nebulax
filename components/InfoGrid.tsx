import { infoGrid } from "@/lib/content";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export function InfoGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
              NebulaX Advantage
            </p>
            <h2 className="text-3xl font-semibold text-ink-900 md:text-4xl">
              운영 경험과 기술력으로 완성된 인프라
            </h2>
            <p className="text-sm leading-relaxed text-ink-600">
              NebulaX는 안정성을 최우선으로 하면서도 빠르게 확장할 수 있는 인프라 전략을
              제공합니다.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {infoGrid.map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink-100 bg-white p-6">
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
