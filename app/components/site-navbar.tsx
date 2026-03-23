"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle2 } from "lucide-react";

type SiteNavbarProps = {
  isLoggedIn: boolean;
};

const HIDDEN_ROUTES = new Set(["/interview", "/login", "/logout"]);

export default function SiteNavbar({ isLoggedIn }: SiteNavbarProps) {
  const pathname = usePathname();

  if (HIDDEN_ROUTES.has(pathname)) {
    return null;
  }

  const analyticsActive = pathname === "/analytics";
  const aptitudeActive = pathname === "/aptitude";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--outline-variant)]/40 bg-[var(--surface)]/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black tracking-tight text-[var(--primary)]">
            Prepwise
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/analytics"
              className={`nav-link text-sm font-semibold transition-colors duration-300 hover:text-[var(--primary)] ${
                analyticsActive
                  ? "border-b-2 border-[var(--accent-lime)] pb-1 text-[var(--primary)]"
                  : "text-[var(--on-surface-variant)]"
              }`}
            >
              Analytics
            </Link>
            <Link
              href="/aptitude"
              className={`nav-link text-sm font-semibold transition-colors duration-300 hover:text-[var(--primary)] ${
                aptitudeActive
                  ? "border-b-2 border-[var(--accent-lime)] pb-1 text-[var(--primary)]"
                  : "text-[var(--on-surface-variant)]"
              }`}
            >
              Aptitude
            </Link>
          </div>
        </div>

        {isLoggedIn ? (
          <Link
            href="/profile"
            className="rounded-full p-2 text-[var(--primary)] transition-colors hover:bg-[var(--surface-low)]"
            aria-label="Go to profile"
          >
            <UserCircle2 className="h-7 w-7" />
          </Link>
        ) : (
          <Link
            href="/login"
            className="rounded-lg border border-[var(--outline-variant)] bg-white px-5 py-2 text-sm font-bold text-[var(--primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-container)] hover:bg-[var(--primary-container)] hover:text-white hover:shadow-md active:translate-y-0 active:scale-[0.98]"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
