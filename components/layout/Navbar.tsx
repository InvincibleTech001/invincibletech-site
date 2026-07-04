"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Projects", href: "/projects" },
  { name: "Knowledge Hub", href: "/knowledge" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/60 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logos/shield.png"
            alt="InvincibleTech Logo"
            width={50}
            height={50}
            className="h-12 w-12 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold tracking-tight text-white">
              Invincible<span className="text-teal-400">Tech</span>
            </h1>

            <p className="text-xs text-slate-400">
              Software • Data • AI
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-teal-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30">
          Get Started
        </button>
      </nav>
    </header>
  );
}