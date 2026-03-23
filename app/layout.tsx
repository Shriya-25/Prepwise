import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import SiteFooter from "./components/site-footer";
import SiteNavbar from "./components/site-navbar";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prepwise | Mock Interview Platform",
  description:
    "Prepwise is a focused mock interview platform with structured feedback, downloadable reports, and performance analytics.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isLoggedIn = Boolean(cookieStore.get("prepwise_session")?.value);

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <head />
      <body className="min-h-full flex flex-col antialiased">
        <div className="flex min-h-screen flex-1 flex-col">
          <SiteNavbar isLoggedIn={isLoggedIn} />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
