import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const styles = {
    primary: "bg-ink-900 text-white hover:bg-ink-800",
    secondary: "bg-white text-ink-900 border border-ink-200 hover:border-ink-400",
    ghost: "bg-transparent text-ink-900 hover:bg-ink-100"
  };

  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900/60 focus-visible:ring-offset-2",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
