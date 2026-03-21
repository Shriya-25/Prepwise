import Link from "next/link";
import {
  BarChart3,
  Bell,
  Crosshair,
  PlayCircle,
  UserCircle2,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--on-surface)]">
      <header className="fixed top-0 z-50 w-full border-b border-[var(--outline-variant)]/50 bg-[var(--surface)]">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-[var(--primary)]"
            >
              Prepwise AI
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/analytics"
                className="border-b-2 border-[var(--accent-lime)] text-base font-bold tracking-tight text-[var(--primary)]"
              >
                Analytics
              </Link>
              <Link
                href="/aptitude"
                className="text-base font-medium tracking-tight text-[var(--outline)] transition-colors duration-200 hover:text-[var(--primary)]"
              >
                Aptitude
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="text-[var(--outline)] transition-all hover:text-[var(--primary)] active:opacity-80"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            <Link
              href="/profile"
              className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--outline-variant)]/25 bg-[var(--surface-high)] text-[var(--primary)]"
              aria-label="Profile"
            >
              <UserCircle2 className="h-7 w-7" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex min-h-screen items-center justify-center px-6 pb-10 pt-20">
        <div className="w-full max-w-4xl">
          <section className="flex flex-col items-center space-y-12 text-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 scale-110 rounded-full bg-[var(--surface-low)] opacity-50 blur-3xl" />
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-[var(--surface-lowest)] p-12 shadow-[0_32px_64px_-12px_rgba(0,38,26,0.04)]">
                <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-[var(--surface-container)]">
                  <BarChart3 className="h-16 w-16 text-[var(--primary)]/25" strokeWidth={1.6} />
                  <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-xl bg-[var(--accent-lime)] shadow-lg">
                    <Crosshair className="h-9 w-9 text-[#2f4f00]" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-md space-y-4">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--primary)] md:text-4xl">
                No interviews taken yet
              </h1>
              <p className="text-lg leading-relaxed text-[var(--on-surface-variant)]">
                Start your first mock interview to track your performance and
                unlock personalized AI insights.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[var(--primary)]/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--primary)]/25 active:scale-95"
              >
                <PlayCircle className="h-5 w-5" />
                Start Interview
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-[var(--surface-high)] bg-[var(--surface)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row md:px-8">
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <div className="flex items-center gap-3">
              <span className="text-lg font-extrabold text-[var(--primary)]">
                Prepwise AI
              </span>
              <span className="text-[var(--outline-variant)]">|</span>
              <span className="text-sm text-[var(--outline)]">
                Practice. Improve. Succeed.
              </span>
            </div>
            <p className="text-xs tracking-wide text-[var(--outline)]">
              © 2026 Prepwise AI. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-[var(--outline)] transition-colors duration-200 hover:text-[var(--primary)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-[var(--outline)] transition-colors duration-200 hover:text-[var(--primary)]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm font-medium text-[var(--outline)] transition-colors duration-200 hover:text-[var(--primary)]"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-[var(--outline)] transition-colors duration-200 hover:text-[var(--primary)]"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
