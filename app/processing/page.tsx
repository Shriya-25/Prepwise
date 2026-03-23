"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Sparkles } from "lucide-react";

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
    </div>
  );
}
