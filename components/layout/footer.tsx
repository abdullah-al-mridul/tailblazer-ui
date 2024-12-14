import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground order-2 sm:order-1">
            © 2024 Tailblazer UI. All rights reserved.
          </div>
          <div className="flex gap-6 order-1 sm:order-2">
            <a
              href="https://github.com/abdullah-al-mridul/tailblazer-ui"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/docs"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
