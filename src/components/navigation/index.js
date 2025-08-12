/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState } from "react";
import { navdata } from "@/data/navdata";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed z-50 shadow-lg w-full bg-[#F19F1F]">
      <div className="flex items-center justify-between px-[50px] py-[20px] md:flex-nowrap max-[1024px]:px-4 max-[1024px]:flex-wrap">
        {/* Logo */}
        <a href="/" className="logo-container">
          <img
            width={80}
            height={80}
            alt="Happypaws Logo"
            src="/logos/logo_nobg.png"
          />
        </a>

        <div className="flex gap-8">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {navdata.map((links, index) => (
              <li key={index}>
                <a
                  className={`text-xs font-semibold uppercase transition-all hover:text-tertiary ${
                    currentPath.includes(links.url)
                      ? "text-tertiary font-extrabold"
                      : "text-text"
                  }`}
                  href={links.url}
                >
                  {links.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media Links */}
          <div className="hidden md:flex gap-4">
            <a href="https://wa.link/2fyjg5" target="_blank">
              <i
                className="fa-brands hover:text-black  text-tertiary fa-whatsapp"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.instagram.com/total.blessing/?hl=en"
              target="_blank"
            >
              <i
                className="fa-brands hover:text-black text-tertiary fa-instagram"
                aria-hidden="true"
              />
            </a>
            <a href="https://www.facebook.com/muteroblessing/" target="_blank">
              <i
                className="fa-brands hover:text-black text-tertiary fa-facebook"
                aria-hidden="true"
              />
            </a>
            <a href="https://www.youtube.com/@total.blessing" target="_blank">
              <i
                className="fa-brands hover:text-black text-tertiary fa-youtube"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`text-xl flex items-center align-center md:hidden rotate-${
            isMobileMenuOpen ? "180" : "0"
          }`}
        >
          🥊
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background w-full flex flex-col items-start py-6">
            <ul className="flex flex-col gap-4">
              {navdata.map((links, index) => (
                <li key={index}>
                  <a
                    className={`text-sm font-bold uppercase transition-all hover:text-tertiary ${
                      currentPath.includes(links.url)
                        ? "text-tertiary font-extrabold"
                        : "text-text"
                    }`}
                    href={links.url}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {links.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a href="https://wa.link/2fyjg5" target="_blank">
                <i
                  className="fa-brands text-tertiary fa-whatsapp"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.instagram.com/total.blessing/?hl=en"
                target="_blank"
              >
                <i
                  className="fa-brands text-tertiary fa-instagram"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.facebook.com/muteroblessing/"
                target="_blank"
              >
                <i
                  className="fa-brands text-tertiary fa-facebook"
                  aria-hidden="true"
                />
              </a>
              <a href="https://www.youtube.com/@total.blessing" target="_blank">
                <i
                  className="fa-brands text-tertiary fa-youtube"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
