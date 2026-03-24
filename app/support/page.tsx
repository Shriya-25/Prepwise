import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-extrabold text-[var(--primary)]">Support</h1>
      <p className="mb-6 text-[var(--on-surface-variant)]">
        Need help with account access, billing, or interview sessions? Reach out and we will assist you.
      </p>
      <p className="text-[var(--on-surface-variant)]">
        Contact us through the <Link href="/contact" className="font-bold text-[var(--primary)] underline">contact page</Link> with your issue details.
      </p>
    </main>
  );
}
