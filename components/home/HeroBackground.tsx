export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:60px_60px]
          opacity-40
        "
      />

      {/* Cyan Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
    </>
  );
}