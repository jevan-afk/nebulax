import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { aboutContent, values } from "@/lib/content";

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
    </>
  );
}
