import { missionContent } from "@/lib/content";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function StorySection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Mission</p>
            <h2 className="mt-4 text-3xl font-semibold text-ink-900 md:text-4xl">
              {missionContent.title}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-600">{missionContent.body}</p>
        </div>
      </Container>
    </Section>
  );
}
