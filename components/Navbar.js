"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Landmark, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "ইউনিয়ন সম্পর্কে" },
  { href: "/administration", label: "প্রশাসন" },
  { href: "/demographics", label: "জনসংখ্যা ও ওয়ার্ড" },
  { href: "/services", label: "ই-সেবা ও উন্নয়ন" },
  { href: "/institutions", label: "প্রতিষ্ঠান সমূহ" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-emerald-900/5 border-b border-emerald-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg shadow-emerald-600/25"
                  : "bg-white/15 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Landmark
                className={`w-5 h-5 lg:w-6 lg:h-6 ${
                  scrolled ? "text-white" : "text-white"
                }`}
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-base lg:text-lg font-bold leading-tight transition-colors duration-300 font-[family-name:var(--font-display)] ${
                  scrolled ? "text-emerald-800" : "text-white"
                }`}
              >
                ফাঁসিয়াখালী ইউনিয়ন
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${
                  scrolled ? "text-slate-500" : "text-emerald-100"
                }`}
              >
                চকরিয়া, কক্সবাজার
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-white bg-white/20"
                      : scrolled
                      ? "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="মেনু টগল"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-emerald-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 border-l-4 border-emerald-500"
                      : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
