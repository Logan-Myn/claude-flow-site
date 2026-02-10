"use client";

import {
  MessageSquare,
  FolderTree,
  Eye,
  Layers,
  Github,
  Download,
  ArrowRight,
  FolderOpen,
  Send,
  Sparkles,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TextAnimate } from "@/components/ui/text-animate";

const features = [
  {
    icon: MessageSquare,
    title: "Chat, not terminal",
    description:
      "Your Claude Code conversations, transformed. Real chat bubbles, streamed markdown, syntax highlighting — not raw JSON scrolling past in a terminal window.",
  },
  {
    icon: FolderTree,
    title: "Your codebase, always visible",
    description:
      "File tree and Monaco editor sit right next to the chat. Browse, edit, and save without switching to VS Code. Everything in one view.",
  },
  {
    icon: Eye,
    title: "Full transparency",
    description:
      "Every tool call, file read, and thought process — visible and collapsible. No more guessing what Claude did. You see it happen live.",
  },
  {
    icon: Layers,
    title: "One tab per project",
    description:
      "Each workspace keeps its own folder, editor state, and chat session. Switch between projects like browser tabs. Context stays where you left it.",
  },
];

const steps = [
  {
    icon: FolderOpen,
    step: "01",
    title: "Open a folder",
    description:
      "Pick any project. Codrift creates a workspace with file tree, editor, and connects to Claude Code automatically.",
  },
  {
    icon: Send,
    step: "02",
    title: "Chat naturally",
    description:
      "Type like you would in any chat app. Slash commands, markdown, multi-line — it just works. No CLI flags to remember.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Watch it flow",
    description:
      "Claude reads your files, thinks, writes code — all streaming in real-time. Same power as the CLI, but you can actually follow along.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
              <span className="font-mono text-xs font-bold text-white">cd</span>
            </div>
            <span className="font-semibold tracking-tight">Codrift</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <ShimmerButton
              className="h-8 text-sm"
              shimmerSize="0.04em"
              background="rgba(255,255,255,0.05)"
            >
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Download
            </ShimmerButton>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        <DotPattern
          className="opacity-[0.15] [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          cr={1}
          cx={1}
          cy={1}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <BlurFade delay={0.1}>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">
              <AnimatedShinyText className="text-muted-foreground">
                Not another AI IDE — your CLI, refined
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <TextAnimate animation="blurInUp" by="word" once>
                Claude Code feels different here
              </TextAnimate>
            </h1>
          </BlurFade>

          <BlurFade delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Codrift takes Claude Code out of the terminal and into a native
              desktop app. Same CLI you already use. Chat UI, file tree, code
              editor, and full visibility into what Claude does — in one window.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground/60">
              No subscription. No new AI model. You bring your Claude Code —
              we make it smooth.
            </p>
          </BlurFade>

          <BlurFade delay={0.6}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShimmerButton
                className="h-12 px-8 text-base font-medium"
                shimmerSize="0.05em"
                background="rgba(255,255,255,0.05)"
              >
                <Download className="mr-2 h-4 w-4" />
                Download for macOS
              </ShimmerButton>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center gap-2 rounded-full border border-white/10 px-8 text-base font-medium text-muted-foreground transition-all hover:border-white/20 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </BlurFade>

          {/* App mockup */}
          <BlurFade delay={0.8}>
            <div className="relative mx-auto mt-16 max-w-5xl">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50">
                <BorderBeam
                  size={200}
                  duration={8}
                  colorFrom="#6366f1"
                  colorTo="#8b5cf6"
                  borderWidth={1}
                />
                {/* Title bar */}
                <div className="flex h-10 items-center border-b border-white/5 bg-[#111] px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="ml-4 flex gap-1">
                    <div className="rounded-md bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300">
                      my-project
                    </div>
                    <div className="rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
                      api-server
                    </div>
                  </div>
                </div>
                {/* 3-panel layout */}
                <div className="flex h-[340px] md:h-[420px]">
                  {/* File tree */}
                  <div className="w-[180px] shrink-0 border-r border-white/5 bg-[#0d0d0d] p-3 text-xs">
                    <div
                      className="mb-2 font-medium uppercase tracking-wider text-white/40"
                      style={{ fontSize: "10px" }}
                    >
                      Explorer
                    </div>
                    <div className="space-y-1 font-mono text-white/50">
                      <div className="text-white/30">src/</div>
                      <div className="ml-3 text-white/50">components/</div>
                      <div className="ml-6 rounded bg-white/5 px-1 text-indigo-300">
                        ChatPanel.tsx
                      </div>
                      <div className="ml-6 text-white/50">Editor.tsx</div>
                      <div className="ml-6 text-white/50">FileTree.tsx</div>
                      <div className="ml-3 text-white/50">store/</div>
                      <div className="ml-6 text-white/50">workspace.ts</div>
                      <div className="ml-3 text-white/50">lib/</div>
                      <div className="text-white/30">src-tauri/</div>
                      <div className="text-white/50">package.json</div>
                    </div>
                  </div>
                  {/* Editor */}
                  <div className="flex-1 border-r border-white/5 bg-[#0a0a0a] p-4">
                    <div className="mb-3 flex gap-2 text-xs">
                      <span className="rounded bg-white/5 px-2 py-0.5 text-indigo-300">
                        ChatPanel.tsx
                      </span>
                      <span className="rounded px-2 py-0.5 text-white/30">
                        workspace.ts
                      </span>
                    </div>
                    <div className="space-y-1 font-mono text-xs leading-relaxed">
                      <div>
                        <span className="text-purple-400">export</span>{" "}
                        <span className="text-blue-400">function</span>{" "}
                        <span className="text-yellow-300">ChatPanel</span>
                        <span className="text-white/40">() {"{"}</span>
                      </div>
                      <div className="text-white/30">
                        {"  "}
                        <span className="text-purple-400">const</span> messages ={" "}
                        <span className="text-yellow-300">useMessages</span>();
                      </div>
                      <div className="text-white/30">
                        {"  "}
                        <span className="text-purple-400">const</span> send ={" "}
                        <span className="text-yellow-300">useSend</span>();
                      </div>
                      <div className="text-white/20">{"  "}</div>
                      <div className="text-white/30">
                        {"  "}
                        <span className="text-purple-400">return</span> (
                      </div>
                      <div className="text-white/30">
                        {"    "}&lt;<span className="text-blue-400">div</span>{" "}
                        <span className="text-green-400">className</span>=
                        <span className="text-orange-300">
                          {'"flex flex-col"'}
                        </span>
                        &gt;
                      </div>
                      <div className="text-white/20">{"      "}...</div>
                    </div>
                  </div>
                  {/* Chat */}
                  <div className="w-[260px] shrink-0 bg-[#0d0d0d] p-3 text-xs">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-white/40">Claude connected</span>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-white/5 p-2.5 text-white/70">
                        Add a dark mode toggle to the header component
                      </div>
                      <div className="space-y-2">
                        <div className="rounded-lg bg-indigo-500/10 p-2.5 text-indigo-200/70">
                          I&apos;ll add a dark mode toggle. Let me read the
                          current header...
                        </div>
                        <div className="rounded border border-white/5 bg-white/[0.02] p-2 text-white/40">
                          <div className="mb-1 text-[10px] text-white/20">
                            Tool: read_file
                          </div>
                          src/components/Header.tsx
                        </div>
                        <div className="rounded-lg bg-indigo-500/10 p-2.5 text-indigo-200/70">
                          Done. I&apos;ve added a toggle button using
                          <span className="font-mono text-indigo-300">
                            {" "}
                            next-themes
                          </span>
                          .
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-background to-transparent" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="border-y border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
              Warp made the terminal not suck.
              <br />
              Arc rethought the browser.
              <br />
              <span className="text-foreground">
                Codrift does the same for Claude Code.
              </span>
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <BlurFade delay={0.1} inView>
            <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-indigo-400">
              What changes
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Same Claude Code. Better everything else.
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
              We don&apos;t replace your CLI — we put a proper interface around it.
              The AI stays the same. The experience transforms.
            </p>
          </BlurFade>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <BlurFade key={feature.title} delay={0.2 + i * 0.1} inView>
                <MagicCard
                  className="h-full cursor-default rounded-xl"
                  gradientColor="#1a1a2e"
                  gradientFrom="#6366f1"
                  gradientTo="#8b5cf6"
                  gradientOpacity={0.15}
                >
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                      <feature.icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <BlurFade delay={0.1} inView>
            <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-indigo-400">
              How it works
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">
              From terminal to flow in three steps
            </h2>
          </BlurFade>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <BlurFade key={step.title} delay={0.2 + i * 0.15} inView>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <step.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div className="mb-2 font-mono text-xs text-indigo-400/60">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack bar */}
      <section className="border-y border-white/5 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/30">01</span>
                Tauri v2
              </span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/30">02</span>
                React 19
              </span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/30">03</span>
                TypeScript
              </span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/30">04</span>
                Monaco Editor
              </span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/30">05</span>
                Rust
              </span>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <DotPattern
          className="opacity-[0.1] [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          cr={1}
          cx={1}
          cy={1}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Your CLI deserves
              <br />
              a better interface
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Claude Code is powerful. Codrift makes it feel that way too. No
              subscription, no lock-in — just a native app that turns your
              terminal into something smooth.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShimmerButton
                className="h-12 px-8 text-base font-medium"
                shimmerSize="0.05em"
                background="rgba(255,255,255,0.05)"
              >
                <Download className="mr-2 h-4 w-4" />
                Download for macOS
              </ShimmerButton>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                or view the source on GitHub
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-muted-foreground">
          <span>Codrift</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
