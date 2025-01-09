"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
  Copy,
  Mail,
  Loader2,
  Plus,
  Trash,
  Download,
  Send,
} from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface ButtonVariant {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

type ViewMode = "preview" | "code";
type DeviceSize = "mobile" | "tablet" | "desktop" | "responsive";

const deviceSizes: Record<DeviceSize, string> = {
  mobile: "max-w-[320px]",
  tablet: "max-w-[640px]",
  desktop: "max-w-[1024px]",
  responsive: "w-full",
};

const buttonVariants: ButtonVariant[] = [
  {
    title: "Button Variants",
    description: "Different styles for different contexts.",
    preview: (
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          Primary
        </button>
        <button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          Destructive
        </button>
        <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          Secondary
        </button>
        <button className="hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          Ghost
        </button>
        <button className="bg-muted text-muted-foreground hover:bg-muted/80 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          Muted
        </button>
      </div>
    ),
    code: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  Primary
</button>
<button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  Destructive
</button>
<button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  Secondary
</button>
<button className="hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  Ghost
</button>
<button className="bg-muted text-muted-foreground hover:bg-muted/80 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  Muted
</button>`,
  },
  {
    title: "Button Sizes",
    description: "Different sizes for different use cases.",
    preview: (
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-xs font-medium h-7 px-3 transition-colors">
          Small
        </button>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 transition-colors">
          Default
        </button>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 transition-colors">
          Large
        </button>
      </div>
    ),
    code: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-xs font-medium h-7 px-3 transition-colors">
  Small
</button>
<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 transition-colors">
  Default
</button>
<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 transition-colors">
  Large
</button>`,
  },
  {
    title: "Button States",
    description: "Different states a button can be in.",
    preview: (
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          Default
        </button>
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors opacity-50 cursor-not-allowed"
          disabled
        >
          Disabled
        </button>
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </button>
      </div>
    ),
    code: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  Default
</button>
<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors opacity-50 cursor-not-allowed" disabled>
  Disabled
</button>
<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading
</button>`,
  },
  {
    title: "Button with Icons",
    description: "Buttons with different icon placements.",
    preview: (
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </button>
        <button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          <Trash className="mr-2 h-4 w-4" /> Delete
        </button>
        <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
          Download <Download className="ml-2 h-4 w-4" />
        </button>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium w-9 h-9 p-0 transition-colors">
          <Plus className="h-4 w-4" />
        </button>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-full text-sm font-medium w-9 h-9 p-0 transition-colors">
          <Send className="h-4 w-4" />
        </button>
      </div>
    ),
    code: `<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  <Mail className="mr-2 h-4 w-4" /> Login with Email
</button>
<button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  <Trash className="mr-2 h-4 w-4" /> Delete
</button>
<button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors">
  Download <Download className="ml-2 h-4 w-4" />
</button>
<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium w-9 h-9 p-0 transition-colors">
  <Plus className="h-4 w-4" />
</button>
<button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-full text-sm font-medium w-9 h-9 p-0 transition-colors">
  <Send className="h-4 w-4" />
</button>`,
  },
];

interface VariantSectionProps {
  variant: ButtonVariant;
  index: number;
}

function VariantSection({ variant, index }: VariantSectionProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [deviceSize, setDeviceSize] = useState<DeviceSize>("responsive");
  const [copied, setCopied] = useState(false);

  return (
    <section className="overflow-hidden rounded-xl border border-border glass-effect-2 !shadow-none">
      {/* Section Header */}
      <div className="border-b border-white/10 border-border bg-muted/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">{variant.title}</h2>
            <p className="text-sm text-muted-foreground">
              {variant.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <button
              onClick={() =>
                setViewMode(viewMode === "preview" ? "code" : "preview")
              }
              className={`inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 glass-effect-2 !shadow-none transition-colors ${
                viewMode === "code" ? "" : "hover:bg-white/[0.05]"
              }`}
              style={{
                backgroundColor:
                  viewMode === "code" ? "rgba(255, 255, 255, 0.13)" : "",
              }}
              title={`Show ${viewMode === "preview" ? "code" : "preview"}`}
            >
              <Code className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Device Size Controls */}
        {viewMode === "preview" && (
          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 p-1">
              <button
                onClick={() => setDeviceSize("mobile")}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-all ${
                  deviceSize === "mobile"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Mobile view (320px)"
              >
                <Smartphone className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceSize("tablet")}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-all ${
                  deviceSize === "tablet"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Tablet view (640px)"
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceSize("desktop")}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-all ${
                  deviceSize === "desktop"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Desktop view (1024px)"
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceSize("responsive")}
                className={`inline-flex h-7 px-2 items-center justify-center rounded-md text-xs font-medium transition-all ${
                  deviceSize === "responsive"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Responsive view"
              >
                100%
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6">
        {viewMode === "preview" ? (
          <div
            className={`mx-auto ${deviceSizes[deviceSize]} transition-all duration-300`}
          >
            <div className="rounded-lg border border-border/50 bg-background/50 p-6">
              {variant.preview}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Example Usage</span>
              </div>
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(variant.code);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium hover:bg-muted"
              >
                <Copy className="h-3 w-3" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <CodeBlock
              code={variant.code}
              language="jsx"
              showLineNumbers={false}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default function ButtonsPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Button Components</h1>
          <p className="text-muted-foreground">
            Interactive button elements with different styles and states.
          </p>
        </div>
      </header>

      {/* Variants */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8">
          {buttonVariants.map((variant, index) => (
            <VariantSection key={index} variant={variant} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
