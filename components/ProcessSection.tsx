import { processSteps } from "@/lib/content";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function ProcessSection() {
  return (
    <Section className="bg-ink-100/50">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
              NebulaX 서비스 진행 절차
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-600">
            상담부터 운영까지 체계적인 프로세스로 안정적인 서비스를 제공합니다.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
