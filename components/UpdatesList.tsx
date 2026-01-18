import { updates } from "@/lib/content";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export function UpdatesList() {
  return (
    <Section className="bg-ink-100/60">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Updates</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
              NebulaX 공지 및 업데이트
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-600">
            최신 운영 소식과 서비스 업데이트를 공유합니다.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {updates.map((update) => (
            <Card key={update.title} className="flex h-full flex-col gap-4 bg-white">
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
  );
}
