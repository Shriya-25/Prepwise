import Link from "next/link";
import { BarChart3, UserCircle2 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--on-surface)]">
      <header className="fixed top-0 z-50 w-full border-b border-[var(--outline-variant)]/50 bg-[var(--surface)]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-[var(--primary)]">
              Prepwise
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <Link href="/analytics" className="border-b-2 border-[var(--accent-lime)] text-base font-bold tracking-tight text-[var(--primary)]">
                Analytics
              </Link>
              <Link href="/aptitude" className="text-base font-medium tracking-tight text-[var(--outline)] transition-colors duration-200 hover:text-[var(--primary)]">
                Aptitude
              </Link>
            </div>
          </div>
          <Link href="/profile" className="text-[var(--primary)]" aria-label="Profile">
            <UserCircle2 className="h-7 w-7" />
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--surface-low)] text-[var(--primary)]">
          <BarChart3 className="h-8 w-8" />
        </div>
        <h1 className="mb-3 text-3xl font-extrabold text-[var(--primary)]">Analytics Dashboard</h1>
        <p className="max-w-xl text-[var(--on-surface-variant)]">
          Your analytics dashboard is ready for the next step. We will now wire it with
          completed interview sessions and score trends.
        </p>
      </main>
    </div>
  );
}
