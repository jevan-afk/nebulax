import { globalNetwork, infoGrid } from "@/lib/content";
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
              {globalNetwork.title}
            </h2>
            <p className="text-sm leading-relaxed text-ink-600">
              {globalNetwork.description}
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {globalNetwork.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-ink-100/70 p-4 text-center">
                  <p className="text-xl font-semibold text-ink-900">{stat.value}</p>
                  <p className="mt-2 text-xs text-ink-500">{stat.label}</p>
                </div>
              ))}
            </div>
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
