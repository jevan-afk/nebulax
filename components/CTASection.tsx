import { ctaContent } from "@/lib/content";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-ink-100 bg-ink-900 px-8 py-12 text-white md:px-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Let&apos;s build together
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{ctaContent.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{ctaContent.description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" className="bg-white text-ink-900 hover:bg-ink-100">
                {ctaContent.primary}
              </Button>
              <Button href="/services" variant="ghost" className="border border-white/30 text-white">
                {ctaContent.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
