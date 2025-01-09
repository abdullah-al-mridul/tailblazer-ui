import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Documentation",
      links: [
        { label: "Getting Started", href: "/docs/getting-started" },
        { label: "Components", href: "/components" },
        { label: "Examples", href: "/examples" },
        { label: "Themes", href: "/themes" },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/abdullah-al-mridul/tailblazer-ui",
        },
        { label: "Discord", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Contributing", href: "/contributing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Showcase", href: "/showcase" },
        { label: "Roadmap", href: "/roadmap" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                TailBlazer
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Beautiful, modern components built with Tailwind CSS. Zero
              JavaScript. Dark mode first. Fully responsive.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/abdullah-al-mridul/tailblazer-ui"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} TailBlazer UI. Made with{" "}
              <Heart className="inline-block h-4 w-4 text-red-500" /> by{" "}
              <a
                href="https://github.com/abdullah-al-mridul"
                className="font-medium text-foreground hover:underline"
              >
                Abdullah Al Mridul
              </a>
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/license"
                className="hover:text-foreground transition-colors"
              >
                License
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
