"use client";

import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Getting Started</h1>

        <div className="space-y-8">
          {/* Installation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <p className="text-muted-foreground mb-4">
              Get started with Tailblazer UI by installing the required
              dependencies:
            </p>
            <div className="relative mb-6">
              <pre className="p-4 rounded-lg bg-accent overflow-x-auto">
                <code className="text-sm">
                  npm install -D tailwindcss postcss autoprefixer
                </code>
              </pre>
            </div>
            <p className="text-muted-foreground mb-4">
              Initialize Tailwind CSS in your project:
            </p>
            <div className="relative mb-6">
              <pre className="p-4 rounded-lg bg-accent overflow-x-auto">
                <code className="text-sm">npx tailwindcss init -p</code>
              </pre>
            </div>
          </section>

          {/* Configuration */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
            <p className="text-muted-foreground mb-4">
              Add the Tailblazer UI configuration to your tailwind.config.js:
            </p>
            <div className="relative mb-6">
              <pre className="p-4 rounded-lg bg-accent overflow-x-auto">
                <code className="text-sm">
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
        // ... other color configurations
      },
    },
  },
  plugins: [],
}`}
                </code>
              </pre>
            </div>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
            <p className="text-muted-foreground mb-4">
              Start using Tailblazer UI components in your project:
            </p>
            <div className="relative mb-6">
              <pre className="p-4 rounded-lg bg-accent overflow-x-auto">
                <code className="text-sm">
                  {`<button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
  Click me
</button>`}
                </code>
              </pre>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <div className="grid gap-4">
              <Link
                href="/components"
                className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
              >
                <div>
                  <h3 className="font-medium mb-1">Browse Components</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore our collection of pre-built components
                  </p>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://github.com"
                className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
              >
                <div>
                  <h3 className="font-medium mb-1">View Source</h3>
                  <p className="text-sm text-muted-foreground">
                    Check out our GitHub repository
                  </p>
                </div>
                <Terminal className="w-5 h-5" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
