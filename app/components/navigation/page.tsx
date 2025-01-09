"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
  Copy,
  Menu,
  X as XIcon,
  ChevronDown,
  Search,
  Bell,
  User,
  Home,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface NavigationVariant {
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

const navigationVariants: NavigationVariant[] = [
  {
    title: "Basic Navbar",
    description: "Simple navigation bar with logo and links.",
    preview: (
      <nav className="border-b">
        <div className="flex h-14 items-center px-4">
          <a href="#" className="font-semibold">
            Brand
          </a>
          <div className="ml-auto flex items-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Products
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    ),
    code: `<nav className="border-b">
  <div className="flex h-14 items-center px-4">
    <a href="#" className="font-semibold">
      Brand
    </a>
    <div className="ml-auto flex items-center space-x-4">
      <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </a>
      <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        About
      </a>
      <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Products
      </a>
      <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Contact
      </a>
    </div>
  </div>
</nav>`,
  },
  {
    title: "Navbar with Search",
    description: "Navigation bar with search and user actions.",
    preview: (
      <nav className="border-b">
        <div className="flex h-14 items-center px-4 gap-4">
          <a href="#" className="font-semibold">
            Brand
          </a>
          <div className="flex-1 flex items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="flex h-9 w-full rounded-md border border-input bg-background pl-8 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-muted transition-colors">
              <Bell className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-muted transition-colors">
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>
    ),
    code: `<nav className="border-b">
  <div className="flex h-14 items-center px-4 gap-4">
    <a href="#" className="font-semibold">
      Brand
    </a>
    <div className="flex-1 flex items-center">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search..."
          className="flex h-9 w-full rounded-md border border-input bg-background pl-8 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-muted transition-colors">
        <Bell className="h-4 w-4" />
      </button>
      <button className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-muted transition-colors">
        <User className="h-4 w-4" />
      </button>
    </div>
  </div>
</nav>`,
  },
  {
    title: "Mobile Navigation",
    description: "Responsive navigation with mobile menu.",
    preview: (
      <nav className="border-b">
        <div className="flex h-14 items-center px-4 justify-between lg:hidden">
          <a href="#" className="font-semibold">
            Brand
          </a>
          <button className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-muted transition-colors">
            <Menu className="h-4 w-4" />
          </button>
        </div>
        <div className="hidden lg:flex h-14 items-center px-4">
          <a href="#" className="font-semibold">
            Brand
          </a>
          <div className="ml-auto flex items-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Products
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    ),
    code: `<nav className="border-b">
  <div className="flex h-14 items-center px-4 justify-between lg:hidden">
    <a href="#" className="font-semibold">
      Brand
    </a>
    <button className="inline-flex items-center justify-center rounded-md w-9 h-9 hover:bg-muted transition-colors">
      <Menu className="h-4 w-4" />
    </button>
  </div>
  <div className="hidden lg:flex h-14 items-center px-4">
    <a href="#" className="font-semibold">
      Brand
    </a>
    <div className="ml-auto flex items-center space-x-4">
      <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </a>
      <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        About
      </a>
      <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Products
      </a>
      <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Contact
      </a>
    </div>
  </div>
</nav>`,
  },
  {
    title: "Sidebar Navigation",
    description: "Vertical sidebar with navigation links.",
    preview: (
      <div className="w-64 border-r h-[400px]">
        <div className="flex h-14 items-center border-b px-4 font-semibold">
          Dashboard
        </div>
        <div className="space-y-1 p-2">
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-primary text-primary-foreground"
          >
            <Home className="h-4 w-4" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
          >
            <Settings className="h-4 w-4" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </a>
        </div>
      </div>
    ),
    code: `<div className="w-64 border-r h-[400px]">
  <div className="flex h-14 items-center border-b px-4 font-semibold">
    Dashboard
  </div>
  <div className="space-y-1 p-2">
    <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-primary text-primary-foreground">
      <Home className="h-4 w-4" />
      Home
    </a>
    <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
      <Settings className="h-4 w-4" />
      Settings
    </a>
    <a href="#" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
      <LogOut className="h-4 w-4" />
      Logout
    </a>
  </div>
</div>`,
  },
];

interface VariantSectionProps {
  variant: NavigationVariant;
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
            <div className="rounded-lg border border-border/50 bg-background/50">
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

export default function NavigationPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Navigation Components</h1>
          <p className="text-muted-foreground">
            Navigation components for building app layouts and menus.
          </p>
        </div>
      </header>

      {/* Variants */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8">
          {navigationVariants.map((variant, index) => (
            <VariantSection key={index} variant={variant} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
