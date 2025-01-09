"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  XCircle,
  Monitor,
  Smartphone,
  Tablet,
  Code,
  Sun,
  Moon,
  Terminal,
  Copy,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { codeToHtml } from "shiki";
import { CodeBlock } from "@/components/ui/code-block";

interface AlertVariant {
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

const alertVariants: AlertVariant[] = [
  {
    title: "Success Alert",
    description: "Display a success message to confirm an action.",
    preview: (
      <div className="flex gap-3 rounded-lg border p-4 bg-green-500/10 text-green-500 border-green-500/20">
        <CheckCircle2 className="h-5 w-5" />
        <div className="flex-1">
          <h5 className="font-medium mb-1">Success</h5>
          <p className="text-sm opacity-90">
            Your account has been successfully created.
          </p>
        </div>
      </div>
    ),
    code: `<div className="flex gap-3 rounded-lg border p-4 bg-green-500/10 text-green-500 border-green-500/20">
  <CheckCircle2 className="h-5 w-5" />
  <div className="flex-1">
    <h5 className="font-medium mb-1">Success</h5>
    <p className="text-sm opacity-90">Your account has been successfully created.</p>
  </div>
</div>`,
  },
  {
    title: "Error Alert",
    description: "Show error messages when something goes wrong.",
    preview: (
      <div className="flex gap-3 rounded-lg border p-4 bg-red-500/10 text-red-500 border-red-500/20">
        <XCircle className="h-5 w-5" />
        <div className="flex-1">
          <h5 className="font-medium mb-1">Error</h5>
          <p className="text-sm opacity-90">
            Oops! Something went wrong. Please try again.
          </p>
        </div>
      </div>
    ),
    code: `<div className="flex gap-3 rounded-lg border p-4 bg-red-500/10 text-red-500 border-red-500/20">
  <XCircle className="h-5 w-5" />
  <div className="flex-1">
    <h5 className="font-medium mb-1">Error</h5>
    <p className="text-sm opacity-90">Oops! Something went wrong. Please try again.</p>
  </div>
</div>`,
  },
  {
    title: "Warning Alert",
    description: "Display warning messages for important notices.",
    preview: (
      <div className="flex gap-3 rounded-lg border p-4 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
        <AlertCircle className="h-5 w-5" />
        <div className="flex-1">
          <h5 className="font-medium mb-1">Warning</h5>
          <p className="text-sm opacity-90">
            Your session is about to expire in 5 minutes.
          </p>
        </div>
      </div>
    ),
    code: `<div className="flex gap-3 rounded-lg border p-4 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
  <AlertCircle className="h-5 w-5" />
  <div className="flex-1">
    <h5 className="font-medium mb-1">Warning</h5>
    <p className="text-sm opacity-90">Your session is about to expire in 5 minutes.</p>
  </div>
</div>`,
  },
  {
    title: "Info Alert",
    description: "Show informational messages and updates.",
    preview: (
      <div className="flex gap-3 rounded-lg border p-4 bg-blue-500/10 text-blue-500 border-blue-500/20">
        <Info className="h-5 w-5" />
        <div className="flex-1">
          <h5 className="font-medium mb-1">Info</h5>
          <p className="text-sm opacity-90">
            A new software update is available for your device.
          </p>
        </div>
      </div>
    ),
    code: `<div className="flex gap-3 rounded-lg border p-4 bg-blue-500/10 text-blue-500 border-blue-500/20">
  <Info className="h-5 w-5" />
  <div className="flex-1">
    <h5 className="font-medium mb-1">Info</h5>
    <p className="text-sm opacity-90">A new software update is available for your device.</p>
  </div>
</div>`,
  },
];

interface VariantSectionProps {
  variant: AlertVariant;
  index: number;
}

function ThemedComponent({ children }: { children: React.ReactNode }) {
  const [localTheme, setLocalTheme] = useState<"light" | "dark" | "system">(
    "system"
  );

  return (
    <div data-theme={localTheme} className="rounded-lg">
      {children}
    </div>
  );
}

function VariantSection({ variant, index }: VariantSectionProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [deviceSize, setDeviceSize] = useState<DeviceSize>("responsive");
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");
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
            {/* Theme Toggle */}
            {/* <button
              onClick={() =>
                setLocalTheme(localTheme === "dark" ? "light" : "dark")
              }
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted transition-colors"
              title={`Switch to ${
                localTheme === "dark" ? "light" : "dark"
              } mode`}
            >
              {localTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button> */}

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
      <div data-theme={localTheme} className="p-6">
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

// const CodeBlock = ({ code }: { code: string }) => {
//   const [highlightedCode, setHighlightedCode] = useState("");
//   const { theme } = useTheme();

//   useEffect(() => {
//     const highlight = async () => {
//       const html = await codeToHtml(code, {
//         lang: "html",
//         theme: theme === "dark" ? "poimandres" : "poimandres",
//       });
//       setHighlightedCode(html);
//     };
//     highlight();
//   }, [code, theme]);

//   return (
//     <pre className="overflow-x-auto rounded-lg border bg-muted/50 p-4">
//       <div
//         dangerouslySetInnerHTML={{ __html: highlightedCode }}
//         className="text-sm"
//       />
//     </pre>
//   );
// };

export default function AlertsPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Alert Components</h1>
          <p className="text-muted-foreground">
            Display important messages and feedback to users.
          </p>
        </div>
      </header>

      {/* Variants */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8">
          {alertVariants.map((variant, index) => (
            <VariantSection key={index} variant={variant} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
