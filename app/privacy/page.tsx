export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-4xl font-extrabold text-[var(--primary)]">Privacy Policy</h1>
      <p className="mb-6 text-[var(--on-surface-variant)]">
        Prepwise stores account and interview data to provide personalized feedback and progress tracking.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-[var(--on-surface-variant)]">
        <li>We only collect information required to run interviews and show reports.</li>
        <li>Authentication is handled through Firebase Authentication.</li>
        <li>You can request account deletion by contacting support.</li>
      </ul>
    </main>
  );
}
