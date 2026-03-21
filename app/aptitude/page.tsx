import Link from "next/link";
import { Brain, Play, Info, MonitorPlay, MoreHorizontal, Sparkles, UserCircle2, Zap } from "lucide-react";

const resources = [
  {
    title: "Aptitude Basics for Beginners",
    href: "https://www.youtube.com/watch?v=9N1G7wqP7E0",
    videoId: "9N1G7wqP7E0",
  },
  {
    title: "Logical Reasoning Full Course",
    href: "https://www.youtube.com/watch?v=6Xk8d5Wg4Jc",
    videoId: "6Xk8d5Wg4Jc",
  },
  {
    title: "Quantitative Aptitude Tricks",
    href: "https://www.youtube.com/watch?v=Q0h4r3s9s1k",
    videoId: "Q0h4r3s9s1k",
  },
  {
    title: "Placement Aptitude Preparation",
    href: "https://www.youtube.com/watch?v=J0s2b0fCzP0",
    videoId: "J0s2b0fCzP0",
  },
  {
    title: "Data Interpretation & Analysis",
    href: "https://www.youtube.com/watch?v=Yl9g1x3b9dE",
    videoId: "Yl9g1x3b9dE",
  },
];

export default function AptitudePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
      <header className="sticky top-0 z-50 border-b border-[var(--outline-variant)]/45 bg-[var(--surface)]/95 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-[var(--primary)]"
            >
              Prepwise
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <a
                href="#"
                className="text-sm font-bold tracking-tight text-[var(--on-surface-variant)] transition-colors duration-200 hover:text-[var(--primary)]"
              >
                Analytics
              </a>
              <Link
                href="/aptitude"
                className="border-b-2 border-[var(--accent-lime)] pb-1 text-sm font-bold tracking-tight text-[var(--primary)]"
              >
                Aptitude
              </Link>
            </div>
          </div>

          <Link
            href="/login"
            className="rounded-full p-2 text-[var(--primary)] transition-colors hover:bg-[var(--surface-low)]"
            aria-label="Go to login"
          >
            <UserCircle2 className="h-7 w-7" />
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8">
        <section className="mb-20 text-center">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-[var(--primary)] md:text-6xl">
            Aptitude Practice
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-[var(--on-surface-variant)]">
            Practice from trusted resources and improve your problem-solving
            skills with curated educational content.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-low)] px-4 py-2">
            <Info className="h-4 w-4 text-[var(--secondary)]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary)]">
              More features and tests coming soon
            </span>
          </div>
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="group relative overflow-hidden rounded-xl bg-[var(--surface-lowest)] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-[var(--surface-container)]">
                  <img
                    src={`https://i.ytimg.com/vi/${resource.videoId}/hqdefault.jpg`}
                    alt={resource.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Play className="h-12 w-12 text-white" fill="currentColor" strokeWidth={1.25} />
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <MonitorPlay className="h-3.5 w-3.5 text-[var(--secondary)]" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--secondary)]">
                      YouTube Resource
                    </span>
                  </div>
                  <h3 className="line-clamp-2 text-sm font-bold text-[var(--primary)] transition-colors duration-200 group-hover:text-[var(--secondary)]">
                    {resource.title}
                  </h3>
                </div>

                <a
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Open video: ${resource.title}`}
                />
              </article>
            ))}

            <article className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--outline-variant)] bg-[var(--surface-container)] p-6">
              <MoreHorizontal className="mb-2 h-6 w-6 text-[var(--outline)]" />
              <p className="text-center text-[10px] font-bold text-[var(--on-surface-variant)]">
                More resources being curated...
              </p>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] bg-[var(--primary)] p-12 text-white md:p-20">
          <div className="relative z-10 max-w-4xl">
            <h2 className="mb-12 text-4xl font-extrabold tracking-tight md:text-5xl">
              Why Practice Aptitude?
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <article className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-lime)] text-[#102000]">
                  <Brain className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold">Improve logical thinking</h4>
                <p className="text-sm leading-relaxed text-[#b6d0c4]">
                  Enhance your brain&apos;s ability to identify patterns and draw
                  logical conclusions faster.
                </p>
              </article>

              <article className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-lime)] text-[#102000]">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold">Boost problem-solving speed</h4>
                <p className="text-sm leading-relaxed text-[#b6d0c4]">
                  Learn shortcuts and methods to tackle complex calculations in
                  record time.
                </p>
              </article>

              <article className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-lime)] text-[#102000]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold">Perform better in interviews</h4>
                <p className="text-sm leading-relaxed text-[#b6d0c4]">
                  Gain the confidence needed to clear initial screening rounds
                  for top companies.
                </p>
              </article>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[var(--primary-container)]/35" />
        </section>
      </main>

      <footer className="mt-24 bg-[var(--surface-low)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-12 md:flex-row md:px-8">
          <span className="text-lg font-bold text-[var(--primary)]">Prepwise</span>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-slate-600 opacity-80 transition-opacity hover:underline hover:opacity-100"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 opacity-80 transition-opacity hover:underline hover:opacity-100"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 opacity-80 transition-opacity hover:underline hover:opacity-100"
            >
              Support
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 opacity-80 transition-opacity hover:underline hover:opacity-100"
            >
              Contact
            </a>
          </div>
          <p className="text-xs text-slate-600">© 2026 Prepwise AI</p>
        </div>
      </footer>
    </div>
  );
}