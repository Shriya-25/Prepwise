import Link from "next/link";

type VerifyEmailPageProps = {
  searchParams: Promise<{
    email?: string;
  }>;
};

export default async function VerifyEmailPage({ searchParams }: VerifyEmailPageProps) {
  const params = await searchParams;
  const email = params.email ? decodeURIComponent(params.email) : "your email";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--surface)] px-6">
      <div className="w-full max-w-xl rounded-2xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 text-center shadow-[0_28px_60px_-24px_rgba(25,28,28,0.16)] md:p-10">
        <h1 className="mb-3 text-3xl font-extrabold text-[var(--primary)]">
          Verify Your Email
        </h1>
        <p className="mb-8 text-[var(--on-surface-variant)]">
          We sent a verification link to
          <span className="ml-1 font-semibold text-[var(--primary)]">{email}</span>.
          Please verify your email, then login.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
    </main>
  );
}
