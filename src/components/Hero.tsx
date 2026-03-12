'use client';
import Link from 'next/link';
import { ToothSVG, ArrowRightSVG, ShieldSVG, AwardSVG, ClockSVG, StarSVG } from '@/lib/icons';
import { stats } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'var(--bg)',
      }}
    >
      {/* Background grid */}
      <div className="hero-grid" />

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '-150px', right: '-100px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,201,177,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-120px',
        width: '480px', height: '480px',
        background: 'radial-gradient(circle, rgba(0,201,177,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Orbit rings */}
      <div style={{
        position: 'absolute', top: '50%', right: '-220px',
        marginTop: '-320px',
        width: '640px', height: '640px',
        border: '1px solid rgba(0,201,177,0.07)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} className="animate-spin-slow" />
      <div style={{
        position: 'absolute', top: '50%', right: '-100px',
        marginTop: '-200px',
        width: '400px', height: '400px',
        border: '1px solid rgba(0,201,177,0.05)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} className="animate-spin-rev" />

      {/* Floating tooth decoration */}
      <div style={{
        position: 'absolute', top: '18%', right: '9%',
        filter: 'drop-shadow(0 0 28px rgba(0,201,177,0.5))',
        opacity: 0.65,
        pointerEvents: 'none',
      }} className="animate-float">
        <ToothSVG size={52} />
      </div>
      <div style={{
        position: 'absolute', bottom: '24%', right: '20%',
        opacity: 0.2,
        pointerEvents: 'none',
      }} className="animate-floatB">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="10" fill="#00C9B1" fillOpacity="0.2" stroke="#00C9B1" strokeWidth="1" strokeOpacity="0.5" />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <circle key={i}
              cx={40 + 28 * Math.cos(deg * Math.PI / 180)}
              cy={40 + 28 * Math.sin(deg * Math.PI / 180)}
              r="5"
              fill="#00C9B1" fillOpacity="0.15"
              stroke="#00C9B1" strokeWidth="1" strokeOpacity="0.3"
            />
          ))}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <line key={i}
              x1="40" y1="40"
              x2={40 + 28 * Math.cos(deg * Math.PI / 180)}
              y2={40 + 28 * Math.sin(deg * Math.PI / 180)}
              stroke="#00C9B1" strokeWidth="0.8" strokeOpacity="0.2"
            />
          ))}
        </svg>
      </div>

      {/* Main layout */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center' }}>

          {/* Left content */}
          <div style={{ maxWidth: '660px' }}>
            {/* Tag */}
            <div className="tag animate-fade-up" style={{ marginBottom: '28px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', animation: 'pulseGlow 2s ease infinite' }} />
              Toshkentning #1 Stomatologiya Klinikasi
            </div>

            {/* Heading */}
            <h1 className="font-display animate-fade-up" style={{
              fontSize: 'clamp(44px, 6vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
              marginBottom: '24px',
              animationDelay: '0.1s',
            }}>
              Chiroyli{' '}
              <span style={{ color: 'var(--teal)' }}>Tabassum</span>
              <br />
              <span style={{ color: 'var(--text2)', fontStyle: 'italic' }}>Bizning Missiyamiz</span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up" style={{
              fontSize: '16px',
              color: 'var(--text2)',
              lineHeight: 1.8,
              maxWidth: '520px',
              marginBottom: '44px',
              animationDelay: '0.2s',
            }}>
              20 yillik tajriba, 25+ professional shifokor va eng zamonaviy texnologiyalar bilan
              sizning tish sogʻligʻingizga gʻamxoʻrlik qilamiz.{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Ogʻriqsiz, xavfsiz va kafolatlangan.</strong>
            </p>

            {/* CTA */}
            <div className="animate-fade-up" style={{
              display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '56px',
              animationDelay: '0.3s',
            }}>
              <Link href="/booking" className="btn-primary">
                Navbat olish
                <ArrowRightSVG size={18} />
              </Link>
              <Link href="/services" className="btn-outline">
                Xizmatlarimiz
              </Link>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-up" style={{
              display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center',
              animationDelay: '0.4s',
            }}>
              {[
                { icon: <ShieldSVG size={16} />, label: 'Kafolatlangan xavfsizlik' },
                { icon: <AwardSVG size={16} />, label: 'Xalqaro sertifikat' },
                { icon: <ClockSVG size={16} />, label: "24/7 qo'llab-quvvatlash" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '13px', color: 'var(--text3)', fontWeight: 500,
                }}>
                  <span style={{ color: 'var(--teal)' }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Review pill */}
            <div className="glass animate-fade-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: '14px',
              padding: '12px 20px', marginTop: '40px',
              animationDelay: '0.55s',
            }}>
              <div style={{ display: 'flex' }}>
                {['A', 'M', 'D'].map((letter, i) => (
                  <div key={i} style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: `hsl(${160 + i * 55}, 55%, 38%)`,
                    border: '2px solid var(--bg)',
                    marginLeft: i === 0 ? 0 : '-9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', fontWeight: 700, color: '#fff',
                  }}>{letter}</div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '3px' }}>
                  {[1,2,3,4,5].map(s => <StarSVG key={s} filled />)}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text2)' }}>
                  <strong style={{ color: 'var(--text)' }}>4.9/5</strong> — 2,400+ sharh
                </div>
              </div>
            </div>
          </div>

          {/* Right — Stats panel (desktop only) */}
          <div className="hero-stats-panel" style={{
            display: 'flex', flexDirection: 'column', gap: '12px',
            animation: 'fadeInUp 0.7s ease 0.5s both',
          }}>
            {stats.map((stat, i) => (
              <div key={i} className="glass" style={{
                padding: '22px 30px', minWidth: '175px', textAlign: 'center',
                animation: `fadeInUp 0.6s ease ${0.5 + i * 0.1}s both`,
              }}>
                <div className="stat-num font-display" style={{ fontSize: '34px', marginBottom: '5px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text3)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom wave scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: 'var(--text3)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase',
          animation: 'fadeInUp 0.6s ease 1s both',
        }}>
          <div style={{
            width: '22px', height: '36px',
            border: '1.5px solid var(--text3)',
            borderRadius: '12px',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: '5px',
          }}>
            <div style={{
              width: '4px', height: '8px',
              background: 'var(--teal)',
              borderRadius: '2px',
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
          Scroll
        </div>
      </div>
    </section>
  );
}
