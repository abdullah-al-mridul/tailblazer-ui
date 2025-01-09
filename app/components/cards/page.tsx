"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
  Copy,
  MoreVertical,
  Heart,
  Share2,
  ExternalLink,
  ChevronRight,
  Star,
  Clock,
  User,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface CardVariant {
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

const cardVariants: CardVariant[] = [
  {
    title: "Basic Card",
    description: "Simple card with title and content.",
    preview: (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
            Card Title
          </h3>
          <p className="text-sm text-muted-foreground">
            This is a basic card component with a title and some content. Cards
            can be used to group related information.
          </p>
        </div>
      </div>
    ),
    code: `<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
  <div className="p-6">
    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
      Card Title
    </h3>
    <p className="text-sm text-muted-foreground">
      This is a basic card component with a title and some content. Cards can
      be used to group related information.
    </p>
  </div>
</div>`,
  },
  {
    title: "Card with Image",
    description: "Card featuring an image with content.",
    preview: (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Code on screen"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4">
            <button className="inline-flex items-center justify-center rounded-full w-8 h-8 bg-white/30 backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
            Featured Project
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            A beautiful project showcasing modern development practices and
            clean code principles.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Share
            </button>
            <button className="text-sm text-primary hover:text-primary/80 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
  <div className="relative">
    <img
      src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      alt="Code on screen"
      className="w-full h-48 object-cover"
    />
    <div className="absolute top-4 right-4">
      <button className="inline-flex items-center justify-center rounded-full w-8 h-8 bg-white/30 backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
        <Heart className="h-4 w-4" />
      </button>
    </div>
  </div>
  <div className="p-6">
    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
      Featured Project
    </h3>
    <p className="text-sm text-muted-foreground mb-4">
      A beautiful project showcasing modern development practices and clean code principles.
    </p>
    <div className="flex items-center gap-4">
      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Share
      </button>
      <button className="text-sm text-primary hover:text-primary/80 transition-colors">
        Learn More →
      </button>
    </div>
  </div>
</div>`,
  },
  {
    title: "Interactive Card",
    description: "Clickable card with hover effects.",
    preview: (
      <div className="grid gap-4">
        <a
          href="#"
          className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                Getting Started Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn the basics of our platform
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </a>
        <a
          href="#"
          className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                API Documentation
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore our API endpoints
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </a>
      </div>
    ),
    code: `<a href="#" className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all p-6">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
        Getting Started Guide
      </h3>
      <p className="text-sm text-muted-foreground">
        Learn the basics of our platform
      </p>
    </div>
    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
  </div>
</a>`,
  },
  {
    title: "Card with Metadata",
    description: "Card displaying detailed information with metadata.",
    preview: (
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Featured Article</h3>
              <p className="text-sm text-muted-foreground">
                Best practices for modern web development
              </p>
            </div>
            <button className="ml-auto inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-1 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />5 min read
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="mr-1 h-4 w-4" />
              By John Doe
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              Published on March 1, 2024
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Read More
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
              Share <Share2 className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="rounded-lg border bg-card text-card-foreground shadow-sm">
  <div className="p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Star className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold">Featured Article</h3>
        <p className="text-sm text-muted-foreground">
          Best practices for modern web development
        </p>
      </div>
      <button className="ml-auto inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
        <MoreVertical className="h-4 w-4" />
      </button>
    </div>
    <div className="space-y-1 mb-4">
      <div className="flex items-center text-sm text-muted-foreground">
        <Clock className="mr-1 h-4 w-4" />
        5 min read
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <User className="mr-1 h-4 w-4" />
        By John Doe
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <Calendar className="mr-1 h-4 w-4" />
        Published on March 1, 2024
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
        Read More
      </button>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
        Share <Share2 className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
</div>`,
  },
];

interface VariantSectionProps {
  variant: CardVariant;
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

export default function CardsPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Card Components</h1>
          <p className="text-muted-foreground">
            Versatile card components for displaying content and information.
          </p>
        </div>
      </header>

      {/* Variants */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8">
          {cardVariants.map((variant, index) => (
            <VariantSection key={index} variant={variant} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
