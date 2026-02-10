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
  title: "ClaudeFlow — Claude Code, without the terminal",
  description:
    "A native desktop IDE with a real chat UI, built-in file tree, Monaco editor, and streaming tool visibility. Everything you need to code with Claude, in one window.",
  openGraph: {
    title: "ClaudeFlow — Claude Code, without the terminal",
    description:
      "A native desktop IDE with a real chat UI, built-in file tree, Monaco editor, and streaming tool visibility.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClaudeFlow — Claude Code, without the terminal",
    description:
      "A native desktop IDE with a real chat UI, built-in file tree, Monaco editor, and streaming tool visibility.",
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
