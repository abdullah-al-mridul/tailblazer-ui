import './globals.css';
import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Tailblazer UI - Modern Component Framework',
  description: 'A lightweight, accessible component library powered by Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}