import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

const strengths = [
  "Exceptional technical depth in system architecture.",
  "Articulate and clear communication of complex ideas.",
  "Strong logical deduction under time pressure.",
];

const weaknesses = [
  "Slightly hesitant when tackling complex logical edge cases.",
  "Could improve non-verbal cues (eye contact and posture).",
  "Tendency to over-explain simple concepts early on.",
];

const actions = [
  "Practice more behavioral questions using the STAR method.",
  "Review data structure basics, specifically graph traversals.",
  "Maintain consistent eye contact with the camera lens.",
];

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--on-surface)]">
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
        <section className="mb-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[var(--outline)]">
                Interview Outcome
              </span>
              <h1 className="flex items-baseline gap-4 text-5xl font-extrabold tracking-tight text-[var(--primary)] md:text-6xl">
                Score: 85/100
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-[var(--accent-lime)] px-6 py-2 text-sm font-bold text-[#173a1e]">
                Good
              </span>
              <p className="max-w-[240px] text-sm text-[var(--outline)]">
                You performed better than 82% of candidates in this category.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-12">
          <section className="rounded-3xl bg-[var(--surface-lowest)] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] md:col-span-8">
            <h2 className="mb-10 text-2xl font-bold text-[var(--primary)]">Competency Breakdown</h2>
            <div className="space-y-10">
              {[
                ["Concept Mastery", 92],
                ["Structural Clarity", 78],
                ["Delivery Confidence", 85],
              ].map(([label, score]) => (
                <div key={label as string} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[var(--primary)]">{label as string}</span>
                    <span className="font-bold text-[var(--primary)]">{score}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--surface-container)]">
                    <div
                      className="h-full rounded-full bg-[var(--primary-container)]"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col rounded-3xl bg-[var(--primary-container)] p-10 text-white md:col-span-4">
            <div className="mb-8">
              <Lightbulb className="mb-4 h-9 w-9 text-[var(--accent-lime)]" />
              <h2 className="mb-4 text-2xl font-bold">Priority Actions</h2>
              <p className="text-sm leading-relaxed text-[#b6d0c4]">
                Focus on these areas to reach the expert tier (90+).
              </p>
            </div>
            <ul className="flex-grow space-y-5">
              {actions.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="font-bold text-[var(--accent-lime)]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl bg-[var(--surface-low)] p-10 md:col-span-6">
            <div className="mb-8 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[var(--secondary)]" />
              <h3 className="text-xl font-bold text-[var(--primary)]">Key Strengths</h3>
            </div>
            <ul className="space-y-4">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--secondary)]" />
                  <p className="font-medium text-[var(--on-surface-variant)]">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl bg-[var(--surface-low)] p-10 md:col-span-6">
            <div className="mb-8 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-[var(--error)]" />
              <h3 className="text-xl font-bold text-[var(--primary)]">Improvement Areas</h3>
            </div>
            <ul className="space-y-4">
              {weaknesses.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--error)]" />
                  <p className="font-medium text-[var(--on-surface-variant)]">{item}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/report"
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] px-10 py-5 font-bold text-white shadow-xl transition-all duration-200 hover:scale-[1.02]"
          >
            View Detailed Report
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>
    </div>
  );
}
