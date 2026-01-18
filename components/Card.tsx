import clsx from "clsx";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-ink-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-cardHover",
        className
      )}
    >
      {children}
    </div>
  );
}
