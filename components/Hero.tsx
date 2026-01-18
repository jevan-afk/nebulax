"use client";

import { motion } from "framer-motion";
import { heroContent, stats } from "@/lib/content";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-container px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge>{heroContent.highlight}</Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink-950 md:text-5xl lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="text-lg leading-relaxed text-ink-600 md:text-xl">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">{heroContent.primaryCta}</Button>
              <Button href="/services" variant="secondary">
                {heroContent.secondaryCta}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-100 via-white to-nebula-300/40 p-8 shadow-card"
          >
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Global Network
                </p>
                <p className="mt-4 text-2xl font-semibold text-ink-900">
                  안정적인 인프라 운영
                </p>
                <p className="mt-3 text-sm text-ink-600">
                  전 세계 분산 인프라와 상시 모니터링으로 낮은 지연과 안정적인 성능을
                  제공합니다.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white p-4 text-center">
                    <p className="text-2xl font-semibold text-ink-900">{stat.value}</p>
                    <p className="mt-2 text-xs text-ink-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
