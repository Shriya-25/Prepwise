import ProfileClient from "./profile-client";
import { requireCurrentUser } from "@/lib/auth-session";

export default async function ProfilePage() {
  const user = await requireCurrentUser();

  const userEmail = user.email || "";
  const userName = user.name || "Prepwise User";
  const joinedAt = "";

  return (
    <div className="flex min-h-screen flex-col bg-[var(--surface)] text-[var(--on-surface)]">
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
