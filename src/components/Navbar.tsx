"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/tour", label: "Tour" },
  { href: "/opinion-dna", label: "Opinion DNA™" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between relative z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/parlia-logo.svg"
          alt="Parlia"
          width={120}
          height={35}
          priority
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const isAbout = link.href === "/about";
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isAbout
                  ? "bg-parlia-purple text-white hover:bg-purple-700"
                  : isActive
                  ? "bg-gray-100 text-black"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileOpen ? (
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
