import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { contactContent } from "@/lib/content";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Contact</p>
              <h1 className="mt-4 text-4xl font-semibold text-ink-900 md:text-5xl">
                {contactContent.heading}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{contactContent.body}</p>
            </div>
            <Card className="space-y-4">
              <h2 className="text-lg font-semibold text-ink-900">연락처</h2>
              <ul className="space-y-3 text-sm text-ink-600">
                {contactContent.items.map((item) => (
                  <li key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      {item.label}
                    </span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
              <Button href="mailto:contact@nebulax.digital" className="w-full">
                상담 요청 메일 보내기
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
