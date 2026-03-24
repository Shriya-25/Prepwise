"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Brain,
  Cog,
  LineChart,
  MessageSquareText,
  Timer,
} from "lucide-react";

function useCountUp(target: number, start: boolean, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    let startTime = 0;

    const tick = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}

export default function Home() {
  const mounted = true;

  const steps = [
    {
      icon: Cog,
      title: "Setup",
      description:
        "Choose role and company context to personalize a realistic mock interview session.",
    },
    {
      icon: Timer,
      title: "Interview",
      description:
        "Answer one question at a time with timed flow for an authentic interview rhythm.",
    },
    {
      icon: MessageSquareText,
      title: "Feedback",
      description:
        "Receive structured insights for concept, clarity, and confidence after every session.",
    },
    {
      icon: LineChart,
      title: "Improve",
      description:
        "Track your progress and focus weak areas with report-based improvement guidance.",
    },
  ];

  const metricsRef = useRef<HTMLDivElement | null>(null);
  const [metricsInView, setMetricsInView] = useState(false);

  const clarityCount = useCountUp(12, metricsInView, 2400);
  const communicationCount = useCountUp(9, metricsInView, 2600);
  const technicalCount = useCountUp(7, metricsInView, 2800);
  const finalScoreCount = useCountUp(92, metricsInView, 3000);

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -30px 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMetricsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-[var(--on-surface)]">
      <main>
        <section className="hero-enter relative w-full overflow-hidden px-6 pb-28 pt-20 md:px-8 md:pt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef2f0] via-[var(--surface)] to-[#e4f2cb]" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--secondary-fixed)]/20 blur-3xl md:h-96 md:w-96" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl md:h-96 md:w-96" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span
              className={`mb-6 inline-block rounded-full bg-[var(--secondary-container)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)] transition-all duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              AI-Powered Preparation
            </span>
            <h1
              className={`mb-8 text-4xl font-extrabold leading-tight tracking-tight text-[var(--primary)] transition-all duration-700 md:text-7xl ${
                mounted
                  ? "translate-y-0 opacity-100 delay-200"
                  : "translate-y-3 opacity-0"
              }`}
            >
              Practice Interviews.
              <br />
              Improve Faster.
            </h1>
            <p
              className={`mx-auto mb-12 max-w-2xl text-base leading-relaxed text-[var(--on-surface-variant)] transition-opacity duration-700 md:text-xl ${
                mounted ? "opacity-100 delay-300" : "opacity-0"
              }`}
            >
              Simulate real interviews and get structured feedback
            </p>
            <Link
              href="/setup"
              className={`rounded-xl bg-[var(--accent-lime)] px-10 py-4 text-lg font-extrabold text-[#102000] shadow-lg shadow-lime-400/30 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_32px_rgba(163,255,18,0.45)] active:scale-[0.98] ${
                mounted
                  ? "scale-100 opacity-100 delay-500"
                  : "scale-95 opacity-0"
              }`}
            >
              Begin Interview
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="reveal mb-14">
            <h2 className="mb-4 text-3xl font-extrabold text-[var(--primary)]">
              How It Works
            </h2>
            <div className="h-1.5 w-16 rounded-full bg-[var(--accent-lime)]" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <article
                key={step.title}
                className={`reveal step-card delay-${idx + 1} rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-low)] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--surface-high)]`}
              >
                <div className="step-icon mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--primary)]">
                  <step.icon className="h-5 w-5 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--on-surface-variant)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--surface-low)] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-8">
            <div className="reveal delay-1 feature-card rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 md:col-span-2">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary-container)]">
                <Timer className="h-5 w-5 text-[var(--secondary)]" strokeWidth={2.2} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                Real Interview Questions
              </h3>
              <p className="max-w-2xl leading-relaxed text-[var(--on-surface-variant)]">
                Every session includes 20 focused questions split across HR,
                technical basics, and advanced rounds to mirror practical
                interview pressure without UI clutter.
              </p>
            </div>

            <div className="reveal delay-2 feature-card rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary-container)]">
                <Brain className="h-5 w-5 text-[var(--secondary)]" strokeWidth={2.2} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                Structured Feedback
              </h3>
              <p className="mb-7 leading-relaxed text-[var(--on-surface-variant)]">
                Get category feedback on concept, clarity, and confidence, with
                strengths, weaknesses, and ideal answers.
              </p>
              <div className="space-y-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#e5e8e6]">
                  <div className="h-full w-[82%] bg-[var(--accent-lime)]" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[var(--outline)]">
                  <span>Confidence</span>
                  <span>82%</span>
                </div>
              </div>
            </div>

            <div className="reveal delay-3 feature-card rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 md:col-span-3">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary-container)]">
                <BarChart3 className="h-5 w-5 text-[var(--secondary)]" strokeWidth={2.2} />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-end">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                    Performance Tracking
                  </h3>
                  <p className="leading-relaxed text-[var(--on-surface-variant)]">
                    Track progress across HR, technical, and communication areas,
                    and re-download previous reports at any time.
                  </p>
                </div>
                <div ref={metricsRef} className="grid grid-cols-2 gap-3 md:col-span-2">
                  <div className="rounded-lg border border-[var(--outline-variant)]/40 bg-[var(--surface)] p-4 text-center">
                    <div className="mb-1 text-xl font-bold text-[var(--secondary)]">
                      +{clarityCount}%
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--outline)]">
                      Clarity
                    </div>
                  </div>
                  <div className="rounded-lg border border-[var(--outline-variant)]/40 bg-[var(--surface)] p-4 text-center">
                    <div className="mb-1 text-xl font-bold text-[var(--secondary)]">
                      +{communicationCount}%
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--outline)]">
                      Communication
                    </div>
                  </div>
                  <div className="rounded-lg border border-[var(--outline-variant)]/40 bg-[var(--surface)] p-4 text-center">
                    <div className="mb-1 text-xl font-bold text-[var(--secondary)]">
                      +{technicalCount}%
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--outline)]">
                      Technical
                    </div>
                  </div>
                  <div className="rounded-lg border border-[var(--outline-variant)]/40 bg-[var(--surface)] p-4 text-center">
                    <div className="mb-1 text-xl font-bold text-[var(--secondary)]">
                      {finalScoreCount}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--outline)]">
                      Final Score
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="reveal relative overflow-hidden rounded-[2rem] bg-[var(--primary)] px-8 py-14 text-center text-white md:px-14 md:py-20">
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                Ready to secure your dream offer?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#b6d0c4] md:text-lg">
                Start with one focused session, review your report, and build
                interview confidence with measurable progress.
              </p>
              <Link
                href="/setup"
                className="inline-flex rounded-xl bg-[var(--accent-lime)] px-10 py-4 text-lg font-extrabold text-[#102000] shadow-lg shadow-lime-400/40 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_32px_rgba(163,255,18,0.45)] active:scale-[0.98]"
              >
                Begin Interview Now
              </Link>
            </div>
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[var(--accent-lime)]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-14 h-56 w-56 rounded-full bg-[#1e4f3c] blur-3xl" />
          </div>
        </section>
      </main>
    </div>
  );
}
