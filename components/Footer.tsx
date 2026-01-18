import Link from "next/link";
import { businessInfo, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-100/40">
      <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-lg font-semibold">네뷸라엑스</p>
            <p className="text-sm leading-relaxed text-ink-600">
              디지털 인프라의 모든 순간을 함께하는 NebulaX. 안정적인 운영과 빠른 확장을 위한
              최적의 파트너입니다.
            </p>
            <div className="space-y-1 text-xs text-ink-500">
              <p>{businessInfo.company}</p>
              <p>사업자등록번호: {businessInfo.registration}</p>
              <p>주소: {businessInfo.address}</p>
              <p>대표번호: {businessInfo.phone}</p>
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                {group.title}
              </p>
              <ul className="space-y-2 text-sm text-ink-700">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-ink-200 pt-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
          <span>© 2024 NebulaX Corp. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/contact" className="link-underline">
              개인정보처리방침
            </Link>
            <Link href="/contact" className="link-underline">
              이용약관
            </Link>
          </div>
        </div>
        <p className="text-[11px] text-ink-400">{businessInfo.trademark}</p>
      </div>
    </footer>
  );
}
