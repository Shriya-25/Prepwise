import Link from "next/link";
import { MailCheck, Sparkles } from "lucide-react";

type VerifyEmailPageProps = {
  searchParams: Promise<{
    email?: string;
  }>;
};

export default async function VerifyEmailPage({ searchParams }: VerifyEmailPageProps) {
  const params = await searchParams;
  const email = params.email ? decodeURIComponent(params.email) : "your email";

  return (
    <main className="h-dvh overflow-hidden md:grid md:grid-cols-2">
      <section className="relative hidden h-full overflow-hidden bg-[var(--primary-container)] px-10 py-10 text-white md:flex md:flex-col md:justify-center lg:px-16">
        <div className="absolute -right-32 -top-28 h-96 w-96 rounded-full bg-[var(--primary)]/30 blur-2xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[var(--secondary)]/20 blur-2xl" />

        <div className="relative z-10 max-w-xl">
          <p className="mb-10 text-4xl font-black tracking-tight text-[var(--accent-lime)]">
            Prepwise
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
            Start your professional journey.
          </h1>
          <p className="max-w-md text-lg text-[#b8d1c6]">
            Master your career trajectory with the AI mentor designed for
            high-stakes interviews.
          </p>

          <div className="mt-14 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
              <Sparkles className="h-5 w-5 text-[var(--accent-lime)]" />
            </div>
            <p className="text-sm italic text-white/70">
              &quot;The Stoic Mentor for your career.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-full flex-col items-center justify-center bg-[var(--surface)] px-6 py-4 md:px-10 md:py-6">
        <div className="mb-5 md:hidden">
          <p className="text-3xl font-black tracking-tight text-[var(--primary)]">
            Prepwise
          </p>
        </div>

        <div className="w-full max-w-md rounded-xl border border-[var(--outline-variant)]/30 bg-[var(--surface-lowest)] p-6 text-center shadow-[0px_28px_60px_-24px_rgba(25,28,28,0.16)] md:p-7">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-low)] text-[var(--primary)]">
            <MailCheck className="h-6 w-6" />
          </div>

          <h1 className="mb-2 text-3xl font-extrabold text-[var(--primary)]">
            Verify Your Email
          </h1>
          <p className="mb-7 text-[var(--on-surface-variant)]">
            We sent a verification link to
            <span className="ml-1 font-semibold text-[var(--primary)]">{email}</span>.
            Please verify your email, then login.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/login"
              className="w-full rounded-xl bg-[var(--primary-container)] px-6 py-3 font-bold text-white transition-all hover:bg-[#0a291f] sm:w-auto"
            >
              Go To Login
            </Link>
            <Link
              href="/register"
              className="w-full rounded-xl border border-[var(--outline-variant)] bg-[var(--surface-low)] px-6 py-3 font-bold text-[var(--primary)] transition-colors hover:bg-[var(--surface-high)] sm:w-auto"
            >
              Back To Register
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
