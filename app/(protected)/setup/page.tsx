"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  CloudUpload,
  Info,
} from "lucide-react";

type FormState = {
  role: string;
  customRole: string;
  company: string;
  resumeName: string;
};

const roleOptions = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "Product Manager",
  "UI/UX Designer",
  "DevOps Engineer",
  "Custom",
];

export default function SetupPage() {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>({
    role: "",
    customRole: "",
    company: "",
    resumeName: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resolvedRole = useMemo(() => {
    if (formState.role === "Custom") {
      return formState.customRole.trim();
    }

    return formState.role;
  }, [formState.customRole, formState.role]);

  const canStart = Boolean(resolvedRole) && !isLoading;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) {
      return;
    }

    // Clear previous error
    setError(null);
    setIsLoading(true);

    try {
      // Call the API to generate questions
      const response = await fetch("/api/generate-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: resolvedRole,
          company: formState.company.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate questions");
      }

      const result = await response.json();

      // Store questions in localStorage
      localStorage.setItem("interview_questions", JSON.stringify(result.data.questions));
      localStorage.setItem("interview_role", result.data.role);
      if (result.data.company) {
        localStorage.setItem("interview_company", result.data.company);
      }

      // Redirect to interview page
      router.push("/interview");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--background)] text-[var(--on-surface)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55rem_28rem_at_90%_8%,rgba(163,255,18,0.16),transparent_60%),radial-gradient(40rem_24rem_at_10%_75%,rgba(15,61,46,0.08),transparent_65%)]" />
      <main className="flex flex-1 items-center justify-center px-6 py-12 md:py-20">
        <div className="w-full max-w-xl">
          <section className="rounded-xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 shadow-sm md:p-12">
            <header className="mb-10 text-center">
              <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-[var(--primary)] md:text-4xl">
                Setup Your Interview
              </h1>
              <p className="text-[var(--on-surface-variant)]">
                Configure your session to match your career goals.
              </p>
            </header>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-[var(--primary)]">Role (Required)</label>
                <div className="relative group">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <BriefcaseBusiness className="h-4 w-4 text-[var(--outline)] transition-colors group-focus-within:text-[var(--secondary)]" />
                  </div>
                  <select
                    value={formState.role}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, role: event.target.value }))
                    }
                    className="w-full appearance-none rounded-md border-none bg-[var(--surface-high)] py-4 pl-12 pr-10 text-[var(--on-surface)] transition-all focus:ring-2 focus:ring-[var(--secondary)]"
                    required
                  >
                    <option value="" disabled>
                      Select or search for a role
                    </option>
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <ChevronDown className="h-4 w-4 text-[var(--outline)]" />
                  </div>
                </div>

                {formState.role === "Custom" ? (
                  <input
                    value={formState.customRole}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, customRole: event.target.value }))
                    }
                    placeholder="Enter your role"
                    className="w-full rounded-md border-none bg-[var(--surface-high)] px-4 py-3 text-[var(--on-surface)] focus:ring-2 focus:ring-[var(--secondary)]"
                    required
                  />
                ) : null}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-[var(--primary)]">Company (Optional)</label>
                <div className="relative group">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Building2 className="h-4 w-4 text-[var(--outline)] transition-colors group-focus-within:text-[var(--secondary)]" />
                  </div>
                  <input
                    value={formState.company}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, company: event.target.value }))
                    }
                    placeholder="e.g. Google, Stripe, or Startup"
                    className="w-full rounded-md border-none bg-[var(--surface-high)] py-4 pl-12 pr-4 text-[var(--on-surface)] transition-all focus:ring-2 focus:ring-[var(--secondary)]"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-[var(--primary)]">Resume Upload (Optional)</label>
                <label className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[var(--outline-variant)] bg-[var(--surface-low)] p-8 transition-colors hover:border-[var(--secondary)]">
                  <CloudUpload className="h-10 w-10 text-[var(--outline)] group-hover:text-[var(--secondary)]" />
                  <div className="text-center">
                    <p className="font-medium text-[var(--on-surface)]">
                      {formState.resumeName || "Drag & drop your resume here"}
                    </p>
                    <p className="mt-1 text-xs text-[var(--on-surface-variant)]">PDF or DOC (Max 5MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      setFormState((prev) => ({
                        ...prev,
                        resumeName: file ? file.name : "",
                      }));
                    }}
                  />
                </label>
                <p className="flex items-center gap-1 text-xs text-[var(--outline)]">
                  <Info className="h-3.5 w-3.5" />
                  Optional: Used for better personalization in future
                </p>
              </div>

              {error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4">
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!canStart}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--accent-lime)] px-9 py-5 font-bold text-[#123220] shadow-[0_10px_28px_-14px_rgba(163,255,18,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#94ec11] hover:shadow-[0_18px_34px_-16px_rgba(163,255,18,0.95)] active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-65"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#123220] border-t-transparent" />
                      <span>Generating Questions...</span>
                    </>
                  ) : (
                    <>
                      <span>Begin Interview</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                {isLoading ? (
                  <p className="mt-3 text-center text-xs font-medium text-[var(--outline)]">
                    Loading interview setup...
                  </p>
                ) : null}
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
