"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Info,
  Mic,
  SkipForward,
  Timer,
  UserCircle2,
} from "lucide-react";

type InterviewQuestion = {
  id: number;
  category: "HR" | "Technical Basics" | "Technical Advanced";
  text: string;
};

const QUESTIONS: InterviewQuestion[] = [
  {
    id: 1,
    category: "HR",
    text: "Tell me about yourself and the type of role you are preparing for.",
  },
  {
    id: 2,
    category: "HR",
    text: "Why are you interested in this role, and why now?",
  },
  {
    id: 3,
    category: "HR",
    text: "Tell me about a time you had to handle a difficult situation with a coworker. How did you approach it?",
  },
  {
    id: 4,
    category: "HR",
    text: "Describe a failure you faced and what you learned from it.",
  },
  {
    id: 5,
    category: "HR",
    text: "How do you handle feedback and criticism in high-pressure situations?",
  },
  {
    id: 6,
    category: "HR",
    text: "Give an example of a time you took initiative without being asked.",
  },
  {
    id: 7,
    category: "HR",
    text: "How do you prioritize when multiple deadlines collide?",
  },
  {
    id: 8,
    category: "Technical Basics",
    text: "Explain a core concept from your domain in simple terms.",
  },
  {
    id: 9,
    category: "Technical Basics",
    text: "What trade-offs do you consider before choosing a technical approach?",
  },
  {
    id: 10,
    category: "Technical Basics",
    text: "How do you debug a feature that suddenly starts failing in production?",
  },
  {
    id: 11,
    category: "Technical Basics",
    text: "What is the difference between optimization and premature optimization?",
  },
  {
    id: 12,
    category: "Technical Basics",
    text: "How do you ensure your code remains maintainable over time?",
  },
  {
    id: 13,
    category: "Technical Basics",
    text: "How do you validate that your solution works for edge cases?",
  },
  {
    id: 14,
    category: "Technical Advanced",
    text: "Describe a system you designed and how it scales under load.",
  },
  {
    id: 15,
    category: "Technical Advanced",
    text: "How would you identify and fix a performance bottleneck end-to-end?",
  },
  {
    id: 16,
    category: "Technical Advanced",
    text: "Explain a complex technical decision where you balanced speed and quality.",
  },
  {
    id: 17,
    category: "Technical Advanced",
    text: "How do you design for reliability when dependencies can fail?",
  },
  {
    id: 18,
    category: "Technical Advanced",
    text: "What monitoring and alerting strategy would you apply for a critical service?",
  },
  {
    id: 19,
    category: "Technical Advanced",
    text: "How would you review and improve an existing architecture that has grown messy?",
  },
  {
    id: 20,
    category: "Technical Advanced",
    text: "What would your 30-60-90 day technical plan look like in this role?",
  },
];

const TIMER_SECONDS_PER_QUESTION = 165;

function formatTimer(totalSeconds: number) {
  const mins = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.max(totalSeconds % 60, 0)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

export default function InterviewPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh items-center justify-center bg-[var(--surface)] text-[var(--primary)]">
          Loading interview...
        </div>
      }
    >
      <InterviewPageContent />
    </Suspense>
  );
}

function InterviewPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "Interview";
  const company = searchParams.get("company") || "";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS_PER_QUESTION);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [listening, setListening] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progressPercent = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const interviewLabel = useMemo(() => {
    if (role.toLowerCase().includes("hr")) {
      return "HR Interview";
    }
    return `${role} Interview`;
  }, [role]);

  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [timeLeft]);

  const goToNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(TIMER_SECONDS_PER_QUESTION);
      return;
    }

    setListening(false);
    router.push("/processing");
  };

  const onAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-[var(--surface)] text-[var(--on-surface)]">
      <header className="fixed top-0 z-50 w-full border-b border-[var(--outline-variant)]/45 bg-[var(--surface)]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-2xl font-black tracking-tight text-[var(--primary)]">
              Prepwise
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/analytics"
                className="font-bold tracking-tight text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]"
              >
                Analytics
              </Link>
              <Link
                href="/aptitude"
                className="font-bold tracking-tight text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]"
              >
                Aptitude
              </Link>
            </div>
          </div>

          <Link href="/profile" className="text-[var(--primary)]" aria-label="Open profile">
            <UserCircle2 className="h-8 w-8" />
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex h-[calc(100dvh-5rem)] w-full max-w-5xl flex-1 flex-col gap-4 overflow-hidden px-6 pb-4 pt-24">
        <header className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center rounded-lg bg-[var(--primary-container)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {interviewLabel}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[var(--primary)] md:text-[1.7rem]">
                Question {currentIndex + 1}
              </span>
              <span className="text-sm font-medium text-[var(--outline)]">/ 20</span>
            </div>
            {company ? (
              <p className="text-xs font-medium text-[var(--on-surface-variant)]">
                Target Company: {company}
              </p>
            ) : null}
          </div>

          <div className="flex min-w-[160px] items-center justify-center gap-3 rounded-xl bg-[var(--surface-low)] px-4 py-3">
            <Timer className="h-4 w-4 text-[var(--primary)]" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-tight text-[var(--outline)]">
                Time Remaining
              </span>
              <span className="text-base font-bold tabular-nums text-[var(--primary)]">
                {formatTimer(timeLeft)}
              </span>
            </div>
          </div>
        </header>

        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-container)]">
          <div
            className="h-full rounded-full bg-[var(--accent-lime)] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <section className="relative overflow-hidden rounded-2xl bg-[var(--surface-lowest)] p-7 shadow-sm md:p-8">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--accent-lime)]/10 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-5">
            <h2 className="text-lg font-extrabold leading-tight text-[var(--on-surface)] md:text-[1.45rem] lg:text-[1.6rem]">
              &quot;{currentQuestion.text}&quot;
            </h2>
            <div className="h-1 w-20 rounded-full bg-[var(--accent-lime)]" />
          </div>
        </section>

        <section className="flex min-h-0 flex-1 flex-col gap-4">
          <div className="grid min-h-0 grid-cols-1 items-start gap-4 md:grid-cols-12">
            <div className="relative md:col-span-10">
              <textarea
                value={answers[currentQuestion.id] || ""}
                onChange={(event) => onAnswerChange(event.target.value)}
                className="h-[140px] w-full rounded-xl border-none bg-[var(--surface-high)] p-5 text-sm placeholder:text-[var(--outline)]/60 focus:ring-2 focus:ring-[var(--secondary)] md:h-[160px]"
                placeholder="Type your response here or use voice input..."
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-center md:h-full">
              <button
                type="button"
                onClick={() => setListening((prev) => !prev)}
                className={`group flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 ${
                  listening
                    ? "bg-[var(--primary-container)] text-white"
                    : "bg-[var(--accent-lime)] text-[#102000]"
                }`}
                aria-label={listening ? "Stop voice input" : "Start voice input"}
              >
                <Mic className={`h-7 w-7 ${listening ? "animate-pulse" : ""}`} />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 pt-1 md:flex-row">
            <div className="flex items-center gap-2 text-xs font-medium text-[var(--outline)]">
              <Info className="h-3.5 w-3.5" />
              AI will analyze your tone and content clarity.
            </div>

            <div className="flex w-full items-center gap-4 md:w-auto">
              <button
                type="button"
                onClick={goToNext}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--outline-variant)] px-6 py-3 text-sm font-bold text-[var(--primary)] transition-colors hover:bg-[var(--surface-container)] md:flex-none"
              >
                <SkipForward className="h-3.5 w-3.5" />
                Skip
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] px-8 py-3 text-sm font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-95 md:flex-none"
              >
                {currentIndex === QUESTIONS.length - 1 ? "Finish" : "Next Question"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
