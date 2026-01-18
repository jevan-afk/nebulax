"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink-700",
        className
      )}
    >
      {children}
    </span>
  );
}
