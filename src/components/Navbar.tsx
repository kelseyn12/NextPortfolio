'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-navy/10 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo / Name */}
        <a href="#hero" className="text-xl font-extrabold tracking-tight">
          <span className="text-navy">Kelsey</span>
          {' '}
          <span className="text-teal">Nocek</span>
        </a>

        {/* Desktop: Links + CTA */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-8 font-medium text-navy">
            {['projects', 'personality', 'contact'].map(link => (
              <a key={link} href={`#${link}`} className="group relative">
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <Link
            href="#projects"
            className="rounded-lg border border-teal/50 px-4 py-2 text-sm font-medium text-navy transition duration-200 ease-in-out hover:border-teal hover:bg-teal/10"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="text-2xl text-navy focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Floating Dropdown Menu */}
      <div
        className={`absolute right-6 mt-2 flex w-40 transform flex-col items-start space-y-3 rounded-lg border border-navy/10 bg-white/95 p-4 shadow-lg backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        {['projects', 'personality', 'contact'].map(link => (
          <a
            key={link}
            href={`#${link}`}
            className="text-navy transition hover:text-teal"
            onClick={() => setMenuOpen(false)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
        <Link
          href="#projects"
          className="mt-2 rounded-lg border border-teal/50 px-3 py-2 text-sm font-medium text-navy transition duration-200 ease-in-out hover:border-teal hover:bg-teal/10"
          onClick={() => setMenuOpen(false)}
        >
          Start a project
        </Link>
      </div>
    </nav>
  );
}
