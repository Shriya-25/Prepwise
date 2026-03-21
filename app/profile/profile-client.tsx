"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import {
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  LogOut,
  Mic,
  UserCircle2,
} from "lucide-react";
import { auth, db } from "@/lib/firebase";

type ProfileClientProps = {
  initialUserName: string;
  initialUserEmail: string;
  initialJoinedAt: string;
};

export default function ProfileClient({
  initialUserName,
  initialUserEmail,
  initialJoinedAt,
}: ProfileClientProps) {
  const router = useRouter();
  const [fullName, setFullName] = useState(initialUserName);
  const [email, setEmail] = useState(initialUserEmail);
  const [bio, setBio] = useState(
    "Aspiring software engineer with a focus on machine learning and natural language processing. Currently practicing for technical interviews."
  );
  const [voiceInput, setVoiceInput] = useState(true);
  const [joinedAt, setJoinedAt] = useState(initialJoinedAt);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/login");
        return;
      }

      const authName = user.displayName || initialUserName || "Prepwise User";
      const authEmail = user.email || initialUserEmail;

      setFullName((prev) => prev || authName);
      setEmail((prev) => prev || authEmail);

      const createdAt = user.metadata.creationTime || initialJoinedAt;
      if (createdAt) {
        setJoinedAt(createdAt);
      }

      try {
        const profileRef = doc(db, "users", user.uid);
        const snapshot = await getDoc(profileRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          if (typeof data.fullName === "string" && data.fullName.trim()) {
            setFullName(data.fullName);
          }
          if (typeof data.bio === "string" && data.bio.trim()) {
            setBio(data.bio);
          }
          if (typeof data.voiceInput === "boolean") {
            setVoiceInput(data.voiceInput);
          }
        }
      } catch {
        setStatusType("error");
        setStatusMessage("Could not load profile details.");
      }
    });

    return () => unsubscribe();
  }, [initialJoinedAt, initialUserEmail, initialUserName, router]);

  const formattedJoinDate = useMemo(() => {
    if (!joinedAt) {
      return "Joined recently";
    }

    const date = new Date(joinedAt);
    if (Number.isNaN(date.getTime())) {
      return "Joined recently";
    }

    return `Joined ${new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date)}`;
  }, [joinedAt]);

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = fullName.trim();
    if (!name) {
      setStatusType("error");
      setStatusMessage("Full name is required.");
      return;
    }

    const currentUser = auth.currentUser;
    if (!currentUser) {
      setStatusType("error");
      setStatusMessage("Your session expired. Please login again.");
      router.replace("/login");
      return;
    }

    setSaving(true);
    setStatusMessage("");

    try {
      await updateProfile(currentUser, { displayName: name });

      await setDoc(
        doc(db, "users", currentUser.uid),
        {
          fullName: name,
          email: currentUser.email || email,
          bio: bio.trim(),
          voiceInput,
          updatedAt: serverTimestamp(),
          createdAt: currentUser.metadata.creationTime || joinedAt || null,
        },
        { merge: true }
      );

      const maxAge = 60 * 60 * 24 * 30;
      document.cookie = `prepwise_user_name=${encodeURIComponent(
        name
      )}; path=/; max-age=${maxAge}; samesite=lax`;

      if (currentUser.metadata.creationTime) {
        document.cookie = `prepwise_joined_at=${encodeURIComponent(
          currentUser.metadata.creationTime
        )}; path=/; max-age=${maxAge}; samesite=lax`;
      }

      setStatusType("success");
      setStatusMessage("Profile changes saved.");
    } catch {
      setStatusType("error");
      setStatusMessage("Unable to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-[24px] border border-[var(--surface-low)] bg-[var(--surface-lowest)] p-8 shadow-[0_32px_64px_-12px_rgba(25,28,28,0.06)] md:p-12">
      <section className="mb-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#d0d4db] ring-4 ring-[var(--surface-low)] shadow-sm">
              <UserCircle2 className="h-24 w-24 text-[#f3f4f6]" strokeWidth={1.25} />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-lg border-2 border-[var(--surface-lowest)] bg-[var(--accent-lime)] p-1.5 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-[#2f4f00]" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-[var(--primary)]">
              {fullName}
            </h1>
            <p className="mb-4 font-medium text-[var(--on-surface-variant)]">{email}</p>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-low)] px-4 py-2">
              <CalendarDays className="h-3.5 w-3.5 text-[var(--outline)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--on-surface-variant)]">
                {formattedJoinDate}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-10 h-px w-full bg-[var(--surface-low)]" />

      <section className="mb-12">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--outline)]">
          Profile Details
        </h2>
        <form className="space-y-6" onSubmit={handleSave}>
          <div className="space-y-2">
            <label
              htmlFor="full-name"
              className="px-1 text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
            >
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="w-full rounded-xl border-none bg-[var(--surface-low)] px-4 py-3 font-medium text-[var(--on-surface)] focus:ring-2 focus:ring-[var(--primary-container)]/20"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="px-1 text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              disabled
              value={email}
              className="w-full cursor-not-allowed rounded-xl border-none bg-[var(--surface-low)] px-4 py-3 font-medium text-[var(--outline)] opacity-70"
              readOnly
            />
            <p className="px-1 text-[10px] text-[var(--outline)]">
              Email cannot be changed once verified.
            </p>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="bio"
              className="px-1 text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)]"
            >
              Bio / Professional Summary
            </label>
            <textarea
              id="bio"
              rows={4}
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              className="w-full resize-none rounded-xl border-none bg-[var(--surface-low)] px-4 py-3 font-medium text-[var(--on-surface)] focus:ring-2 focus:ring-[var(--primary-container)]/20"
            />
          </div>

          {statusMessage ? (
            <p
              className={`text-sm font-medium ${
                statusType === "success"
                  ? "text-[#2f4f00]"
                  : "text-[var(--error)]"
              }`}
            >
              {statusMessage}
            </p>
          ) : null}

          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl bg-[var(--primary-container)] py-4 font-bold text-white shadow-lg shadow-[var(--primary-container)]/10 transition-all hover:bg-[#0a291f] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </section>

      <div className="mb-10 h-px w-full bg-[var(--surface-low)]" />

      <section className="mb-12">
        <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--outline)]">
          Preferences
        </h2>
        <div className="flex items-center justify-between rounded-xl bg-[var(--surface-low)] p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-lowest)] text-[var(--primary)]">
              <Mic className="h-5 w-5" />
            </div>
            <div>
              <p className="font-bold text-[var(--primary)]">Voice Input</p>
              <p className="text-sm text-[var(--on-surface-variant)]">
                Enable microphone for AI interviews
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setVoiceInput((prev) => !prev)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
              voiceInput ? "bg-[var(--accent-lime)]" : "bg-[var(--outline-variant)]"
            }`}
            aria-label={voiceInput ? "Voice input enabled" : "Voice input disabled"}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-[var(--primary-container)] shadow transition-transform ${
                voiceInput ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--outline)]">
          Account
        </h2>
        <Link
          href="/logout"
          className="group flex w-full items-center justify-between rounded-xl p-6 transition-all duration-300 hover:bg-[var(--error-container)]/20"
        >
          <div className="flex items-center gap-4 text-[var(--on-surface-variant)] group-hover:text-[var(--error)]">
            <LogOut className="h-5 w-5" />
            <span className="font-bold">Logout</span>
          </div>
          <ChevronRight className="h-5 w-5 text-[var(--outline)] transition-colors group-hover:text-[var(--error)]" />
        </Link>
      </section>
    </div>
  );
}
