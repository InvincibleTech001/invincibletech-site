"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
<Image
  src="/logos/shield.png"
  alt="InvincibleTech"
  width={48}
  height={48}
  priority
/>

<div className="flex flex-col leading-none">
  <span className="text-xl font-bold tracking-tight">
    Invincible<span className="text-green-500">Tech</span>
  </span>

  <span className="text-xs text-slate-400">
    Software • Data • AI
  </span>
</div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
  href="/"
  className="text-slate-300 hover:text-green-400 transition-colors duration-300"
>
  Home
</Link>

          <Link
  href="/solutions"
  className="text-slate-300 hover:text-green-400 transition-colors duration-300"
>
  Solutions
</Link>

          <Link
  href="/Projects"
  className="text-slate-300 hover:text-green-400 transition-colors duration-300"
>
  Projects
</Link>

          <Link
  href="/knowledge"
  className="text-slate-300 hover:text-green-400 transition-colors duration-300"
>
  Knowledge Hub
</Link>

          <Link
  href="/about"
  className="text-slate-300 hover:text-green-400 transition-colors duration-300"
>
  About
</Link>

          <Link
  href="/contact"
  className="text-slate-300 hover:text-green-400 transition-colors duration-300"
>
  Contact
</Link>

        </div>

        {/* CTA Button */}
        <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30">
  Get Started
</button>

      </nav>
    </header>
  );
}