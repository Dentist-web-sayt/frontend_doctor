import ServiceCard from '@/components/ServiceCard';
import RevealInit from '@/components/RevealInit';
import Link from 'next/link';
import { services } from '@/lib/data';
import { ArrowRightSVG } from '@/lib/icons';

export const metadata = { title: 'Xizmatlar — DentaLux' };

export default function ServicesPage() {
  return (
    <>
      <RevealInit />
      {/* Page header */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px',
        background: 'var(--bg2)',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.4s',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,201,177,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="tag animate-fade-up" style={{ marginBottom: '16px' }}>Xizmatlarimiz</div>
          <h1 className="font-display animate-fade-up" style={{
            fontSize: 'clamp(36px, 5vw, 66px)', color: 'var(--text)',
            letterSpacing: '-0.025em', lineHeight: 1.1, animationDelay: '0.1s',
            marginBottom: '16px',
          }}>
            Professional <span style={{ color: 'var(--teal)' }}>stomatologiya</span><br />xizmatlari
          </h1>
          <p className="animate-fade-up" style={{
            fontSize: '16px', color: 'var(--text2)', maxWidth: '520px',
            lineHeight: 1.8, animationDelay: '0.2s',
          }}>
            Oddiy tozalashdan murakkab implantatsiyagacha — barcha xizmatlar bir joyda, eng zamonaviy uskunalar bilan.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {services.map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', textAlign: 'center', transition: 'background 0.4s' }}>
        <div className="container">
          <h2 className="font-display reveal from-bottom" style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Qaysi xizmat kerakligini bilmaysizmi?
          </h2>
          <p className="reveal from-bottom delay-1" style={{ color: 'var(--text2)', fontSize: '15px', marginBottom: '28px' }}>
            Bepul konsultatsiya oling — shifokorimiz eng mos davolash usulini tavsiya qiladi.
          </p>
          <div className="reveal from-bottom delay-2">
            <Link href="/booking" className="btn-primary">
              Bepul konsultatsiya olish
              <ArrowRightSVG />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
