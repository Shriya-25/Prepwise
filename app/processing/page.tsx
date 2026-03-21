"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Sparkles, UserCircle2 } from "lucide-react";

export default function ProcessingPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      router.replace("/feedback");
    }, 3800);

    return () => window.clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--surface)] text-[var(--on-surface)]">
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-[var(--surface)] px-8">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-black tracking-tight text-[var(--primary)]">
            Prepwise
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/analytics" className="text-sm font-bold text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]">
              Analytics
            </Link>
            <Link href="/aptitude" className="text-sm font-bold text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]">
              Aptitude
            </Link>
          </nav>
        </div>

        <Link href="/profile" className="rounded-full p-2 transition-colors hover:bg-[var(--surface-container)]" aria-label="Profile">
          <UserCircle2 className="h-6 w-6 text-[var(--primary)]" />
        </Link>
      </header>

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-lime)]/10 blur-[120px]" />
        </div>

        <section className="relative z-10 flex min-h-[400px] w-full max-w-2xl flex-col items-center justify-center gap-8 text-center">
          <div className="relative flex h-32 w-32 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-[var(--surface-high)]" />
            <div className="absolute inset-0 animate-pulse rounded-full border-4 border-[var(--accent-lime)]" />
            <Sparkles className="h-10 w-10 text-[var(--primary)]" />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--primary)] md:text-4xl">
              Analyzing your responses...
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-[var(--on-surface-variant)]">
              Generating your personalized feedback report based on communication
              style, technical accuracy, and confidence.
            </p>
          </div>

          <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-[var(--surface-container)]">
            <div className="h-full w-1/3 animate-[pulse_2s_linear_infinite] rounded-full bg-[var(--accent-lime)]" />
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-[var(--outline)]">
            <Lock className="h-4 w-4" />
            <span>Encrypted Analysis in Progress</span>
          </div>
        </section>
      </main>

      <footer className="flex w-full flex-col items-center justify-between gap-4 bg-[var(--surface)] px-8 py-6 md:flex-row">
        <div className="text-xs font-medium uppercase tracking-widest text-[var(--outline)]/80">
          © 2024 Prepwise AI. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a className="text-xs font-medium uppercase tracking-widest text-[var(--outline)]/80 transition-colors hover:text-[var(--accent-lime)]" href="#">Privacy Policy</a>
          <a className="text-xs font-medium uppercase tracking-widest text-[var(--outline)]/80 transition-colors hover:text-[var(--accent-lime)]" href="#">Terms of Service</a>
          <a className="text-xs font-medium uppercase tracking-widest text-[var(--outline)]/80 transition-colors hover:text-[var(--accent-lime)]" href="#">Support</a>
        </div>
      </footer>
    </div>
  );
}
