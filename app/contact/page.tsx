"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { contactContent, servicesDetailed } from "@/lib/content";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      serviceType: formData.get("serviceType"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on"
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const errorMessage =
          typeof errorBody?.error === "string"
            ? errorBody.error
            : "문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요.";
        throw new Error(errorMessage);
      }

      setStatus("success");
      setMessage("문의가 접수되었습니다. 빠르게 연락드리겠습니다.");
      formRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요."
      );
    }
  };

  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Contact</p>
              <h1 className="text-4xl font-semibold text-ink-900 md:text-5xl">
                {contactContent.heading}
              </h1>
              <p className="text-lg leading-relaxed text-ink-600">{contactContent.body}</p>
              <div className="rounded-3xl border border-ink-100 bg-ink-100/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Quick Contact
                </p>
                <p className="mt-3 text-sm text-ink-600">긴급 문의는 대표번호로 연락해주세요.</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">1644-2781</p>
              </div>
              <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Service Scope
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-600">
                  {servicesDetailed.map((service) => (
                    <li key={service.id} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink-400" />
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Card className="space-y-4" id="business">
              <h2 className="text-lg font-semibold text-ink-900">사업자 정보</h2>
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

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Contact Form
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink-900">상담 문의</h2>
                <p className="mt-2 text-sm text-ink-600">
                  서비스 상담과 기술 지원 문의를 남겨주시면 빠르게 연락드리겠습니다.
                </p>
              </div>
              <form ref={formRef} className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    이름
                    <input
                      type="text"
                      name="name"
                      placeholder="담당자 이름"
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    연락처
                    <input
                      type="tel"
                      name="phone"
                      placeholder="연락 가능한 번호"
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  이메일
                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  문의 유형
                  <select
                    name="serviceType"
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  >
                    <option value="">문의 서비스를 선택하세요</option>
                    {servicesDetailed.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  문의 내용
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="필요한 서비스, 일정, 예산 등을 작성해주세요."
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
                <label className="flex items-start gap-2 text-xs text-ink-500">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-ink-300"
                  />
                  <span>개인정보 수집 및 이용에 동의합니다.</span>
                </label>
                {message ? (
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                ) : null}
                <Button className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "접수 중..." : "문의 보내기"}
                </Button>
              </form>
            </Card>
            <div className="space-y-4 rounded-3xl border border-ink-100 bg-white p-8 shadow-card" id="support">
              <h3 className="text-xl font-semibold text-ink-900">기술 지원</h3>
              <p className="text-sm leading-relaxed text-ink-600">
                NebulaX는 24/7 글로벌 기술 지원으로 고객의 시스템을 안정적으로 운영할 수 있도록
                지원합니다. 긴급 장애 대응이 필요하시면 대표번호로 연락해주세요.
              </p>
              <div className="text-sm font-semibold text-ink-900">대표번호: 1644-2781</div>
              <div className="text-sm text-ink-600">이메일: contact@nebulax.digital</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
