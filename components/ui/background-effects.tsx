"use client";

export function BackgroundEffects() {
  return (
    <>
      {/* Animated gradient orb */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40vh] left-[20vw] h-[80vh] w-[80vh] rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[120px] animate-blob" />
        <div className="absolute -bottom-[40vh] right-[20vw] h-[80vh] w-[80vh] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[20vh] right-[10vw] h-[60vh] w-[60vh] rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Radial gradient */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
    </>
  );
}