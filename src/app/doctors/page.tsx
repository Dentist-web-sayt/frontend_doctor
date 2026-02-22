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

'use client';

import { useState } from 'react';
import { services, doctors } from '@/lib/data';

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckCircle = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" strokeWidth="1.5" strokeLinecap="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.service || !form.date) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="glass"
        style={{
          padding: '64px 48px',
          textAlign: 'center',
          animation: 'fadeInUp 0.6s ease both',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <CheckCircle />
        </div>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            fontWeight: 700,
            color: '#F8FAFC',
            marginBottom: '12px',
          }}
        >
          Navbatingiz tasdiqlandi!
        </h3>
        <p style={{ color: 'rgba(248,250,252,0.55)', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
          Tez orada administratorimiz siz bilan bog'lanadi va navbatni tasdiqlaydi.
          <br />
          <strong style={{ color: '#F8FAFC' }}>{form.name}</strong> — rahmat!
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',service:'',doctor:'',date:'',time:'',message:'' }); }}
          className="btn-outline"
          style={{ fontSize: '14px' }}
        >
          Yangi navbat olish
        </button>
      </div>
    );
  }

  return (
    <div className="glass" style={{ padding: '40px', animation: 'fadeInUp 0.6s ease both' }}>
      <h2
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '26px',
          fontWeight: 700,
          color: '#F8FAFC',
          marginBottom: '8px',
        }}
      >
        Navbat Olish
      </h2>
      <p style={{ color: 'rgba(248,250,252,0.5)', fontSize: '14px', marginBottom: '32px' }}>
        Barcha yulduzcha (*) bilan belgilangan maydonlar majburiy.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Name */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">To'liq ism *</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ism Familiya"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="form-label">Telefon *</label>
          <input
            className="form-input"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+998 90 123 45 67"
          />
        </div>


        {/* Email */}
        <div>
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@example.com"
          />
        </div>

        {/* Service */}
        <div>
          <label className="form-label">Xizmat turi *</label>
          <select
            className="form-input"
            name="service"
            value={form.service}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          >
            <option value="">Tanlang...</option>
            {services.map((s) => (
              <option key={s.id} value={s.title} style={{ background: '#0A1628' }}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor */}
        <div>
          <label className="form-label">Shifokor</label>
          <select
            className="form-input"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          >
            <option value="">Istalgan shifokor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.name} style={{ background: '#0A1628' }}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="form-label">Sana *</label>
          <input
            className="form-input"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Time */}
        <div>
          <label className="form-label">Vaqt</label>
          <select
            className="form-input"
            name="time"
            value={form.time}
            onChange={handleChange}
            style={{ cursor: 'pointer' }}
          >
            <option value="">Tanlang...</option>
            {timeSlots.map((t) => (
              <option key={t} value={t} style={{ background: '#0A1628' }}>{t}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">Qo'shimcha ma'lumot</label>
          <textarea
            className="form-input"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Muammo yoki so'rovingizni yozing..."
            rows={4}
            style={{ resize: 'vertical', minHeight: '100px' }}
          />
        </div>

        {/* Submit */}
        <div style={{ gridColumn: '1 / -1' }}>
          <button
            onClick={handleSubmit}
            disabled={loading || !form.name || !form.phone || !form.service || !form.date}
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '16px',
              fontSize: '15px',
              opacity: loading || !form.name || !form.phone ? 0.7 : 1,
              cursor: loading ? 'wait' : 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {loading ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin-slow 1s linear infinite' }}>
                  <path d="M21 12a9 9 0 11-6.219-8.56" />
                </svg>
                Yuborilmoqda...
              </>
            ) : (
              <>
                Navbat olish
                <SendIcon />
              </>
            )}
          </button>
        </div>
      </div>
      

      {/* Info note */}
      <div
        style={{
          marginTop: '20px',
          padding: '14px 16px',
          borderRadius: '12px',
          background: 'rgba(0,201,177,0.05)',
          border: '1px solid rgba(0,201,177,0.1)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#00C9B1" style={{ flexShrink: 0, marginTop: '1px' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
        <p style={{ fontSize: '13px', color: 'rgba(248,250,252,0.45)', lineHeight: 1.6 }}>
          Navbatni tasdiqlash uchun 24 soat ichida administratorimiz siz bilan bog'lanadi.
          Bepul konsultatsiya xizmati mavjud.
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridColumn: '1 / -1'"] {
            grid-column: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

      
