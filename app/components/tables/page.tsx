"use client";

import { BackgroundEffects } from "@/components/ui/background-effects";
import {
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
  Copy,
  MoreHorizontal,
  ArrowUpDown,
  ChevronDown,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface TableVariant {
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

const tableVariants: TableVariant[] = [
  {
    title: "Basic Table",
    description: "Simple table with basic styling.",
    preview: (
      <div className="w-full overflow-auto">
        <div className="rounded-md border min-w-[600px]">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/50">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
                <th>Name</th>
                <th>Status</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="[&>tr:hover]:bg-muted/50">
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td>John Doe</td>
                <td>Active</td>
                <td>Developer</td>
                <td>john@example.com</td>
              </tr>
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td>Jane Smith</td>
                <td>Inactive</td>
                <td>Designer</td>
                <td>jane@example.com</td>
              </tr>
              <tr className="transition-colors [&>td]:px-4 [&>td]:py-3">
                <td>Bob Johnson</td>
                <td>Active</td>
                <td>Manager</td>
                <td>bob@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    code: `<div className="w-full overflow-auto">
  <div className="rounded-md border min-w-[600px]">
    <table className="w-full caption-bottom text-sm">
      <thead className="border-b bg-muted/50">
        <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
          <th>Name</th>
          <th>Status</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody className="[&>tr:hover]:bg-muted/50">
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td>John Doe</td>
          <td>Active</td>
          <td>Developer</td>
          <td>john@example.com</td>
        </tr>
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td>Jane Smith</td>
          <td>Inactive</td>
          <td>Designer</td>
          <td>jane@example.com</td>
        </tr>
        <tr className="transition-colors [&>td]:px-4 [&>td]:py-3">
          <td>Bob Johnson</td>
          <td>Active</td>
          <td>Manager</td>
          <td>bob@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  },
  {
    title: "Table with Status",
    description: "Table with status indicators and badges.",
    preview: (
      <div className="w-full overflow-auto">
        <div className="rounded-md border min-w-[600px]">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/50">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
                <th>Name</th>
                <th>Status</th>
                <th>Role</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="[&>tr:hover]:bg-muted/50">
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td className="font-medium">John Doe</td>
                <td>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-green-500/20 bg-green-500/10 text-green-500">
                    Active
                  </span>
                </td>
                <td>Developer</td>
                <td className="text-right">
                  <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td className="font-medium">Jane Smith</td>
                <td>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-red-500/20 bg-red-500/10 text-red-500">
                    Inactive
                  </span>
                </td>
                <td>Designer</td>
                <td className="text-right">
                  <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    code: `<div className="w-full overflow-auto">
  <div className="rounded-md border min-w-[600px]">
    <table className="w-full caption-bottom text-sm">
      <thead className="border-b bg-muted/50">
        <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
          <th>Name</th>
          <th>Status</th>
          <th>Role</th>
          <th className="text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="[&>tr:hover]:bg-muted/50">
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td className="font-medium">John Doe</td>
          <td>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-green-500/20 bg-green-500/10 text-green-500">
              Active
            </span>
          </td>
          <td>Developer</td>
          <td className="text-right">
            <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </td>
        </tr>
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td className="font-medium">Jane Smith</td>
          <td>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-red-500/20 bg-red-500/10 text-red-500">
              Inactive
            </span>
          </td>
          <td>Designer</td>
          <td className="text-right">
            <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  },
  {
    title: "Sortable Table",
    description: "Table with sortable columns.",
    preview: (
      <div className="w-full overflow-auto">
        <div className="rounded-md border min-w-[600px]">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/50">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
                <th>
                  <button className="inline-flex items-center gap-1 hover:text-foreground">
                    Name
                    <ArrowUpDown className="h-4 w-4" />
                  </button>
                </th>
                <th>
                  <button className="inline-flex items-center gap-1 hover:text-foreground">
                    Status
                    <ArrowUpDown className="h-4 w-4" />
                  </button>
                </th>
                <th>
                  <button className="inline-flex items-center gap-1 hover:text-foreground">
                    Role
                    <ArrowUpDown className="h-4 w-4" />
                  </button>
                </th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="[&>tr:hover]:bg-muted/50">
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td className="font-medium">John Doe</td>
                <td>Active</td>
                <td>Developer</td>
                <td className="text-right">
                  <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td className="font-medium">Jane Smith</td>
                <td>Inactive</td>
                <td>Designer</td>
                <td className="text-right">
                  <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    code: `<div className="w-full overflow-auto">
  <div className="rounded-md border min-w-[600px]">
    <table className="w-full caption-bottom text-sm">
      <thead className="border-b bg-muted/50">
        <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
          <th>
            <button className="inline-flex items-center gap-1 hover:text-foreground">
              Name
              <ArrowUpDown className="h-4 w-4" />
            </button>
          </th>
          <th>
            <button className="inline-flex items-center gap-1 hover:text-foreground">
              Status
              <ArrowUpDown className="h-4 w-4" />
            </button>
          </th>
          <th>
            <button className="inline-flex items-center gap-1 hover:text-foreground">
              Role
              <ArrowUpDown className="h-4 w-4" />
            </button>
          </th>
          <th className="text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="[&>tr:hover]:bg-muted/50">
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td className="font-medium">John Doe</td>
          <td>Active</td>
          <td>Developer</td>
          <td className="text-right">
            <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </td>
        </tr>
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td className="font-medium">Jane Smith</td>
          <td>Inactive</td>
          <td>Designer</td>
          <td className="text-right">
            <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  },
  {
    title: "Selectable Table",
    description: "Table with selectable rows.",
    preview: (
      <div className="w-full overflow-auto">
        <div className="rounded-md border min-w-[600px]">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/50">
              <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
                <th className="w-12">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-input bg-background"
                  />
                </th>
                <th>Name</th>
                <th>Status</th>
                <th>Role</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="[&>tr:hover]:bg-muted/50">
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-input bg-background"
                  />
                </td>
                <td className="font-medium">John Doe</td>
                <td>Active</td>
                <td>Developer</td>
                <td className="text-right">
                  <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
              <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
                <td>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-input bg-background"
                  />
                </td>
                <td className="font-medium">Jane Smith</td>
                <td>Inactive</td>
                <td>Designer</td>
                <td className="text-right">
                  <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    code: `<div className="w-full overflow-auto">
  <div className="rounded-md border min-w-[600px]">
    <table className="w-full caption-bottom text-sm">
      <thead className="border-b bg-muted/50">
        <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-medium [&>th]:text-left">
          <th className="w-12">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-input bg-background"
            />
          </th>
          <th>Name</th>
          <th>Status</th>
          <th>Role</th>
          <th className="text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="[&>tr:hover]:bg-muted/50">
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td>
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-input bg-background"
            />
          </td>
          <td className="font-medium">John Doe</td>
          <td>Active</td>
          <td>Developer</td>
          <td className="text-right">
            <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </td>
        </tr>
        <tr className="border-b transition-colors [&>td]:px-4 [&>td]:py-3">
          <td>
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-input bg-background"
            />
          </td>
          <td className="font-medium">Jane Smith</td>
          <td>Inactive</td>
          <td>Designer</td>
          <td className="text-right">
            <button className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-muted transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
  },
];

interface VariantSectionProps {
  variant: TableVariant;
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

export default function TablesPage() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Table Components</h1>
          <p className="text-muted-foreground">
            Table components for displaying and managing data.
          </p>
        </div>
      </header>

      {/* Variants */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8">
          {tableVariants.map((variant, index) => (
            <VariantSection key={index} variant={variant} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
