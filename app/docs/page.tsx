"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Book,
  Github,
  Boxes,
  Component,
  Puzzle,
  FileCode,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const guides = [
  {
    title: "Components",
    description: "Explore our collection of pre-built components",
    href: "/components",
    icon: Component,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "Documentation",
    description: "Read our comprehensive guides and tutorials",
    href: "/docs",
    icon: Book,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Examples",
    description: "View example projects and implementations",
    href: "#",
    icon: Boxes,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    title: "Source Code",
    description: "Browse our GitHub repository",
    href: "https://github.com/abdullah-al-mridul/tailblazer-ui",
    icon: Github,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
];

export default function DocsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold mb-2">Documentation</h1>
          <p className="text-muted-foreground">
            Learn how to install and use our components in your projects.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Installation & Usage */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            {/* Installation */}
            <section className="rounded-xl border border-border glass-effect-2 !shadow-none overflow-hidden">
              <div className="border-b border-white/10 border-border bg-muted/50 px-4 sm:px-6 py-4">
                <h2 className="text-xl font-semibold">Installation</h2>
                <p className="text-sm text-muted-foreground">
                  Get started with Tailblazer UI by installing the dependencies
                </p>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Install dependencies
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          "pnpm install -D tailwindcss postcss autoprefixer",
                          0
                        )
                      }
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copiedIndex === 0 ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-muted/50 overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                      <code className="text-sm whitespace-pre-wrap break-all sm:break-normal">
                        pnpm install -D tailwindcss postcss autoprefixer
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Initialize Tailwind CSS
                    </span>
                    <button
                      onClick={() => handleCopy("npx tailwindcss init -p", 1)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copiedIndex === 1 ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-lg bg-muted/50 overflow-x-auto">
                    <code className="text-sm">npx tailwindcss init -p</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Configuration */}
            <section className="rounded-xl border border-border glass-effect-2 !shadow-none overflow-hidden">
              <div className="border-b border-white/10 bg-muted/50 px-4 sm:px-6 py-4">
                <h2 className="text-xl font-semibold">Configuration</h2>
                <p className="text-sm text-muted-foreground">
                  Add the required configuration to your project
                </p>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      tailwind.config.js
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          `module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [],
}`,
                          2
                        )
                      }
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copiedIndex === 2 ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-muted/50 overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                      <code className="text-sm whitespace-pre-wrap break-all sm:break-normal">
                        {`module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [],
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="rounded-xl border border-border glass-effect-2 !shadow-none overflow-hidden sticky top-[120px]">
              <div className="border-b border-white/10 bg-muted/50 px-4 sm:px-6 py-4">
                <h2 className="text-xl font-semibold">Quick Links</h2>
                <p className="text-sm text-muted-foreground">
                  Helpful resources to get you started
                </p>
              </div>
              <div className="p-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {guides.map((guide) => (
                    <Link
                      key={guide.title}
                      href={guide.href}
                      className="group flex items-center gap-4 rounded-lg border border-white/[0.05] p-4 transition-colors hover:border-white/10"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${guide.bgColor} ${guide.borderColor} border`}
                      >
                        <guide.icon className={`h-6 w-6 ${guide.color}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-medium truncate group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground ">
                          {guide.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
