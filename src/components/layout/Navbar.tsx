"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active nav tracking
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 200) {
          current = s.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`portfolio-nav ${isScrolled ? "scrolled" : ""}`} id="nav">
        <Link href="#" className="nav-logo">
          HS<span>.</span>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobileMenu">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};
