"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Observer to detect theme of current section under navbar
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the overlapping section that's at the top of the viewport
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const newTheme = visibleSection.target.getAttribute("data-theme") as "dark" | "light";
          if (newTheme) {
            setTheme(newTheme);
          }
        }
      },
      {
        rootMargin: "-80px 0px -90% 0px", // Check what's intersecting the top 80px (navbar area)
        threshold: 0,
      }
    );

    // Observe all sections with a data-theme attribute
    const sections = document.querySelectorAll("[data-theme]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isLight = theme === "light";
  const textColor = isLight ? "text-navy" : "text-pearl";
  const hoverColor = "hover:text-gold";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? isLight
              ? "py-4 bg-pearl/90 backdrop-blur-md shadow-sm border-b border-navy/5"
              : "py-4 bg-navy/90 backdrop-blur-md shadow-lg"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="group flex flex-col items-start z-50 relative">
            <span className="font-serif text-2xl md:text-3xl text-gold font-bold tracking-wider transition-colors group-hover:text-gold-light">
              JOEL COX
            </span>
            <span className={cn(
              "font-sans text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.15em] transition-colors mt-1 max-w-[200px] md:max-w-none leading-tight",
              isLight ? "text-navy/80 group-hover:text-navy" : "text-pearl/80 group-hover:text-pearl"
            )}>
              Advocates — Commissioner for Oaths & Notary Public
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors font-sans text-sm uppercase tracking-widest relative overflow-hidden group",
                  textColor,
                  hoverColor
                )}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "px-6 py-2 border transition-all duration-300 font-sans text-sm uppercase tracking-wider",
                isLight
                  ? "border-navy text-navy hover:bg-navy hover:text-pearl"
                  : "border-gold text-gold hover:bg-gold hover:text-navy"
              )}
            >
              Consultation
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className={cn("md:hidden z-50 p-2 transition-colors", textColor)}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-navy z-40 flex flex-col justify-center px-10 transition-transform duration-700 ease-in-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif text-pearl hover:text-gold transition-colors block border-b border-pearl/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
