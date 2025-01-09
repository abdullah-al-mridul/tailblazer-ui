// "use client";

import {
  ArrowRight,
  Zap,
  Github,
  Moon,
  Smartphone,
  Shield,
  Code2,
  Palette,
  Box,
  Sparkles,
  Star,
  Users,
  Paintbrush,
  Settings,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/code-block";

export default function Home() {
  const features = [
    {
      title: "Zero JavaScript",
      icon: Zap,
      className: "md:col-span-2",
    },
    {
      title: "Dark Mode First",
      icon: Moon,
    },
    {
      title: "Fully Responsive",
      icon: Smartphone,
    },
    {
      title: "Accessible",
      icon: Shield,
    },
    {
      title: "TypeScript Ready",
      icon: Code2,
    },
    {
      title: "Customizable",
      icon: Settings,
    },
    {
      title: "Component Variants",
      icon: Layers,
      className: "",
    },
    {
      title: "Modern Stack",
      icon: Box,
      className: "md:col-span-2",
    },
    {
      title: "Beautiful Design",
      icon: Paintbrush,
      className: "md:col-span-2",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Components",
      icon: Box,
    },
    {
      number: "200+",
      label: "Variants",
      icon: Palette,
    },
    {
      number: "1000+",
      label: "Stars",
      icon: Star,
    },
    {
      number: "10k+",
      label: "Users",
      icon: Users,
    },
  ];

  const testimonials = [
    {
      quote:
        "TailBlazer UI has revolutionized how we build our interfaces. The components are beautiful and the DX is unmatched.",
      author: "Sarah Chen",
      role: "Senior Frontend Developer",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      quote:
        "The attention to detail in each component is impressive. It's saved us countless hours of development time.",
      author: "Michael Rodriguez",
      role: "Tech Lead",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      quote:
        "Finally, a component library that puts dark mode first! The theming system is incredibly well thought out.",
      author: "Emily Thompson",
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  const contributors = [
    {
      name: "Abdullah Al Mridul",
      avatar: "https://i.ibb.co.com/ThCVrG8/image.png",
      github: "https://github.com/abdullah-al-mridul",
    },
  ];

  const codeExample = `
  import { Button } from "@/components/ui/button"
  
  export default function Example() {
    return (
      <Button variant="default">
        Click me
      </Button>
    )
  }
  `;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section */}
      <section className="relative py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 text-4xl sm:text-6xl lg:text-7xl font-bold relative">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse-ring bg-blue-500/30 rounded-full blur-2xl"></div>
                <div className="absolute inset-0 animate-pulse-ring bg-purple-500/20 rounded-full blur-3xl delay-75"></div>
                <Zap className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-500 animate-float relative" />
              </div>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 animate-gradient-flow bg-clip-text text-transparent transition-all duration-300 hover:from-purple-600 hover:via-purple-500 hover:to-blue-500">
                TailBlazer
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 transition-all duration-300 animate-scale-up">
            Build elegant UIs with ease,{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-text-shimmer">
              no JavaScript required
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-300 animate-scale-up">
            A lightweight, accessible component library powered by Tailwind CSS
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 stagger-children">
            <Link
              href="/components"
              className="group hover:-translate-y-1 inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all duration-300 shine-effect"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/abdullah-al-mridul/tailblazer-ui"
              className="inline-flex hover:-translate-y-1 group items-center gap-3 glass-effect text-accent-foreground px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all duration-300 gradient-border"
            >
              View on GitHub{" "}
              <Github className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-red-50/10 glass-effect-2 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {stats.map(({ number, label, icon: Icon }) => (
              <Card
                key={label}
                className="group relative overflow-hidden rounded-xl p-2 hover:shadow-xl transition-all duration-300 glass-effect"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    {number}
                  </span>
                  <span className="text-muted-foreground mt-1">{label}</span>
                </CardContent>
                <div className="absolute inset-0 pointer-events-none  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-300">
            Everything you need to build{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              modern UIs
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 stagger-children">
            {features.map(({ title, icon: Icon, className }) => (
              <Card
                key={title}
                className={cn(
                  "group relative overflow-hidden rounded-xl p-2 hover:shadow-xl transition-all duration-300 glass-effect",
                  className
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {title}
                    </h3>
                  </div>
                </CardContent>
                <div className="absolute inset-0 pointer-events-none  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 glass-effect-2">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-16">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Loved by{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                developers
              </span>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4 stagger-children">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-xl p-2 hover:shadow-xl transition-all duration-300 glass-effect"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <div className="absolute inset-0 pointer-events-none  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16">
            Built by the{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              community
            </span>
            , for the community
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {contributors.map((contributor, index) => (
              <a
                key={index}
                href={contributor.github}
                className="group flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:opacity-100 transition-opacity blur-md"></div>
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full group-hover:ring-2 ring-[#4975F4] transition-all duration-300"
                  />
                </div>
                <span className="text-lg font-medium group-hover:text-primary transition-colors">
                  {contributor.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 border-t border-border/50 glass-effect-2">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              amazing
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already building beautiful
            interfaces with TailBlazer UI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/docs"
              className="group hover:-translate-y-1 inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all duration-300"
            >
              Read the docs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/components"
              className="inline-flex hover:-translate-y-1 group items-center gap-3 glass-effect text-accent-foreground px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all duration-300 gradient-border"
            >
              Browse components
              <Box className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
