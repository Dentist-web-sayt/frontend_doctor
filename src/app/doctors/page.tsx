"use client";

import { Doctor } from "../../lib/data";

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill={filled ? "#FFB800" : "rgba(255,184,0,0.2)"}
    stroke="none"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#00C9B1" stroke="none">
    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const GraduateIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const LanguageIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M2 5h7M5 2v3M3 9c1 2 4 4 6 4M9 4c0 4-3 6-7 8M15 15l-2 5M17 15l2 5M13 20h8M9 10l2 5 2-2 2 5" />
  </svg>
);

const AwardIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

interface Props {
  doctor: Doctor;
  index?: number;
}

function getInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

const AVATAR_COLORS = [
  "linear-gradient(135deg, #0d3d3a, #00C9B1)",
  "linear-gradient(135deg, #1a2a4a, #3b82f6)",
  "linear-gradient(135deg, #2d1b4e, #8b5cf6)",
  "linear-gradient(135deg, #3a1a2a, #ec4899)",
  "linear-gradient(135deg, #1a3a2a, #10b981)",
  "linear-gradient(135deg, #3a2a1a, #f59e0b)",
];

export default function DoctorCard({ doctor, index = 0 }: Props) {
  const filledStars = Math.round(doctor.rating);
  const avatarBg = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <div
      className="glass glass-hover"
      style={{
        padding: "28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "120px",
          height: "120px",
          background:
            "radial-gradient(circle at top right, rgba(0,201,177,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "18px",
            background: avatarBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
            border: "1px solid rgba(0,201,177,0.2)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          {getInitials(doctor.name)}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "4px",
            }}
          >
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "17px",
                fontWeight: 600,
                color: "#F8FAFC",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {doctor.name}
            </h3>
            <CheckBadge />
          </div>

          {/* Specialty */}
          <p
            style={{
              fontSize: "12px",
              color: "#00C9B1",
              fontWeight: 500,
              lineHeight: 1.4,
              marginBottom: "8px",
            }}
          >
            {doctor.specialty}
          </p>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} filled={s <= filledStars} />
              ))}
            </div>
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "#FFB800" }}
            >
              {doctor.rating}
            </span>
            <span style={{ fontSize: "12px", color: "rgba(248,250,252,0.4)" }}>
              ({doctor.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(0,201,177,0.1)",
          marginBottom: "18px",
        }}
      />

      {/* Info rows */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <span style={{ color: "#00C9B1", marginTop: "1px" }}>
            <GraduateIcon />
          </span>
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(248,250,252,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "2px",
              }}
            >
              Ta'lim
            </div>
            <div style={{ fontSize: "13px", color: "rgba(248,250,252,0.7)" }}>
              {doctor.education}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <span style={{ color: "#00C9B1", marginTop: "1px" }}>
            <LanguageIcon />
          </span>
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(248,250,252,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "2px",
              }}
            >
              Tillar
            </div>
            <div style={{ fontSize: "13px", color: "rgba(248,250,252,0.7)" }}>
              {doctor.languages.join(" · ")}
            </div>
          </div>
        </div>
      </div>

      {/* Experience badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "50px",
          background: "rgba(0,201,177,0.08)",
          border: "1px solid rgba(0,201,177,0.15)",
          fontSize: "12px",
          color: "#00C9B1",
          fontWeight: 500,
          marginBottom: "16px",
          width: "fit-content",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
        {doctor.experience}
      </div>

      {/* Achievements */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "rgba(248,250,252,0.35)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "4px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <AwardIcon />
          Yutuqlar
        </div>
        {doctor.achievements.slice(0, 2).map((ach, i) => (
          <div
            key={i}
            style={{
              fontSize: "12px",
              color: "rgba(248,250,252,0.55)",
              paddingLeft: "12px",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "6px",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#00C9B1",
              }}
            />
            {ach}
          </div>
        ))}
      </div>
    </div>
  );
}
