"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
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
        isScrolled ? "bg-white/80 backdrop-blur border-b border-ink-100" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-6 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          NebulaX
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-700 lg:flex">
          <Link href="/about" className="link-underline">
            About
          </Link>
          <Link href="/services" className="link-underline">
            Services
          </Link>
          <Link href="/contact" className="link-underline">
            Contact
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink-200 px-4 py-2 text-ink-900 transition hover:border-ink-400"
          >
            문의하기
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
            <span className="text-base font-semibold">NebulaX</span>
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
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
            >
              상담하기
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
