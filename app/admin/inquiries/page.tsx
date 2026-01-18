"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Inquiry } from "@/lib/inquiriesStore";

interface ReplyDraft {
  admin: string;
  message: string;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [replyDrafts, setReplyDrafts] = useState<Record<string, ReplyDraft>>({});

  const loadInquiries = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/inquiries");
      const data = await response.json();
      setInquiries(data.inquiries ?? []);
    } catch (err) {
      setError("문의 목록을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleReplyChange = (id: string, field: keyof ReplyDraft, value: string) => {
    setReplyDrafts((prev) => ({
      ...prev,
      [id]: {
        admin: prev[id]?.admin ?? "",
        message: prev[id]?.message ?? "",
        [field]: value
      }
    }));
  };

  const handleReplySubmit = async (id: string) => {
    const draft = replyDrafts[id];
    if (!draft?.admin || !draft?.message) {
      setError("관리자 이름과 답변 내용을 입력해주세요.");
      return;
    }

    setError("");
    const response = await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ admin: draft.admin, replyMessage: draft.message })
    });

    if (response.ok) {
      await loadInquiries();
      setReplyDrafts((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    } else {
      setError("답변 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Admin</p>
              <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
                문의 관리
              </h1>
            </div>
            <p className="max-w-md text-sm text-ink-600">
              접수된 문의를 확인하고 답변을 등록하세요.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          {error ? <p className="mb-6 text-sm text-red-600">{error}</p> : null}
          {loading ? (
            <Card>문의 목록을 불러오는 중입니다...</Card>
          ) : inquiries.length === 0 ? (
            <Card>등록된 문의가 없습니다.</Card>
          ) : (
            <div className="grid gap-6">
              {inquiries.map((inquiry) => (
                <Card key={inquiry.id} className="space-y-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        {inquiry.status === "replied" ? "Replied" : "New"}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-ink-900">
                        {inquiry.name} 님 문의
                      </h2>
                      <p className="mt-2 text-sm text-ink-500">
                        {new Date(inquiry.createdAt).toLocaleString("ko-KR")}
                      </p>
                    </div>
                    <div className="rounded-full border border-ink-200 px-4 py-2 text-xs font-semibold text-ink-600">
                      {inquiry.serviceType}
                    </div>
                  </div>
                  <div className="grid gap-4 text-sm text-ink-600 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        연락처
                      </p>
                      <p className="mt-1 text-base text-ink-900">{inquiry.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        이메일
                      </p>
                      <p className="mt-1 text-base text-ink-900">{inquiry.email}</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-ink-100 bg-ink-100/40 p-5 text-sm text-ink-700">
                    {inquiry.message}
                  </div>
                  {inquiry.reply ? (
                    <div className="rounded-2xl border border-ink-100 bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        답변 완료
                      </p>
                      <p className="mt-2 text-sm text-ink-700">{inquiry.reply.message}</p>
                      <p className="mt-3 text-xs text-ink-500">
                        {inquiry.reply.admin} ·{" "}
                        {new Date(inquiry.reply.repliedAt).toLocaleString("ko-KR")}
                      </p>
                    </div>
                  ) : (
                    <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                      <div className="space-y-3">
                        <label className="flex flex-col gap-2 text-sm text-ink-600">
                          관리자 이름
                          <input
                            type="text"
                            value={replyDrafts[inquiry.id]?.admin ?? ""}
                            onChange={(event) =>
                              handleReplyChange(inquiry.id, "admin", event.target.value)
                            }
                            className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                          />
                        </label>
                        <label className="flex flex-col gap-2 text-sm text-ink-600">
                          답변 내용
                          <textarea
                            rows={4}
                            value={replyDrafts[inquiry.id]?.message ?? ""}
                            onChange={(event) =>
                              handleReplyChange(inquiry.id, "message", event.target.value)
                            }
                            className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                          />
                        </label>
                      </div>
                      <div className="flex items-end">
                        <Button onClick={() => handleReplySubmit(inquiry.id)}>답변 등록</Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
