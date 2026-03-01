import Link from "next/link";

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="10" fill="#00C9B1" fillOpacity="0.15" />
    <path
      d="M16 6C13.2 6 11 8.5 11 10.5C11 11.8 11.5 12.9 12 13.5L10 26H14L16 20L18 26H22L20 13.5C20.5 12.9 21 11.8 21 10.5C21 8.5 18.8 6 16 6Z"
      fill="#00C9B1"
    />
    <circle cx="16" cy="10" r="2" fill="#fff" fillOpacity="0.6" />
  </svg>
);

const footerLinks = {
  Xizmatlar: [
    { label: "Tish Oqartirish", href: "/services" },
    { label: "Implantatsiya", href: "/services" },
    { label: "Ortodontiya", href: "/services" },
    { label: "Estetik Stomatologiya", href: "/services" },
    { label: "Bolalar Stomatologiyasi", href: "/services" },
  ],
  Klinika: [
    { label: "Bosh Sahifa", href: "/" },
    { label: "Shifokorlar", href: "/doctors" },
    { label: "Aloqa", href: "/contact" },
    { label: "Navbat olish", href: "/booking" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(8, 16, 32, 0.95)",
        borderTop: "1px solid rgba(0,201,177,0.1)",
        paddingTop: "64px",
        paddingBottom: "32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(0,201,177,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "20px",
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
            <p
              style={{
                fontSize: "14px",
                color: "rgba(248,250,252,0.45)",
                lineHeight: "1.8",
                maxWidth: "320px",
                marginBottom: "24px",
              }}
            >
              Toshkentdagi eng zamonaviy stomatologiya klinikasi. 20 yillik
              tajriba va 15,000+ mamnun mijoz.
            </p>
            {/* Certifications */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["ISO 9001", "CE Mark", "WHO Approved"].map((cert) => (
                <span
                  key={cert}
                  style={{
                    fontSize: "11px",
                    color: "#00C9B1",
                    background: "rgba(0,201,177,0.08)",
                    border: "1px solid rgba(0,201,177,0.15)",
                    padding: "4px 10px",
                    borderRadius: "50px",
                    fontWeight: 500,
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(248,250,252,0.9)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                {heading}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(248,250,252,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#00C9B1")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(248,250,252,0.45)")
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(0,201,177,0.08)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(248,250,252,0.3)" }}>
            © 2024 MyDent. Barcha huquqlar himoyalangan.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(248,250,252,0.3)" }}>
            Toshkent, O'zbekiston
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
