"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, servicesDetailed } from "@/lib/content";
import clsx from "clsx";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 w-full transition",
        isScrolled ? "bg-white/90 backdrop-blur border-b border-ink-100" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-6 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          네뷸라엑스
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-700 lg:flex">
          <div className="group relative">
            <Link href="/services" className="link-underline">
              서비스
            </Link>
            <div className="invisible absolute left-0 top-full z-40 w-[22rem] translate-y-2 rounded-2xl border border-ink-100 bg-white p-5 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                Services
              </p>
              <div className="mt-4 space-y-3 text-sm text-ink-700">
                {servicesDetailed.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    className="flex items-center justify-between"
                  >
                    {service.title} <span className="text-ink-400">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks
            .filter((link) => link.label !== "서비스")
            .map((link) => (
              <Link key={link.href} href={link.href} className="link-underline">
                {link.label}
              </Link>
            ))}
          <Link
            href="/services"
            className="rounded-full border border-ink-200 px-4 py-2 text-ink-900 transition hover:border-ink-400"
          >
            서비스 보기
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-ink-200 p-2 text-ink-900 lg:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-ink-900/50 backdrop-blur transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className={clsx(
            "ml-auto flex h-full w-80 flex-col bg-white px-6 py-8 transition-transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold">네뷸라엑스</span>
            <button
              type="button"
              className="rounded-full border border-ink-200 p-2"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/services"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              서비스 보기
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
