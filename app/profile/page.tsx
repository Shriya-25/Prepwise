import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ProfileClient from "./profile-client";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("prepwise_session")?.value;
  const userEmail = decodeURIComponent(
    cookieStore.get("prepwise_user_email")?.value || ""
  );
  const userName = decodeURIComponent(
    cookieStore.get("prepwise_user_name")?.value || "Prepwise User"
  );
  const joinedAt = decodeURIComponent(
    cookieStore.get("prepwise_joined_at")?.value || ""
  );

  if (!sessionCookie) {
    redirect("/login");
  }

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
