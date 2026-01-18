"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Notice } from "@/lib/noticesStore";

export default function NoticeAdminPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState(() => ({
    title: "",
    tag: "",
    date: new Date().toISOString().slice(0, 10),
    author: "NebulaX 운영팀",
    summary: "",
    content: ""
  }));

  const previewNotice = useMemo(
    () => ({
      title: formState.title || "공지사항 제목이 여기에 표시됩니다.",
      tag: formState.tag || "카테고리",
      date: formState.date || "YYYY-MM-DD",
      author: formState.author || "작성자",
      summary: formState.summary || "공지사항 요약이 여기에 표시됩니다.",
      content:
        formState.content ||
        "본문 내용을 작성하면 상세 페이지에서 어떻게 보이는지 미리 확인할 수 있습니다."
    }),
    [formState]
  );

  const loadNotices = async () => {
    try {
      const response = await fetch("/api/notices");
      const data = await response.json();
      setNotices(data.notices ?? []);
    } catch {
      setMessage("공지사항 목록을 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    loadNotices();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const payload = {
      title: formState.title,
      tag: formState.tag,
      date: formState.date,
      author: formState.author,
      summary: formState.summary,
      content: formState.content
    };

    try {
      const response = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(
          typeof errorBody?.error === "string"
            ? errorBody.error
            : "공지사항 등록에 실패했습니다."
        );
      }

      setStatus("success");
      setMessage("공지사항이 등록되었습니다.");
      setFormState((prev) => ({
        title: "",
        tag: "",
        date: prev.date,
        author: prev.author,
        summary: "",
        content: ""
      }));
      await loadNotices();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "공지사항 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <Section className="pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Admin</p>
              <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
                공지사항 작성
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                운영자가 공지사항을 등록할 수 있도록 에디터 UI를 제공합니다.
              </p>
            </div>
            <Card className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                작성 가이드
              </p>
              <ul className="space-y-2 text-sm text-ink-600">
                <li>• 공지 유형과 게시 날짜를 함께 입력합니다.</li>
                <li>• 요약 문구는 목록에서 노출됩니다.</li>
                <li>• 본문은 상세 페이지에 노출됩니다.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Card className="space-y-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    제목
                    <input
                      type="text"
                      name="title"
                      placeholder="공지 제목을 입력하세요"
                      value={formState.title}
                      onChange={(event) =>
                        setFormState((prev) => ({ ...prev, title: event.target.value }))
                      }
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    카테고리
                    <input
                      type="text"
                      name="tag"
                      placeholder="공지/안내/업데이트"
                      value={formState.tag}
                      onChange={(event) =>
                        setFormState((prev) => ({ ...prev, tag: event.target.value }))
                      }
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    게시일
                    <input
                      type="date"
                      name="date"
                      value={formState.date}
                      onChange={(event) =>
                        setFormState((prev) => ({ ...prev, date: event.target.value }))
                      }
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-ink-600">
                    작성자
                    <input
                      type="text"
                      name="author"
                      placeholder="NebulaX 운영팀"
                      value={formState.author}
                      onChange={(event) =>
                        setFormState((prev) => ({ ...prev, author: event.target.value }))
                      }
                      className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                      required
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  요약
                  <textarea
                    name="summary"
                    rows={3}
                    placeholder="공지사항 요약을 작성하세요"
                    value={formState.summary}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, summary: event.target.value }))
                    }
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-600">
                  본문
                  <textarea
                    name="content"
                    rows={8}
                    placeholder="공지 상세 내용을 입력하세요"
                    value={formState.content}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, content: event.target.value }))
                    }
                    className="rounded-2xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-400"
                    required
                  />
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
                  {status === "loading" ? "등록 중..." : "공지사항 등록"}
                </Button>
              </form>
            </Card>
            <div className="space-y-6">
              <Card className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  미리보기
                </p>
                <div className="rounded-2xl border border-ink-100 p-4">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                    <span>{previewNotice.tag}</span>
                    <span>{previewNotice.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">{previewNotice.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {previewNotice.summary}
                  </p>
                </div>
                <div className="rounded-2xl border border-ink-100 p-4 text-sm text-ink-600">
                  {previewNotice.content}
                </div>
              </Card>
              <Card className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  최근 공지
                </p>
                <div className="space-y-4">
                  {notices.length === 0 ? (
                    <p className="text-sm text-ink-600">등록된 공지사항이 없습니다.</p>
                  ) : (
                    notices.slice(0, 5).map((notice) => (
                      <div
                        key={notice.id}
                        className="space-y-1 rounded-2xl border border-ink-100 p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                          {notice.tag}
                        </p>
                        <p className="text-sm font-semibold text-ink-900">{notice.title}</p>
                        <p className="text-xs text-ink-500">{notice.date}</p>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
