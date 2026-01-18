"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Inquiry } from "@/lib/inquiries";

interface ResponseState {
  response: string;
  responder: string;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [responseState, setResponseState] = useState<ResponseState>({
    response: "",
    responder: ""
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const fetchInquiries = async () => {
    const res = await fetch("/api/inquiries");
    if (!res.ok) {
      setStatusMessage("문의 목록을 불러오지 못했습니다.");
      return;
    }

    const data = await res.json();
    setInquiries(data.inquiries ?? []);
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const selectedInquiry = inquiries.find((item) => item.id === selectedId) ?? null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedInquiry) {
      setStatusMessage("답변할 문의를 선택해주세요.");
      return;
    }

    const res = await fetch(`/api/inquiries/${selectedInquiry.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(responseState)
    });

    if (!res.ok) {
      setStatusMessage("답변 저장에 실패했습니다.");
      return;
    }

    setStatusMessage("답변이 저장되었습니다.");
    setResponseState({ response: "", responder: "" });
    await fetchInquiries();
  };

  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Admin</p>
              <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
                문의 관리
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                접수된 문의를 확인하고 답변을 등록할 수 있습니다.
              </p>
            </div>
            <Card className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">안내</p>
              <ul className="space-y-2 text-sm text-ink-600">
                <li>• 문의를 선택하면 상세 정보가 표시됩니다.</li>
                <li>• 답변과 담당자를 입력한 뒤 저장하세요.</li>
                <li>• 이 화면은 데모용으로 메모리 저장소를 사용합니다.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {inquiries.length === 0 ? (
                <Card>
                  <p className="text-sm text-ink-600">접수된 문의가 없습니다.</p>
                </Card>
              ) : (
                inquiries.map((inquiry) => (
                  <button
                    type="button"
                    key={inquiry.id}
                    className="w-full text-left"
                    onClick={() => {
                      setSelectedId(inquiry.id);
                      setResponseState({
                        response: inquiry.response ?? "",
                        responder: inquiry.responder ?? ""
                      });
                      setStatusMessage("");
                    }}
                  >
                    <Card
                      className={
                        inquiry.id === selectedId
                          ? "border-nebula-400 bg-nebula-300/10"
                          : undefined
                      }
                    >
                      <div className="flex items-center justify-between text-xs text-ink-500">
                        <span>{inquiry.createdAt.slice(0, 10)}</span>
                        <span className="uppercase">{inquiry.status}</span>
                      </div>
                      <h2 className="mt-2 text-lg font-semibold text-ink-900">{inquiry.name}</h2>
                      <p className="mt-1 text-sm text-ink-600">{inquiry.serviceType}</p>
                      <p className="mt-2 text-xs text-ink-500">{inquiry.email}</p>
                    </Card>
                  </button>
                ))
              )}
            </div>
            <div className="space-y-6">
              <Card className="space-y-4">
                <h2 className="text-lg font-semibold text-ink-900">문의 상세</h2>
                {selectedInquiry ? (
                  <div className="space-y-3 text-sm text-ink-600">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        연락처
                      </p>
                      <p>{selectedInquiry.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        이메일
                      </p>
                      <p>{selectedInquiry.email}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        문의 유형
                      </p>
                      <p>{selectedInquiry.serviceType}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                        내용
                      </p>
                      <p>{selectedInquiry.message}</p>
                    </div>
                    {selectedInquiry.response && selectedInquiry.respondedAt ? (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                          답변
                        </p>
                        <p>{selectedInquiry.response}</p>
                        <p className="mt-2 text-xs text-ink-500">
                          {selectedInquiry.responder} · {selectedInquiry.respondedAt.slice(0, 10)}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <p className="text-sm text-ink-500">문의 항목을 선택해주세요.</p>
                )}
              </Card>
              <Card>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                      답변 등록
                    </p>
                  </div>
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    담당자
                    <input
                      type="text"
                      value={responseState.responder}
                      onChange={(event) =>
                        setResponseState((prev) => ({ ...prev, responder: event.target.value }))
                      }
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    답변 내용
                    <textarea
                      rows={5}
                      value={responseState.response}
                      onChange={(event) =>
                        setResponseState((prev) => ({ ...prev, response: event.target.value }))
                      }
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                  {statusMessage ? <p className="text-sm text-ink-500">{statusMessage}</p> : null}
                  <Button className="w-full">답변 저장</Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
