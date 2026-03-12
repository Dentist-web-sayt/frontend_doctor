import BookingForm from '@/components/BookingForm';
import RevealInit from '@/components/RevealInit';
import { ClockSVG, PhoneSVG, CheckSVG } from '@/lib/icons';

export const metadata = { title: 'Navbat olish — DentaLux' };

export default function BookingPage() {
  return (
    <>
      <RevealInit />
      <section style={{
        paddingTop: '120px', paddingBottom: '80px',
        minHeight: '100vh',
        background: 'var(--bg)', transition: 'background 0.4s',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '0', right: '-200px',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0,201,177,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
            {/* Left — Info */}
            <div>
              <div className="tag animate-fade-up" style={{ marginBottom: '16px' }}>Online Navbat</div>
              <h1 className="font-display animate-fade-up" style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)', color: 'var(--text)',
                letterSpacing: '-0.025em', lineHeight: 1.1,
                animationDelay: '0.1s', marginBottom: '16px',
              }}>
                Qulay vaqtni tanlang,<br />
                <span style={{ color: 'var(--teal)' }}>biz kutamiz</span>
              </h1>
              <p className="animate-fade-up" style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '36px', animationDelay: '0.2s' }}>
                3 qadamda navbat oling. Tasdiqlash SMS orqali keladi.
              </p>

              {/* Benefits */}
              <div className="animate-fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '14px', animationDelay: '0.3s' }}>
                {[
                  "Bepul dastlabki konsultatsiya",
                  "Tanlagan vaqtingizda qabul",
                  "SMS orqali eslatma",
                  "Navbatni bekor qilish imkoni",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text2)' }}>
                    <CheckSVG size={15} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Quick contact */}
              <div className="glass animate-fade-up" style={{
                padding: '20px', marginTop: '36px',
                display: 'flex', gap: '14px', alignItems: 'center',
                animationDelay: '0.4s',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                  background: 'var(--teal-dim)', border: '1px solid var(--teal-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--teal)',
                }}>
                  <PhoneSVG size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Telefon orqali ham</div>
                  <a href="tel:+998711234567" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    +998 71 123 45 67
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="glass animate-fade-up" style={{ padding: '36px', animationDelay: '0.2s' }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
