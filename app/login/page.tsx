"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Lock, Mail, Sparkles } from "lucide-react";

type LoginFormErrors = {
  email?: string;
  password?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginFormErrors>({});

  const validateForm = () => {
    const nextErrors: LoginFormErrors = {};
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      nextErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(normalizedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    setErrors({});
  };

  const clearError = (field: keyof LoginFormErrors) => {
    if (!errors[field]) {
      return;
    }

    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <main className="h-dvh overflow-hidden md:grid md:grid-cols-2">
      <section className="relative hidden h-full overflow-hidden bg-[var(--primary)] px-10 py-10 text-white md:flex md:flex-col md:justify-center lg:px-16">
        <div className="absolute -right-32 -top-28 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[var(--accent-lime)]/15 blur-2xl" />

        <div className="relative z-10 max-w-xl">
          <p className="mb-10 text-4xl font-black tracking-tight text-[var(--accent-lime)]">
            Prepwise
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
            Focus on the goal.
            <br />
            Excellence follows practice.
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

        <div className="w-full max-w-md">
          <div className="mb-4 space-y-1.5 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-[var(--on-surface)]">
              Welcome back
            </h2>
            <p className="font-medium text-[var(--on-surface-variant)]">
              Please enter your details to sign in.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--outline-variant)]/30 bg-[var(--surface-lowest)] p-6 shadow-[0px_28px_60px_-24px_rgba(25,28,28,0.16)] md:p-7">
            <form className="space-y-4" noValidate onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[var(--on-surface)]"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--outline)]" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      clearError("email");
                    }}
                    placeholder="name@company.com"
                    aria-invalid={Boolean(errors.email)}
                    required
                    className={`w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm text-[var(--on-surface)] outline-none transition-all focus:ring-2 ${
                      errors.email
                        ? "border-[var(--error)] bg-[var(--error-container)]/40 focus:border-[var(--error)] focus:ring-[var(--error)]/20"
                        : "border-transparent bg-[var(--surface-high)] focus:border-[var(--accent-lime)] focus:ring-[var(--accent-lime)]/30"
                    }`}
                  />
                </div>
                {errors.email ? (
                  <p className="text-xs font-medium text-[var(--error)]">{errors.email}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-[var(--on-surface)]"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs font-bold text-[var(--primary)] transition-colors hover:text-[var(--secondary)]"
                  >
                    Forgot password
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--outline)]" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      clearError("password");
                    }}
                    placeholder="••••••••"
                    aria-invalid={Boolean(errors.password)}
                    required
                    className={`w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm text-[var(--on-surface)] outline-none transition-all focus:ring-2 ${
                      errors.password
                        ? "border-[var(--error)] bg-[var(--error-container)]/40 focus:border-[var(--error)] focus:ring-[var(--error)]/20"
                        : "border-transparent bg-[var(--surface-high)] focus:border-[var(--accent-lime)] focus:ring-[var(--accent-lime)]/30"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--outline)] transition-colors hover:text-[var(--primary)]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password ? (
                  <p className="text-xs font-medium text-[var(--error)]">{errors.password}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] px-4 py-3 font-bold text-white transition-all duration-200 hover:opacity-95 hover:shadow-lg active:scale-[0.98]"
              >
                Login
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="my-4 flex items-center">
              <div className="h-px flex-1 bg-[var(--outline-variant)]/40" />
              <span className="px-4 text-xs font-semibold text-[var(--outline)]">
                OR
              </span>
              <div className="h-px flex-1 bg-[var(--outline-variant)]/40" />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-[var(--outline-variant)]/35 bg-[var(--surface-low)] px-4 py-2.5 font-semibold text-[var(--on-surface)] transition-all hover:bg-[var(--surface-high)] active:scale-[0.99]"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-xs font-bold text-[#1a73e8] shadow-sm">
                G
              </span>
              Continue with Google
            </button>
          </div>

          <p className="mt-4 text-center font-medium text-[var(--on-surface-variant)]">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="ml-1 font-bold text-[var(--primary)] hover:underline"
            >
              Create account
            </Link>
          </p>

          <p className="mt-6 text-center text-xs font-medium tracking-wide text-[var(--outline)]">
            © 2026 Prepwise AI. The Stoic Mentor for your career.
          </p>
        </div>
      </section>
    </main>
  );
}
