export const ToothSVG = ({ size = 32, color = '#00C9B1' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 3C12.5 3 9.5 5.5 9.5 8.5C9.5 10.2 10.2 11.7 11 12.7L8.5 29H13.5L16 22.5L18.5 29H23.5L21 12.7C21.8 11.7 22.5 10.2 22.5 8.5C22.5 5.5 19.5 3 16 3Z" fill={color} fillOpacity="0.85" />
    <circle cx="16" cy="8.5" r="2.5" fill="white" fillOpacity="0.3" />
    <path d="M13 16.5C14.5 17 17.5 17 19 16.5" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" strokeLinecap="round" />
  </svg>
);

export const ImplantSVG = ({ size = 28, color = '#00C9B1' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="11" y="2" width="6" height="14" rx="3" fill={color} fillOpacity="0.9" />
    <path d="M8 16H20L18 26H10L8 16Z" fill={color} fillOpacity="0.6" />
    <line x1="14" y1="16" x2="14" y2="26" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
  </svg>
);

export const WhiteningSVG = ({ size = 28, color = '#00C9B1' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="9" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
    <path d="M10 14C10 11.8 11.8 10 14 10C16.2 10 18 11.8 18 14" fill={color} fillOpacity="0.6" />
    <path d="M9 12L7 10M19 12L21 10M14 8V6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BracesSVG = ({ size = 28, color = '#00C9B1' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M4 14C4 8.477 8.477 4 14 4C19.523 4 24 8.477 24 14C24 19.523 19.523 24 14 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
    <rect x="7" y="11" width="4" height="6" rx="1" fill={color} fillOpacity="0.7" />
    <rect x="12" y="11" width="4" height="6" rx="1" fill={color} fillOpacity="0.7" />
    <rect x="17" y="11" width="4" height="6" rx="1" fill={color} fillOpacity="0.7" />
    <line x1="4" y1="14" x2="24" y2="14" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
  </svg>
);

export const VeneerSVG = ({ size = 28, color = '#00C9B1' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M6 8L8 22H12L14 16L16 22H20L22 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 8H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 8V6M14 8V5M19 8V6" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
  </svg>
);

export const SurgerySVG = ({ size = 28, color = '#00C9B1' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M5 10L14 19L23 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="9" r="3" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" />
    <path d="M14 19V24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 22H18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ArrowRightSVG = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const ArrowUpRightSVG = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export const CheckSVG = ({ size = 16, color = '#00C9B1' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarSVG = ({ filled = false }: { filled?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#FFB800' : 'none'} stroke="#FFB800" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const SunSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

export const MoonSVG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const MenuSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseSVG = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const PhoneSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.99-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MapPinSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const ShieldSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const AwardSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const CalendarSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const UserSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export function getServiceIcon(icon: string, size = 26, color = '#00C9B1') {
  switch (icon) {
    case 'tooth': return <ToothSVG size={size} color={color} />;
    case 'implant': return <ImplantSVG size={size} color={color} />;
    case 'whitening': return <WhiteningSVG size={size} color={color} />;
    case 'braces': return <BracesSVG size={size} color={color} />;
    case 'veneer': return <VeneerSVG size={size} color={color} />;
    case 'surgery': return <SurgerySVG size={size} color={color} />;
    default: return <ToothSVG size={size} color={color} />;
  }
}
