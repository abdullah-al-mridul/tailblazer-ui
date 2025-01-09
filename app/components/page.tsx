"use client";

import { ArrowRight, Search, Filter, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BackgroundEffects } from "@/components/ui/background-effects";

interface Component {
  title: string;
  description: string;
  componentCount: number;
  href: string;
  preview: string;
  category: string;
  status: "stable" | "beta" | "new";
}

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const components: Component[] = [
    {
      title: "Alerts",
      description: "Feedback messages for user actions and system states",
      componentCount: 9,
      href: "/components/alerts",
      preview: "/previews/alerts.png",
      category: "Feedback",
      status: "stable",
    },
    {
      title: "Avatars",
      description: "User profile pictures and decorative elements",
      componentCount: 10,
      href: "/components/avatars",
      preview: "/previews/avatars.png",
      category: "Data Display",
      status: "stable",
    },
    {
      title: "Breadcrumbs",
      description: "Navigation aids showing the current page hierarchy",
      componentCount: 5,
      href: "/components/breadcrumbs",
      preview: "/previews/breadcrumbs.png",
      category: "Navigation",
      status: "stable",
    },
    {
      title: "Buttons",
      description: "Interactive elements for user actions",
      componentCount: 10,
      href: "/components/buttons",
      preview: "/previews/buttons.png",
      category: "Interactive",
      status: "stable",
    },
    {
      title: "Cards",
      description: "Containers for related content and actions",
      componentCount: 8,
      href: "/components/cards",
      preview: "/previews/cards.png",
      category: "Containers",
      status: "stable",
    },
    {
      title: "Forms",
      description: "Input components and form layouts",
      componentCount: 12,
      href: "/components/forms",
      preview: "/previews/forms.png",
      category: "Forms",
      status: "stable",
    },
    {
      title: "Navigation",
      description: "Menus, tabs, and other navigation elements",
      componentCount: 7,
      href: "/components/navigation",
      preview: "/previews/navigation.png",
      category: "Navigation",
      status: "stable",
    },
    {
      title: "Tables",
      description: "Data presentation and management components",
      componentCount: 6,
      href: "/components/tables",
      preview: "/previews/tables.png",
      category: "Data Presentation",
      status: "stable",
    },
  ];

  const categories = ["All", ...new Set(components.map((c) => c.category))];

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />

      {/* Header with Search - updated with backdrop blur */}
      <header className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Components</h1>
              <p className="text-muted-foreground">
                Build your next project faster with our beautiful components
              </p>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1 md:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-full rounded-lg border border-border bg-background py-2 pl-10 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - updated with background styles */}
      <main className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredComponents.map((component) => (
            <Link
              key={component.title}
              href={component.href}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg glass-effect-2"
            >
              {/* Status Badge */}
              {component.status === "new" && (
                <span className="absolute right-4 top-4 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                  New
                </span>
              )}

              {/* Preview */}
              <div className="aspect-[4/3] overflow-hidden bg-muted/30 p-4">
                <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-border bg-background/50">
                  <span className="text-sm text-muted-foreground">Preview</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{component.title}</h3>
                  <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted">
                    {component.componentCount} variants
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {component.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-medium text-primary">
                  Explore components
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State - updated with background styles */}
        {filteredComponents.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="rounded-full bg-muted/50 backdrop-blur-sm p-4 mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No components found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-sm text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
