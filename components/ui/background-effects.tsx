"use client";

export function BackgroundEffects() {
  return (
    <>
      {/* Base dark background with subtle gradient */}
      <div className="fixed inset-0 -z-50 bg-[#0B1120] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Main gradient effects */}
      <div className="fixed inset-0 -z-40 overflow-hidden">
        {/* Primary hero gradient */}
        <div className="absolute h-[1000px] w-[1000px] -top-[400px] left-1/2 -translate-x-1/2 bg-[conic-gradient(from_0deg,#0B1120,#3B82F6,#8B5CF6,#0B1120)] rounded-full opacity-20 blur-[100px] animate-slow-spin" />

        {/* Accent gradients */}
        <div className="absolute top-1/4 -left-48 h-[300px] w-[600px] bg-[conic-gradient(from_0deg,#3B82F6,#2563EB,#1E40AF,#3B82F6)] rounded-full opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 h-[300px] w-[600px] bg-[conic-gradient(from_0deg,#8B5CF6,#7C3AED,#6D28D9,#8B5CF6)] rounded-full opacity-20 blur-[100px] animate-pulse" />
      </div>

      {/* Grid patterns */}
      <div className="fixed inset-0 -z-30">
        {/* Large grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:6rem_4rem]" />

        {/* Medium grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3rem_2rem]" />

        {/* Small grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b05_1px,transparent_1px),linear-gradient(to_bottom,#1e293b05_1px,transparent_1px)] bg-[size:1.5rem_1rem]" />
      </div>

      {/* Radial spotlight effects */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-60%,#0EA5E914,transparent)] animate-spotlight" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_20%,#3B82F914,transparent)] animate-spotlight delay-75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_80%,#8B5CF614,transparent)] animate-spotlight delay-150" />
      </div>

      {/* Enhanced grain effect */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] mix-blend-soft-light">
        <div className="absolute inset-0 bg-noise animate-noise" />
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(11,17,32,0.4)_100%)]" />
    </>
  );
}
