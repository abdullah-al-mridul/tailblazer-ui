"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  Copy,
  Terminal,
  Smartphone,
  Tablet,
  Monitor,
  Check,
} from "lucide-react";
import { useState } from "react";

interface ComponentPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
  preview: React.ReactNode;
  codeExample: string;
}

type ViewMode = "preview" | "code";
type DeviceSize = "mobile" | "tablet" | "desktop" | "responsive";

export function ComponentPage({
  title,
  description,
  children,
  preview,
  codeExample,
}: ComponentPageProps) {
  const [activeTab, setActiveTab] = useState<ViewMode>("preview");
  const [deviceSize, setDeviceSize] = useState<DeviceSize>("responsive");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const deviceSizes = {
    mobile: "max-w-[320px]",
    tablet: "max-w-[768px]",
    desktop: "max-w-[1280px]",
    responsive: "w-full",
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* View Toggle */}
          <div className="flex items-center rounded-lg border border-border p-1 bg-muted/50">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "preview"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "code"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Code
            </button>
          </div>

          {/* Device Size Controls */}
          {activeTab === "preview" && (
            <div className="flex items-center rounded-lg border border-border p-1 bg-muted/50">
              <button
                onClick={() => setDeviceSize("mobile")}
                className={`p-2 rounded-md transition-colors ${
                  deviceSize === "mobile"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Mobile view"
              >
                <Smartphone className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceSize("tablet")}
                className={`p-2 rounded-md transition-colors ${
                  deviceSize === "tablet"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Tablet view"
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceSize("desktop")}
                className={`p-2 rounded-md transition-colors ${
                  deviceSize === "desktop"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Desktop view"
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                onClick={() => setDeviceSize("responsive")}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  deviceSize === "responsive"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Responsive view"
              >
                100%
              </button>
            </div>
          )}
        </div>

        {activeTab === "preview" ? (
          // Preview Section with Device Size Container
          <div className="flex justify-center border-border bg-background/50 rounded-lg p-4">
            <div
              className={`${deviceSizes[deviceSize]} transition-all duration-300`}
            >
              <div className="grid gap-6">
                {preview}
                {children}
              </div>
            </div>
          </div>
        ) : (
          // Code Section
          <div className="relative">
            <div className="absolute right-4 top-4">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors hover:bg-muted"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy code
                  </>
                )}
              </button>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Example Usage</span>
              </div>
              <pre className="text-sm overflow-x-auto p-4 rounded-md bg-muted/50">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
