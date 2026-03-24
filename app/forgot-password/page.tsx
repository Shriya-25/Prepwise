"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FirebaseError } from "firebase/app";
import { sendPasswordResetEmail } from "firebase/auth";
import { ArrowLeft, Mail } from "lucide-react";
import { auth } from "@/lib/firebase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      setStatus("");
      return;
    }

    setError("");
    setStatus("");
    setIsSubmitting(true);

    try {
      await sendPasswordResetEmail(auth, normalizedEmail);
      setStatus("Password reset link sent. Check your inbox.");
    } catch (err) {
      if (err instanceof FirebaseError && err.code === "auth/user-not-found") {
        setError("No account was found with this email.");
      } else {
        setError("Unable to send reset email right now. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--surface)] px-6">
      <section className="w-full max-w-md rounded-2xl border border-[var(--outline-variant)]/40 bg-[var(--surface-lowest)] p-8 shadow-[0_28px_60px_-24px_rgba(25,28,28,0.16)]">
        <Link
          href="/login"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:text-[var(--secondary)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Login
        </Link>

        <h1 className="mb-2 text-2xl font-extrabold text-[var(--primary)]">
          Reset Password
        </h1>
        <p className="mb-6 text-sm text-[var(--on-surface-variant)]">
          Enter your account email and we will send a reset link.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-[var(--on-surface)]" htmlFor="email">
            Email address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--outline)]" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@company.com"
              className="w-full rounded-lg border border-transparent bg-[var(--surface-high)] py-2.5 pl-10 pr-3 text-sm text-[var(--on-surface)] outline-none transition-all focus:border-[var(--accent-lime)] focus:ring-2 focus:ring-[var(--accent-lime)]/30"
            />
          </div>

          {status ? <p className="text-sm font-medium text-[#2f4f00]">{status}</p> : null}
          {error ? <p className="text-sm font-medium text-[var(--error)]">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[var(--primary-container)] px-4 py-3 font-bold text-white transition-all hover:opacity-95 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </section>
    </main>
  );
}
