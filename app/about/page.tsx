import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  aboutContent,
  businessInfo,
  featuredCards,
  serviceBenefits,
  values
} from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">About</p>
              <h1 className="text-4xl font-semibold text-ink-900 md:text-5xl">
                {aboutContent.heading}
              </h1>
              <p className="text-lg leading-relaxed text-ink-600">{aboutContent.body}</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/services">서비스 전체 보기</Button>
                <Button href="/contact" variant="secondary">
                  문의하기
                </Button>
              </div>
            </div>
            <Card className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Business Info
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink-900">네뷸라엑스 회사 정보</h2>
              </div>
              <div className="space-y-3 text-sm text-ink-600">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    회사명
                  </span>
                  <span>{businessInfo.company}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    사업자등록번호
                  </span>
                  <span>{businessInfo.registration}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    주소
                  </span>
                  <span>{businessInfo.address}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    대표번호
                  </span>
                  <span>{businessInfo.phone}</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Values</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                {aboutContent.valuesHeadline}
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">{aboutContent.valuesBody}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-100">
                  <value.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h3 className="text-xl font-semibold text-ink-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ink-100/50">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                NebulaX Advantage
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                NebulaX가 제공하는 핵심 가치
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              운영 안정성과 확장성, 보안을 함께 고려한 통합 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceBenefits.map((benefit) => (
              <Card key={benefit.title} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <benefit.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h3 className="text-lg font-semibold text-ink-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                Core Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
                네뷸라엑스 주요 서비스
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              클라우드, 데이터센터, 웹 구축까지 한 번에 지원합니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCards.map((card) => (
              <Card key={card.title} className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <card.icon className="h-6 w-6 text-ink-700" />
                </div>
                <h3 className="text-lg font-semibold text-ink-900">{card.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{card.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Partnership
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink-900">
                  함께 성장할 파트너를 찾습니다
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  협업 및 기술 파트너십 문의는 언제든지 열려 있습니다. NebulaX와 함께 성장할
                  준비가 되셨나요?
                </p>
              </div>
              <Button href="/contact">문의하기</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
