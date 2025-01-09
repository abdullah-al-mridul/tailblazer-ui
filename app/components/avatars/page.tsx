"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
  Copy,
} from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface AvatarVariant {
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

const avatarVariants: AvatarVariant[] = [
  {
    title: "Basic Avatar",
    description: "Simple circular avatar with an image.",
    preview: (
      <div className="flex gap-4 items-center">
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-10 h-10"
        />
      </div>
    ),
    code: `<img
  src="https://github.com/shadcn.png"
  alt="User"
  className="rounded-full w-10 h-10"
/>`,
  },
  {
    title: "Avatar Sizes",
    description: "Different sizes for avatars.",
    preview: (
      <div className="flex gap-4 items-center">
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-8 h-8"
        />
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-10 h-10"
        />
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-12 h-12"
        />
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-16 h-16"
        />
      </div>
    ),
    code: `<div className="flex gap-4 items-center">
  <img
    src="https://github.com/shadcn.png"
    alt="User"
    className="rounded-full w-8 h-8"
  />
  <img
    src="https://github.com/shadcn.png"
    alt="User"
    className="rounded-full w-10 h-10"
  />
  <img
    src="https://github.com/shadcn.png"
    alt="User"
    className="rounded-full w-12 h-12"
  />
  <img
    src="https://github.com/shadcn.png"
    alt="User"
    className="rounded-full w-16 h-16"
  />
</div>`,
  },
  {
    title: "Fallback Initials",
    description: "Avatar with fallback initials when image fails to load.",
    preview: (
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
          JD
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
          AB
        </div>
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
          YZ
        </div>
      </div>
    ),
    code: `<div className="flex gap-4 items-center">
  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
    JD
  </div>
  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
    AB
  </div>
  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
    YZ
  </div>
</div>`,
  },
  {
    title: "Avatar with Border",
    description: "Avatars with different border styles.",
    preview: (
      <div className="flex gap-4 items-center">
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-10 h-10 ring-2 ring-primary ring-offset-2 ring-offset-background"
        />
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-10 h-10 border-2 border-blue-500"
        />
        <img
          src="https://github.com/shadcn.png"
          alt="User"
          className="rounded-full w-10 h-10 ring-2 ring-green-500 ring-offset-2 ring-offset-background"
        />
      </div>
    ),
    code: `<div className="flex gap-4 items-center">
  <img
    src="https://github.com/shadcn.png"
    alt="User"
    className="rounded-full w-10 h-10 ring-2 ring-primary ring-offset-2 ring-offset-background"
  />
  <img
    src="https://github.com/shadcn.png"
    alt="User"
    className="rounded-full w-10 h-10 border-2 border-blue-500"
  />
  <img
    src="https://github.com/shadcn.png"
    alt="User"
    className="rounded-full w-10 h-10 ring-2 ring-green-500 ring-offset-2 ring-offset-background"
  />
</div>`,
  },
];

interface VariantSectionProps {
  variant: AvatarVariant;
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

export default function AvatarsPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Avatar Components</h1>
          <p className="text-muted-foreground">
            Display user profile pictures and fallback initials.
          </p>
        </div>
      </header>

      {/* Variants */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8">
          {avatarVariants.map((variant, index) => (
            <VariantSection key={index} variant={variant} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
