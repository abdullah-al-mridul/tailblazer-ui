"use client";

import { Github, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-border glass-effect-2 !shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 ">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TailBlazer UI
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button> */}
            <a
              href="https://github.com/abdullah-al-mridul/tailblazer-ui"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
