'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { SunSVG, MoonSVG, MenuSVG, CloseSVG, ToothSVG } from '@/lib/icons';

const navLinks = [
  { href: '/', label: 'Bosh sahifa' },
  { href: '/services', label: 'Xizmatlar' },
  { href: '/doctors', label: 'Shifokorlar' },
  { href: '/contact', label: 'Aloqa' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{
                width: '38px', height: '38px',
                background: 'var(--teal)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ToothSVG size={22} color="#07101E" />
              </div>
              <span className="font-display" style={{
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}>
                Denta<span style={{ color: 'var(--teal)' }}>Lux</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text2)',
                  transition: 'color 0.25s',
                  position: 'relative',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Theme toggle */}
              <button
                onClick={toggle}
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '10px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                aria-label="Mavzuni o'zgartirish"
              >
                {theme === 'dark' ? <SunSVG /> : <MoonSVG />}
              </button>

              {/* Booking btn - desktop only */}
              <Link href="/booking" className="btn-primary desktop-nav" style={{ padding: '11px 24px', fontSize: '13px' }}>
                Navbat olish
              </Link>

              {/* Hamburger - mobile */}
              <button
                className="hamburger-btn"
                onClick={() => setMobileOpen(true)}
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '10px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text)',
                  cursor: 'pointer',
                }}
              >
                <MenuSVG />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            width: '44px', height: '44px',
            borderRadius: '12px',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text2)',
            cursor: 'pointer',
          }}
        >
          <CloseSVG />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-display"
              style={{
                fontSize: '38px',
                fontWeight: 400,
                color: 'var(--text)',
                padding: '10px 0',
                borderBottom: '1px solid var(--border)',
                opacity: 0,
                animation: mobileOpen ? `fadeInUp 0.4s ease ${i * 0.07}s forwards` : 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/booking"
          onClick={() => setMobileOpen(false)}
          className="btn-primary"
          style={{ marginTop: '32px', justifyContent: 'center', opacity: 0, animation: mobileOpen ? 'fadeInUp 0.4s ease 0.35s forwards' : 'none' }}
        >
          Navbat olish
        </Link>
      </div>
    </>
  );
}
