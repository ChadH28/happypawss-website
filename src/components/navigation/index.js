/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState } from "react";
import { navdata } from "@/data/navdata";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#FDF8F0]/90 backdrop-blur-md shadow-sm"
          : "bg-[#FDF8F0]/70 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-[50px] py-2.5 md:py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/happypawss-website/" className="block transition-transform hover:scale-105 duration-300">
          <img
            width={64}
            height={64}
            fetchPriority="high"
            alt="Happypaws Logo"
            src="/happypawss-website/logos/logo_nobg.png"
            className="drop-shadow-sm"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-2">
            {navdata.map((links, index) => (
              <li key={index}>
                <a
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    currentPath.includes(links.url)
                      ? "bg-[#F19F1F] text-white shadow-md shadow-[#F19F1F]/20"
                      : "text-[#3D2C2E] hover:bg-[#F19F1F]/10 hover:text-[#F19F1F]"
                  }`}
                  href={links.url}
                >
                  {links.label}
                </a>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/27844664783?text=Hey%20Happy%20Paws!%20I'd%20like%20to%20book%20your%20pet%20sitting%20services%20%E2%9C%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#108896] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#0d727a] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FDF8F0]/95 backdrop-blur-md border-t border-[#F19F1F]/10">
          <div className="px-5 py-6 flex flex-col gap-4">
            {navdata.map((links, index) => (
              <a
                key={index}
                className={`text-base font-bold uppercase transition-all duration-200 ${
                  currentPath.includes(links.url)
                    ? "text-[#F19F1F]"
                    : "text-[#3D2C2E] hover:text-[#F19F1F]"
                }`}
                href={links.url}
                onClick={() => setMobileMenuOpen(false)}
              >
                {links.label}
              </a>
            ))}
            <hr className="warm-divider my-2" />
            <a
              href="https://wa.me/27844664783?text=Hey%20Happy%20Paws!%20I'd%20like%20to%20book%20your%20pet%20sitting%20services%20%E2%9C%A8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#108896] text-white text-center px-4 py-3 rounded-full text-sm font-bold hover:bg-[#0d727a] transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
