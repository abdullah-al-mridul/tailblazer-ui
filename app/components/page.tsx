"use client";

import { Copy, Search } from "lucide-react";
import { useState } from "react";

const components = [
  {
    name: "Button",
    category: "Basic",
    code: `<button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
  Button
</button>`,
    preview: (
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
        Button
      </button>
    ),
  },
  {
    name: "Badge",
    category: "Basic",
    code: `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
  Badge
</span>`,
    preview: (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
        Badge
      </span>
    ),
  },
  {
    name: "Card",
    category: "Layout",
    code: `<div class="p-6 rounded-lg bg-card border border-border">
  <h3 class="text-xl font-semibold mb-2">Card Title</h3>
  <p class="text-muted-foreground">Card content goes here.</p>
</div>`,
    preview: (
      <div className="p-6 rounded-lg bg-card border border-border">
        <h3 className="text-xl font-semibold mb-2">Card Title</h3>
        <p className="text-muted-foreground">Card content goes here.</p>
      </div>
    ),
  },
];

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(components.map((c) => c.category))];

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Components</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredComponents.map((component, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{component.name}</h2>
                <span className="px-3 py-1 rounded-full text-sm bg-accent text-accent-foreground">
                  {component.category}
                </span>
              </div>

              <div className="mb-6 p-8 flex items-center justify-center rounded bg-accent/50">
                {component.preview}
              </div>

              <div className="relative">
                <pre className="p-4 rounded-lg bg-accent overflow-x-auto">
                  <code className="text-sm">{component.code}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(component.code)}
                  className="absolute top-2 right-2 p-2 rounded-lg hover:bg-background/50"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}