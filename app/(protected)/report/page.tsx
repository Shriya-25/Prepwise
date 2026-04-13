import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Download,
  Timer,
} from "lucide-react";

const transcriptCards = [
  {
    question: "Tell me about a time you had to handle a difficult situation with a coworker.",
    type: "Behavioral",
    score: 90,
    response:
      "In my previous role, I worked with a lead developer who was very resistant to adopting new testing frameworks. I realized that instead of pushing the tech, I needed to understand his concerns about timeline risks. I scheduled a one-on-one where I presented a small-scale pilot that would not impact the main sprint. This eventually led to a 30% reduction in bug reports over three months.",
    feedback:
      "Strong use of the STAR method, though you could be more specific on the resolution. You clearly identified the conflict and the action taken. To improve, quantify the resistance more clearly at the start to heighten the stakes of your success.",
    ideal:
      "A great answer frames clear stakes, then shows calm conflict resolution and measurable business impact. Example: The process was later adopted team-wide, saving 15 hours of manual QA each week.",
  },
  {
    question: "Explain the difference between optimistic and pessimistic locking in database transactions.",
    type: "Technical",
    score: 82,
    response:
      "Pessimistic locking prevents others from accessing data while you are using it, while optimistic locking checks for changes before saving. I usually prefer optimistic locking for high-concurrency web apps to avoid deadlocks.",
    feedback:
      "Conceptually correct. For senior-level interviews, mention implementation details like version columns or timestamps. Your mention of concurrency trade-offs is a strong positive.",
    ideal:
      "A complete answer includes trade-offs and examples: Pessimistic locking with SELECT FOR UPDATE is useful for high-contention writes, while optimistic locking with version checks is better for distributed high-read systems.",
  },
];

export default function ReportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--surface)] text-[var(--on-surface)]">
      <main className="mx-auto w-full max-w-7xl flex-1 px-8 py-12">
        <header className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">Performance Report</p>
            <h1 className="text-5xl font-extrabold tracking-tight text-[var(--primary)]">Software Engineer</h1>
            <div className="mt-4 flex items-center gap-4 text-sm font-medium text-[var(--outline)]">
              <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> May 15, 2024</span>
              <span className="h-1 w-1 rounded-full bg-[var(--outline-variant)]" />
              <span className="flex items-center gap-1"><Timer className="h-3.5 w-3.5" /> 45 Min Session</span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 md:w-auto md:items-end">
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-black leading-none text-[var(--primary)]">85</span>
              <span className="text-2xl font-bold text-[var(--outline-variant)]">/ 100</span>
            </div>
            <button
              type="button"
              className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] px-8 py-4 font-bold text-white shadow-xl transition-all hover:opacity-90 active:scale-95"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </header>

        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Technical Proficiency", 92, "Exceptional"],
            ["Communication", 78, "Strong"],
            ["Behavioral Alignment", 85, "High Match"],
          ].map(([label, score, tag]) => (
            <article key={label as string} className="rounded-xl border border-[var(--outline-variant)]/10 bg-[var(--surface-lowest)] p-8 shadow-[0px_32px_32px_-12px_rgba(25,28,28,0.04)]">
              <p className="mb-4 text-xs font-bold uppercase tracking-tighter text-[var(--outline)]">{label as string}</p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-container)]">
                <div className="h-full bg-[var(--accent-lime)]" style={{ width: `${score}%` }} />
              </div>
              <p className="mt-4 text-xl font-bold text-[var(--primary)]">{score}% {tag as string}</p>
            </article>
          ))}
        </section>

        <section className="space-y-8">
          <h2 className="mb-2 flex items-center gap-3 text-2xl font-extrabold text-[var(--primary)]">
            Interview Transcript and Analysis
          </h2>

          {transcriptCards.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--outline-variant)] bg-[var(--surface-low)] p-8 text-center">
              <p className="text-sm font-semibold text-[var(--on-surface-variant)]">No results yet</p>
            </div>
          ) : (
            transcriptCards.map((card, index) => (
              <article key={card.question} className="overflow-hidden rounded-xl border border-[var(--outline-variant)]/10 bg-[var(--surface-lowest)] shadow-[0px_32px_32px_-12px_rgba(25,28,28,0.04)]">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--surface-low)] p-8">
                <div className="max-w-3xl space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">
                    Question {String(index + 1).padStart(2, "0")} • {card.type}
                  </span>
                  <h3 className="text-xl font-bold leading-tight text-[var(--primary)]">
                    &quot;{card.question}&quot;
                  </h3>
                </div>
                <div className="rounded-lg bg-[var(--accent-lime)] px-4 py-2">
                  <span className="text-xl font-black text-[var(--primary)]">{card.score}</span>
                  <span className="ml-1 text-sm font-bold text-[var(--primary)]/60">/100</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="space-y-4 bg-[var(--surface-low)]/40 p-8">
                  <p className="text-xs font-bold uppercase tracking-tighter text-[var(--outline)]">Your Response</p>
                  <p className="text-sm italic leading-relaxed text-[var(--on-surface)]">&quot;{card.response}&quot;</p>
                </div>
                <div className="space-y-4 border-l border-[var(--surface-low)] p-8">
                  <p className="text-xs font-bold uppercase tracking-tighter text-[var(--outline)]">Mentor Feedback</p>
                  <div className="rounded-xl border-l-4 border-[var(--accent-lime)] bg-[var(--accent-lime)]/10 p-4">
                    <p className="text-sm font-medium leading-relaxed text-[var(--primary)]">&quot;{card.feedback}&quot;</p>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center gap-2 border-t border-[var(--surface-low)] py-4 text-sm font-bold text-[var(--primary)]">
                    <span className="inline-flex h-4 w-4 items-center justify-center transition-transform group-open:rotate-180">▾</span>
                    View Ideal STAR Response
                  </summary>
                  <div className="mt-4 rounded-xl bg-[var(--primary)] p-6 text-white">
                    <p className="text-sm leading-relaxed opacity-90">{card.ideal}</p>
                  </div>
                </details>
              </div>
              </article>
            ))
          )}
        </section>

        <div className="mt-12 flex justify-center">
          <Link href="/analytics" className="group flex items-center gap-3 rounded-xl border border-[var(--outline-variant)] bg-[var(--surface-lowest)] px-6 py-3 text-sm font-bold text-[var(--primary)] transition-colors hover:bg-[var(--surface-low)]">
            Back To Analytics
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>
    </div>
  );
}
