"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Bosh Sahifa" },
  { href: "/services", label: "Xizmatlar" },
  { href: "/doctors", label: "Shifokorlar" },
  { href: "/contact", label: "Aloqa" },
];

/* ── Real SVG icons ── */
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="10" fill="#00C9B1" fillOpacity="0.15" />
    <path
      d="M16 6C13.2 6 11 8.5 11 10.5C11 11.8 11.5 12.9 12 13.5L10 26H14L16 20L18 26H22L20 13.5C20.5 12.9 21 11.8 21 10.5C21 8.5 18.8 6 16 6Z"
      fill="#00C9B1"
    />
    <circle cx="16" cy="10" r="2" fill="#fff" fillOpacity="0.6" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect y="3" width="22" height="2" rx="1" fill="currentColor" />
    <rect y="10" width="16" height="2" rx="1" fill="currentColor" />
    <rect y="17" width="22" height="2" rx="1" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M2 2L20 20M20 2L2 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen((v) => {
      document.body.style.overflow = v ? "" : "hidden";
      return !v;
    });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
        }}
        className={scrolled ? "nav-blur" : ""}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <LogoIcon />
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#F8FAFC",
              }}
            >
              My<span style={{ color: "#00C9B1" }}>Dent</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "50px",
                    fontSize: "15px",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: active ? "#00C9B1" : "rgba(248,250,252,0.75)",
                    background: active ? "rgba(0,201,177,0.1)" : "transparent",
                    border: active
                      ? "1px solid rgba(0,201,177,0.2)"
                      : "1px solid transparent",
                    transition: "all 0.25s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="tel:+998712345678"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#00C9B1",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
              className="hidden-mobile"
            >
              <PhoneIcon />
              +998 71 234-56-78
            </a>
            <Link
              href="/booking"
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "14px" }}
            >
              Navbat olish
            </Link>
            {/* Burger */}
            <button
              onClick={toggleMenu}
              className="show-mobile"
              style={{
                background: "rgba(0,201,177,0.1)",
                border: "1px solid rgba(0,201,177,0.2)",
                borderRadius: "10px",
                padding: "8px",
                color: "#00C9B1",
                cursor: "pointer",
                display: "none",
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            onClick={toggleMenu}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "transparent",
              border: "none",
              color: "#00C9B1",
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </button>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#F8FAFC",
                marginBottom: "40px",
              }}
            >
              My<span style={{ color: "#00C9B1" }}>Dent</span>
            </div>
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  fontSize: "24px",
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 600,
                  color: pathname === link.href ? "#00C9B1" : "#F8FAFC",
                  textDecoration: "none",
                  padding: "12px 0",
                  animation: `fadeInUp 0.4s ease ${i * 0.1}s both`,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="btn-primary"
              style={{ marginTop: "32px", fontSize: "16px" }}
            >
              Navbat olish
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
