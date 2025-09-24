"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-sky/70 backdrop-blur-md border-b border-navy/10 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo / Name */}
        <a href="#hero" className="text-navy font-extrabold text-xl tracking-tight">
          Kelsey Nocek
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-navy font-medium">
          {["projects", "personality", "contact"].map((link) => (
            <a key={link} href={`#${link}`} className="relative group">
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-navy text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Floating Dropdown Menu with animation */}
      <div
        className={`absolute right-6 mt-2 w-40 bg-sky/95 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-start p-4 space-y-3 md:hidden transform transition-all duration-300 ease-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {["projects", "personality", "contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="text-navy hover:text-coral transition"
            onClick={() => setMenuOpen(false)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
