"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) current = section.id;
      });
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <nav className={`portfolio-nav ${isScrolled ? "scrolled" : ""}`} aria-label="Primary navigation">
        <Link href="#home" className="nav-logo" aria-label="Harshit Shukla, home">
          HS<span>.</span>
        </Link>
        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={activeSection === link.href.slice(1) ? "active" : ""}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#project-enquiry" className="nav-cta">
            Start a Project <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <button
          className="menu-btn"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobile-menu">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.name}<span aria-hidden="true">↘</span>
          </Link>
        ))}
        <Link href="#project-enquiry" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Start a Project <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
