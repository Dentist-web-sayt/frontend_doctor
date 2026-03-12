import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import RevealInit from '@/components/RevealInit';

export const metadata = { title: "Aloqa — DentaLux" };

export default function ContactPage() {
  return (
    <>
      <RevealInit />
      <section style={{
        paddingTop: '140px', paddingBottom: '80px',
        background: 'var(--bg2)', transition: 'background 0.4s',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,201,177,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="tag animate-fade-up" style={{ marginBottom: '16px' }}>Biz bilan bog'laning</div>
          <h1 className="font-display animate-fade-up" style={{
            fontSize: 'clamp(36px, 5vw, 66px)', color: 'var(--text)',
            letterSpacing: '-0.025em', lineHeight: 1.1, animationDelay: '0.1s', marginBottom: '16px',
          }}>
            Har qanday savolga<br />
            <span style={{ color: 'var(--teal)' }}>javob beramiz</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {/* Contact info */}
            <div className="reveal from-left">
              <ContactInfo />
            </div>

            {/* Contact form */}
            <div className="glass reveal from-right" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Xabar yuboring
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text2)', marginBottom: '28px' }}>
                24 soat ichida javob beramiz
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
