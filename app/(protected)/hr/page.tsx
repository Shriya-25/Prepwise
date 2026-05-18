"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Briefcase, ArrowRight } from "lucide-react";

export default function HRStartPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startHRInterview = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "HR Manager" }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to generate HR questions");
      }

      const result = await response.json();
      localStorage.setItem("interview_questions", JSON.stringify(result.data.questions));
      localStorage.setItem("interview_role", result.data.role);
      localStorage.setItem("role", result.data.role);
      router.push("/interview");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Unexpected error");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--on-surface)]">
      <div className="w-full max-w-lg p-8">
        <section className="rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="rounded-full bg-[var(--secondary-container)] p-3">
              <Briefcase className="h-5 w-5 text-[var(--secondary)]" />
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-[var(--primary)]">HR Practice</h1>
          <p className="mb-6 text-[var(--on-surface-variant)]">Practice HR and People Operations interview questions with structured feedback.</p>

          {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

          <button
            onClick={startHRInterview}
            disabled={isLoading}
            className="inline-flex items-center gap-3 rounded-xl bg-[var(--accent-lime)] px-6 py-3 font-bold text-[#123220]"
          >
            {isLoading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#123220] border-t-transparent"/> : <ArrowRight className="h-4 w-4"/>}
            <span>{isLoading ? "Starting…" : "Start HR Interview"}</span>
          </button>
        </section>
      </div>
    </div>
  );
}
