export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-extrabold text-[var(--primary)]">Terms of Use</h1>
      <p className="mb-6 text-[var(--on-surface-variant)]">
        By using Prepwise, you agree to use the platform for interview preparation and lawful educational purposes.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-[var(--on-surface-variant)]">
        <li>Do not misuse the platform or attempt unauthorized access.</li>
        <li>Content is provided for preparation guidance, not hiring guarantees.</li>
        <li>Accounts that violate terms may be suspended.</li>
      </ul>
    </main>
  );
}
