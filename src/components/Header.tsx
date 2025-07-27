'use client';

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center py-4 px-6 md:px-12 bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-800">
      <div className="font-bold text-xl text-white select-none">
        {/* Display ' Ali Ayan' */}
        <a href="#home"> Ali Ayan</a>
      </div>

      <div className="flex gap-6 md:gap-8">
        {/* Hamburger Icon for Mobile */}
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`md:flex gap-6 md:gap-8 ${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
