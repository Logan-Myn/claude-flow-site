import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codrift — Claude Code feels different here",
  description:
    "Codrift takes Claude Code out of the terminal and into a native desktop app. Chat UI, file tree, code editor, and full visibility — in one window. No subscription, no new AI.",
  openGraph: {
    title: "Codrift — Claude Code feels different here",
    description:
      "A native desktop app that transforms Claude Code from a raw CLI into a smooth chat IDE. Same AI, better experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codrift — Claude Code feels different here",
    description:
      "A native desktop app that transforms Claude Code from a raw CLI into a smooth chat IDE. Same AI, better experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
