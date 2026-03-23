import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--on-surface)]">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--surface-low)] text-[var(--primary)]">
          <BarChart3 className="h-8 w-8" />
        </div>
        <h1 className="mb-3 text-3xl font-extrabold text-[var(--primary)]">Analytics Dashboard</h1>
        <p className="max-w-xl text-[var(--on-surface-variant)]">
          Your analytics dashboard is ready for the next step. We will now wire it with
          completed interview sessions and score trends.
        </p>
      </main>
    </div>
  );
}
