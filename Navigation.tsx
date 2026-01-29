/* Vibrant Playful Design:
 * - Light pink and white navigation
 * - Baby blue accents
 * - Rounded corners and soft shadows
 * - Energetic and fun aesthetic
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT DHS", href: "#about" },
    { label: "PLAYERS", href: "#rosters" },
    { label: "SCHEDULE", href: "#schedule" },
    { label: "TRYOUTS", href: "#tryouts" },
    { label: "STAFF", href: "#staff" },
    { label: "SPONSORS", href: "#sponsors" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b-2 border-secondary shadow-soft"
          : "bg-white/80"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img
              src="/images/dunkin-heights-logo.png"
              alt="Dunkin' Heights Select"
              className="h-12 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold tracking-wide text-foreground hover:text-primary transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground hover:text-primary transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
