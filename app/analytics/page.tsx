import Link from "next/link";
import { cookies } from "next/headers";
import { BarChart3 } from "lucide-react";

export default async function AnalyticsPage() {
  const cookieStore = await cookies();
  const isLoggedIn = Boolean(cookieStore.get("prepwise_session")?.value);

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--on-surface)]">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--surface-low)] text-[var(--primary)]">
          <BarChart3 className="h-8 w-8" />
        </div>
        <h1 className="mb-3 text-3xl font-extrabold text-[var(--primary)]">
          {isLoggedIn ? "Analytics Dashboard" : "Your Analytics Will Appear Here"}
        </h1>
        {isLoggedIn ? (
          <p className="max-w-xl text-[var(--on-surface-variant)]">
            Track your interview scores, question-wise feedback trends, and progress
            over time in one place.
          </p>
        ) : (
          <div className="max-w-2xl space-y-4">
            <p className="text-[var(--on-surface-variant)]">
              After each mock interview, this dashboard will show your overall score,
              strengths, improvement areas, and progress trends across sessions.
            </p>
            <p className="text-[var(--on-surface-variant)]">
              Login to start your test and unlock your personalized analytics here.
            </p>
            <div>
              <Link
                href="/login"
                className="inline-flex rounded-lg border border-[var(--outline-variant)] bg-white px-5 py-2 text-sm font-bold text-[var(--primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-container)] hover:bg-[var(--primary-container)] hover:text-white hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                Login To Start
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
