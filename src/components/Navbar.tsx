'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-navy/10 fixed top-0 left-0 z-50 w-full border-b bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo / Name */}
        <a href="#hero" className="text-xl font-extrabold tracking-tight">
          <span className="text-navy">Kelsey</span>
          {' '}
          <span className="text-teal">Nocek</span>
        </a>

        {/* Desktop Links */}
        <div className="text-navy hidden gap-8 font-medium md:flex">
          {['projects', 'personality', 'contact'].map(link => (
            <a key={link} href={`#${link}`} className="group relative">
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span className="bg-teal absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="text-navy text-2xl focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Floating Dropdown Menu */}
      <div
        className={`border-navy/10 absolute right-6 mt-2 flex w-40 transform flex-col items-start space-y-3 rounded-lg border bg-white/95 p-4 shadow-lg backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        {['projects', 'personality', 'contact'].map(link => (
          <a
            key={link}
            href={`#${link}`}
            className="text-navy hover:text-teal transition"
            onClick={() => setMenuOpen(false)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
