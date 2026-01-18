"use client";

import { motion } from "framer-motion";
import { featuredCards, serviceIntro } from "@/lib/content";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

export function FeatureGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
              NebulaX Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
              {serviceIntro.title}
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-600">
            {serviceIntro.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="flex h-full flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-100">
                  <card.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h3 className="text-xl font-semibold text-ink-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
