"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Safety", href: "/safety" },
  { name: "Guides", href: "/guides" },
  { name: "Pricing", href: "/pricing" },
  { name: "Become a Guide", href: "/become-guide" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="font-['Playfair_Display'] text-2xl font-bold text-text">
              SafarMate
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-['Inter'] text-text hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/find-guide"
              className="font-['Inter'] px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Find a Guide
            </Link>
            <Link
              href="/become-guide"
              className="font-['Inter'] px-5 py-2.5 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Become a Guide
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block font-['Inter'] py-2 text-text hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <Link
                href="/find-guide"
                className="block text-center font-['Inter'] px-5 py-2.5 bg-primary text-white rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find a Guide
              </Link>
              <Link
                href="/become-guide"
                className="block text-center font-['Inter'] px-5 py-2.5 border-2 border-primary text-primary rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become a Guide
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
