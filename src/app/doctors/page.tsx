import DoctorCard from '@/components/DoctorCard';
import RevealInit from '@/components/RevealInit';
import Link from 'next/link';
import { doctors } from '@/lib/data';
import { ArrowRightSVG } from '@/lib/icons';

export const metadata = { title: 'Shifokorlar — DentaLux' };

export default function DoctorsPage() {
  return (
    <>
      <RevealInit />
      <section style={{
        paddingTop: '140px', paddingBottom: '80px',
        background: 'var(--bg2)', transition: 'background 0.4s',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', left: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,201,177,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="tag animate-fade-up" style={{ marginBottom: '16px' }}>Jamoamiz</div>
          <h1 className="font-display animate-fade-up" style={{
            fontSize: 'clamp(36px, 5vw, 66px)', color: 'var(--text)',
            letterSpacing: '-0.025em', lineHeight: 1.1, animationDelay: '0.1s', marginBottom: '16px',
          }}>
            Tajribali <span style={{ color: 'var(--teal)' }}>shifokorlar</span> jamoasi
          </h1>
          <p className="animate-fade-up" style={{
            fontSize: '16px', color: 'var(--text2)', maxWidth: '520px',
            lineHeight: 1.8, animationDelay: '0.2s',
          }}>
            25+ mutaxassis shifokor — har biri o'z sohasida xalqaro malakaga ega va doimiy rivojlanib boradi.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {doctors.map((d, i) => (
              <DoctorCard key={d.id} {...d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg2)', textAlign: 'center', transition: 'background 0.4s' }}>
        <div className="container">
          <h2 className="font-display reveal from-bottom" style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Shifokor bilan navbat olishni xohlaysizmi?
          </h2>
          <div className="reveal from-bottom delay-1">
            <Link href="/booking" className="btn-primary">
              Navbat olish
              <ArrowRightSVG />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
