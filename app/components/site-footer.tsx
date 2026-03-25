"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_ROUTES = new Set(["/login", "/register", "/verify-email"]);

export default function SiteFooter() {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.has(pathname)) {
    return null;
  }

  return (
    <footer className="border-t border-[var(--outline-variant)]/40 bg-[#edeeed]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-6 py-10 md:flex-row md:items-center md:px-8">
        <div>
          <span className="text-lg font-bold text-[var(--primary)]">Prepwise</span>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--outline)]">
            © 2026 PREPWISE AI
          </p>
          <p className="mt-1 text-sm text-[var(--on-surface-variant)]">
            Practice. Improve. Succeed.
          </p>
        </div>
        <div className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--outline)]">
          <Link href="/privacy" className="nav-link transition-colors hover:text-[var(--secondary)]">
            Privacy
          </Link>
          <Link href="/terms" className="nav-link transition-colors hover:text-[var(--secondary)]">
            Terms
          </Link>
          <Link href="/support" className="nav-link transition-colors hover:text-[var(--secondary)]">
            Support
          </Link>
          <Link href="/contact" className="nav-link transition-colors hover:text-[var(--secondary)]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}