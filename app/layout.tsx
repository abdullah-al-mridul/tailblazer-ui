import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/ui/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Tailblazer UI - Modern Component Framework",
  description:
    "A lightweight, accessible component library powered by Tailwind CSS",
  keywords: [
    "tailblazer",
    "react",
    "next.js",
    "ui library",
    "component library",
    "tailblazer ui",
    "tailwindcss",
  ],
  authors: [
    {
      name: "Abdullah Al Mridul",
      url: "https://github.com/abdullah-al-mridul",
    },
  ],
  creator: "Abdullah Al Mridul",
  publisher: "Abdullah Al Mridul",
  robots: "index, follow",
  metadataBase: new URL("https://tailblazer-ui.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tailblazer-ui.vercel.app",
    title: "Tailblazer UI - Modern Component Framework",
    description:
      "A lightweight, accessible component library powered by Tailwind CSS",
    siteName: "Tailblazer UI",
    images: [
      {
        url: "/logo.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Tailblazer UI - Modern Component Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailblazer UI - Modern Component Framework",
    description:
      "A lightweight, accessible component library powered by Tailwind CSS",
    images: ["/logo.png"], // Same image as OpenGraph
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  verification: {
    google: "Tb8XPvHHAsnp2a5SuwrH5cbJdZLVwvcFa4_rn_IBveI", // Replace with your Google verification code
  },
  alternates: {
    canonical: "https://tailblazer-ui.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* You can add additional meta tags here if needed */}</head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
