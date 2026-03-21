import {
  BarChart3,
  Brain,
  Cog,
  LineChart,
  MessageSquareText,
  Timer,
} from "lucide-react";

export default function Home() {
  const steps = [
    {
      icon: Cog,
      title: "Setup",
      description:
        "Select your role, industry, and target company to personalize your mock interview.",
    },
    {
      icon: Timer,
      title: "Interview",
      description:
        "Complete a focused 20-question session with one question at a time and timed responses.",
    },
    {
      icon: MessageSquareText,
      title: "Feedback",
      description:
        "Get structured scoring for concept, clarity, and confidence with ideal answer guidance.",
    },
    {
      icon: LineChart,
      title: "Improve",
      description:
        "Track weak areas over time and review reports anytime from your analytics dashboard.",
    },
  ];

  return (
    <div className="text-[var(--on-surface)]">
      <header className="sticky top-0 z-50 border-b border-[var(--outline-variant)]/40 bg-[var(--surface)]/90 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black tracking-tight text-[var(--primary)]">
              Prepwise
            </span>
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#"
                className="text-sm font-semibold text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]"
              >
                Analytics
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]"
              >
                Aptitude
              </a>
            </div>
          </div>
          <button className="rounded-lg border border-[var(--outline-variant)] bg-white px-5 py-2 text-sm font-bold text-[var(--primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-container)] hover:bg-[var(--primary-container)] hover:text-white hover:shadow-md">
            Login
          </button>
        </nav>
      </header>

      <main>
        <section className="relative w-full overflow-hidden px-6 pb-28 pt-20 md:px-8 md:pt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef2f0] via-[var(--surface)] to-[#e4f2cb]" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-block rounded-full bg-[var(--secondary-container)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
              AI-Powered Preparation
            </span>
            <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-[var(--primary)] md:text-7xl">
              Practice Interviews.
              <br />
              Improve Faster.
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-[var(--on-surface-variant)] md:text-xl">
              Simulate real interviews and get structured feedback with a focused,
              minimal flow built for students and early professionals.
            </p>
            <button className="rounded-xl bg-[var(--secondary-fixed)] px-10 py-4 text-lg font-extrabold text-[#102000] shadow-lg shadow-lime-400/30 transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Start Mock Interview
            </button>
          </div>
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--secondary-fixed)]/20 blur-3xl md:h-96 md:w-96" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl md:h-96 md:w-96" />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="mb-14">
            <h2 className="mb-4 text-3xl font-extrabold text-[var(--primary)]">
              How It Works
            </h2>
            <div className="h-1.5 w-16 rounded-full bg-[var(--secondary-fixed)]" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-low)] p-7 transition-all hover:-translate-y-1 hover:bg-[var(--surface-high)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--primary)]">
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
            <div className="rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 md:col-span-2">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary-container)]">
                <Timer className="h-5 w-5 text-[var(--secondary)]" strokeWidth={2.2} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                Realistic interview structure
              </h3>
              <p className="max-w-2xl leading-relaxed text-[var(--on-surface-variant)]">
                Every session includes 20 focused questions split across HR,
                technical basics, and advanced rounds to mirror practical
                interview pressure without UI clutter.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary-container)]">
                <Brain className="h-5 w-5 text-[var(--secondary)]" strokeWidth={2.2} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                Structured scoring
              </h3>
              <p className="mb-7 leading-relaxed text-[var(--on-surface-variant)]">
                Get category feedback on concept, clarity, and confidence, with
                strengths, weaknesses, and ideal answers.
              </p>
              <div className="space-y-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#e5e8e6]">
                  <div className="h-full w-[82%] bg-[var(--secondary-fixed)]" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[var(--outline)]">
                  <span>Confidence</span>
                  <span>82%</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 md:col-span-3">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary-container)]">
                <BarChart3 className="h-5 w-5 text-[var(--secondary)]" strokeWidth={2.2} />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-end">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-[var(--primary)]">
                    Performance analytics
                  </h3>
                  <p className="leading-relaxed text-[var(--on-surface-variant)]">
                    Track progress across HR, technical, and communication areas,
                    and re-download previous reports at any time.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:col-span-2">
                  {[
                    ["+12%", "Clarity"],
                    ["+9%", "Communication"],
                    ["+7%", "Technical"],
                    ["92", "Final Score"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-[var(--outline-variant)]/40 bg-[var(--surface)] p-4 text-center"
                    >
                      <div className="mb-1 text-xl font-bold text-[var(--secondary)]">
                        {value}
                      </div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--outline)]">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--primary)] px-8 py-14 text-center text-white md:px-14 md:py-20">
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
                Ready to secure your dream offer?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#b6d0c4] md:text-lg">
                Start with one focused session, review your report, and build
                interview confidence with measurable progress.
              </p>
              <button className="rounded-xl bg-[var(--secondary-fixed)] px-10 py-4 text-lg font-extrabold text-[#102000] shadow-lg shadow-lime-400/40 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Begin Interview Now
              </button>
            </div>
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[var(--secondary-fixed)]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-14 h-56 w-56 rounded-full bg-[#1e4f3c] blur-3xl" />
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-[var(--outline-variant)]/40 bg-[#edeeed]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row md:px-8">
          <div>
            <span className="text-lg font-bold text-[var(--primary)]">Prepwise</span>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--outline)]">
              © 2026 Prepwise
            </p>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--outline)]">
            <a href="#" className="transition-colors hover:text-[var(--secondary)]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[var(--secondary)]">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-[var(--secondary)]">
              Support
            </a>
            <a href="#" className="transition-colors hover:text-[var(--secondary)]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
