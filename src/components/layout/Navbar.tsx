"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const telHref = `tel:${site.phone.replace(/-/g, "")}`;
const phoneLabel = site.phone.replace("+91-", "+91 ");
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
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
        <Link href="/" className="nav-logo" aria-label="Harshit Shukla, home">
          <Image
            src="/harshit-shukla-portrait.webp"
            alt=""
            width={42}
            height={42}
            priority
            unoptimized
          />
        </Link>
        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={isActive(link.href) ? "active" : ""}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
            <a href={telHref} className="nav-cta nav-call" aria-label={`Call ${phoneLabel}`}>
              <Phone size={15} aria-hidden="true" />
              <span>{phoneLabel}</span>
            </a>
          </div>
        </div>
        <div className="nav-actions menu-actions">
          <a href={telHref} className="nav-phone nav-phone-icon" aria-label={`Call ${phoneLabel}`}>
            <Phone size={17} aria-hidden="true" />
          </a>
          <ThemeToggle />
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
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobile-menu">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} aria-current={isActive(link.href) ? "page" : undefined}>
            {link.name}<span aria-hidden="true">↘</span>
          </Link>
        ))}
        <a href={telHref} className="btn btn-secondary">
          <Phone size={16} aria-hidden="true" /> Call {phoneLabel}
        </a>
        <Link href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Start a Project <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
