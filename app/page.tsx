// "use client";

import { ArrowRight, Zap, Github } from "lucide-react";
import Link from "next/link";
import { BackgroundEffects } from "@/components/ui/background-effects";

export default function Home() {
  const features = [
    {
      title: "Zero JavaScript",
      description: "Pure CSS components for lightning-fast performance",
    },
    {
      title: "Dark Mode First",
      description: "Beautiful dark themes with seamless light mode support",
    },
    {
      title: "Fully Responsive",
      description: "Components that look great on any device",
    },
    {
      title: "Accessible",
      description: "ARIA-compliant and keyboard-friendly components",
    },
  ];

  const contributors = [
    {
      name: "Abdullah Al Mridul",
      avatar: "https://i.ibb.co.com/ThCVrG8/image.png",
      github: "https://github.com/abdullah-al-mridul",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-4xl sm:text-5xl lg:text-6xl font-bold">
              <Zap className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-500 animate-pulse" />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-300 hover:from-purple-600 hover:to-blue-500">
                TailBlazer
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-300">
            Build elegant UIs with ease,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              no JavaScript required
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 transition-all duration-300">
            A lightweight, accessible component library powered by Tailwind CSS
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/components"
              className="group hover:-translate-y-1 inline-flex items-center gap-2 dark:bg-[#4976F4]/10 bg-[#4976F4]/20 text-[#09090B] ring-[#437BF5] ring-2 dark:ring-[#4976F4]/80 dark:text-[#FAFAFA] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/abdullah-al-mridul/tailblazer-ui"
              className="inline-flex hover:-translate-y-1 group items-center gap-2 dark:bg-[#7C47ED]/10 bg-[#7C47ED]/20 ring-2 dark:ring-[#7C47ED]/80 ring-[#7C47ED] text-accent-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
            >
              View on GitHub{" "}
              <Github className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 transition-all duration-300">
            Everything you need to build modern UIs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm ring-2 ring-border hover:ring-[#437bf5] transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground transition-all duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 transition-all duration-300">
            Built by the community, for the community
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.github}
                className="group flex flex-col items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 group-hover:ring-2 ring-[#4975F4] transition-all duration-300"
                  />
                </div>
                <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-all duration-300">
                  {contributor.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
