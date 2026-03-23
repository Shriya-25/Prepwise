import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserCircle2 } from "lucide-react";
import ProfileClient from "./profile-client";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("prepwise_session")?.value;
  const userEmail = decodeURIComponent(
    cookieStore.get("prepwise_user_email")?.value || "alex.rivera@example.com"
  );
  const userName = decodeURIComponent(
    cookieStore.get("prepwise_user_name")?.value || "Alex Rivera"
  );
  const joinedAt = decodeURIComponent(
    cookieStore.get("prepwise_joined_at")?.value || ""
  );

  if (!sessionCookie) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--surface)] text-[var(--on-surface)]">
      <header className="sticky top-0 z-50 border-b border-[var(--outline-variant)]/45 bg-[var(--surface)]/95 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-[var(--primary)]"
            >
              Prepwise
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/analytics"
                className="font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]"
              >
                Analytics
              </Link>
              <Link
                href="/aptitude"
                className="font-medium text-[var(--on-surface-variant)] transition-colors hover:text-[var(--primary)]"
              >
                Aptitude
              </Link>
            </div>
          </div>

          <Link
            href="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--accent-lime)] ring-2 ring-[var(--surface)]"
            aria-label="Profile page"
          >
            <UserCircle2 className="h-6 w-6 text-[var(--primary-container)]" />
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl">
          <ProfileClient
            initialUserName={userName}
            initialUserEmail={userEmail}
            initialJoinedAt={joinedAt}
          />
        </div>
      </main>
    </div>
  );
}
