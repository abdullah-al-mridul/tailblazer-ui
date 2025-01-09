"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
  Copy,
  ChevronRight,
  Home,
  Settings,
  FileText,
  Folder,
} from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface BreadcrumbVariant {
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

const breadcrumbVariants: BreadcrumbVariant[] = [
  {
    title: "Basic Breadcrumb",
    description: "Simple text-based breadcrumb navigation.",
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Home
            </a>
          </li>
          <li className="text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Documents
            </a>
          </li>
          <li className="text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <span className="text-foreground font-medium">Current Page</span>
          </li>
        </ol>
      </nav>
    ),
    code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center gap-2">
    <li>
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Home
      </a>
    </li>
    <li className="text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li>
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Documents
      </a>
    </li>
    <li className="text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li>
      <span className="text-foreground font-medium">Current Page</span>
    </li>
  </ol>
</nav>`,
  },
  {
    title: "With Icons",
    description:
      "Breadcrumb navigation with icons for better visual hierarchy.",
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
          </li>
          <li className="text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Folder className="h-4 w-4" />
              <span>Documents</span>
            </a>
          </li>
          <li className="text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <div className="flex items-center gap-1 text-foreground font-medium">
              <FileText className="h-4 w-4" />
              <span>Current Page</span>
            </div>
          </li>
        </ol>
      </nav>
    ),
    code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center gap-2">
    <li>
      <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </a>
    </li>
    <li className="text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li>
      <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
        <Folder className="h-4 w-4" />
        <span>Documents</span>
      </a>
    </li>
    <li className="text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li>
      <div className="flex items-center gap-1 text-foreground font-medium">
        <FileText className="h-4 w-4" />
        <span>Current Page</span>
      </div>
    </li>
  </ol>
</nav>`,
  },
  {
    title: "Contained Style",
    description: "Breadcrumb with background and hover effects.",
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 rounded-lg bg-muted p-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground hover:bg-background hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
          </li>
          <li className="text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground hover:bg-background hover:text-foreground"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </a>
          </li>
          <li className="text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <div className="flex items-center gap-1 rounded-md bg-background px-2 py-1 font-medium">
              <FileText className="h-4 w-4" />
              <span>Profile</span>
            </div>
          </li>
        </ol>
      </nav>
    ),
    code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center gap-1 rounded-lg bg-muted p-1">
    <li>
      <a href="#" className="flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground hover:bg-background hover:text-foreground">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </a>
    </li>
    <li className="text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li>
      <a href="#" className="flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground hover:bg-background hover:text-foreground">
        <Settings className="h-4 w-4" />
        <span>Settings</span>
      </a>
    </li>
    <li className="text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li>
      <div className="flex items-center gap-1 rounded-md bg-background px-2 py-1 font-medium">
        <FileText className="h-4 w-4" />
        <span>Profile</span>
      </div>
    </li>
  </ol>
</nav>`,
  },
  {
    title: "Responsive Breadcrumb",
    description: "Breadcrumb that collapses on smaller screens.",
    preview: (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </a>
          </li>
          <li className="text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li className="hidden sm:block">
            <a
              href="#"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Folder className="h-4 w-4" />
              <span>Documents</span>
            </a>
          </li>
          <li className="hidden sm:block text-muted-foreground">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <div className="flex items-center gap-1 text-foreground font-medium">
              <FileText className="h-4 w-4" />
              <span>Current File</span>
            </div>
          </li>
        </ol>
      </nav>
    ),
    code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center gap-2">
    <li>
      <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
        <Home className="h-4 w-4" />
        <span className="hidden sm:inline">Home</span>
      </a>
    </li>
    <li className="text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li className="hidden sm:block">
      <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
        <Folder className="h-4 w-4" />
        <span>Documents</span>
      </a>
    </li>
    <li className="hidden sm:block text-muted-foreground">
      <ChevronRight className="h-4 w-4" />
    </li>
    <li>
      <div className="flex items-center gap-1 text-foreground font-medium">
        <FileText className="h-4 w-4" />
        <span>Current File</span>
      </div>
    </li>
  </ol>
</nav>`,
  },
];

interface VariantSectionProps {
  variant: BreadcrumbVariant;
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

export default function BreadcrumbsPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Breadcrumb Components</h1>
          <p className="text-muted-foreground">
            Navigation components that indicate the current page's location.
          </p>
        </div>
      </header>

      {/* Variants */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8">
          {breadcrumbVariants.map((variant, index) => (
            <VariantSection key={index} variant={variant} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
