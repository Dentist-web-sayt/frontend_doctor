import Link from 'next/link';
import { ToothSVG, PhoneSVG, MapPinSVG, ClockSVG } from '@/lib/icons';
import { workingHours } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '80px 0 32px',
      transition: 'background 0.4s',
    }}>
      <style>{`
        .footer-social-btn {
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--card); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; color: var(--text2);
          transition: all 0.3s; text-decoration: none;
        }
        .footer-social-btn:hover { color: var(--teal); border-color: var(--teal); background: var(--teal-dim); }
        .footer-link {
          font-size: 14px; color: var(--text2); transition: color 0.25s; text-decoration: none;
        }
        .footer-link:hover { color: var(--teal); }
        .footer-small-link {
          color: var(--text3); transition: color 0.25s; text-decoration: none;
        }
        .footer-small-link:hover { color: var(--teal); }
      `}</style>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px', height: '38px', background: 'var(--teal)',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ToothSVG size={22} color="#07101E" />
              </div>
              <span className="font-display" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)' }}>
                Denta<span style={{ color: 'var(--teal)' }}>Lux</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.7, maxWidth: '220px' }}>
              Toshkentning eng zamonaviy stomatologiya klinikasi. 20 yildan ortiq tajriba.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {['T', 'I', 'F', 'Y'].map((letter) => (
                <a key={letter} href="#" className="footer-social-btn">{letter}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Sahifalar
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/', label: 'Bosh sahifa' },
                { href: '/services', label: 'Xizmatlar' },
                { href: '/doctors', label: 'Shifokorlar' },
                { href: '/booking', label: 'Navbat olish' },
                { href: '/contact', label: 'Aloqa' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Aloqa
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: <PhoneSVG size={16} />, text: '+998 71 123 45 67' },
                { icon: <MapPinSVG size={16} />, text: "Toshkent, Mirzo Ulugbek ko'chasi 14" },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--teal)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
              Ish Vaqti
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {workingHours.map((w, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', gap: '12px',
                  fontSize: '13px',
                  paddingBottom: i < workingHours.length - 1 ? '12px' : 0,
                  borderBottom: i < workingHours.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ color: 'var(--text2)' }}>{w.day}</span>
                  <span style={{ color: w.hours === 'Dam olish kuni' ? 'var(--text3)' : 'var(--teal)', fontWeight: 600 }}>{w.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '28px',
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
          fontSize: '13px', color: 'var(--text3)',
        }}>
          <span>© 2025 DentaLux. Barcha huquqlar himoyalangan.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="footer-small-link">Maxfiylik siyosati</a>
            <a href="#" className="footer-small-link">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
