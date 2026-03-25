import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type CurrentUser = {
  email: string;
  name: string;
};

export async function requireCurrentUser(): Promise<CurrentUser> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("prepwise_session")?.value;

  if (!sessionCookie) {
    redirect("/login");
  }

  return {
    email: decodeURIComponent(cookieStore.get("prepwise_user_email")?.value || ""),
    name: decodeURIComponent(
      cookieStore.get("prepwise_user_name")?.value || "Prepwise User"
    ),
  };
}
