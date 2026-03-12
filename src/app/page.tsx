import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import RevealInit from '@/components/RevealInit';
import Link from 'next/link';
import { services, doctors, testimonials } from '@/lib/data';
import { ArrowRightSVG, StarSVG, CheckSVG, ToothSVG, ShieldSVG, AwardSVG, ClockSVG } from '@/lib/icons';

const whyUs = [
  { icon: <ShieldSVG size={22} />, title: 'Xavfsiz & Steril', desc: 'ISO sertifikatlangan operatsiya xonalari, bir martalik asboblar.' },
  { icon: <AwardSVG size={22} />, title: 'Xalqaro Malaka', desc: 'Germaniya, Koreya va Italiyada malaka oshirgan mutaxassislar.' },
  { icon: <ClockSVG size={22} />, title: "24/7 Qo'llab-quvvatlash", desc: 'Favqulodda holatlar uchun doimo biz bilan bog\'laning.' },
  { icon: <ToothSVG size={22} />, title: 'Zamonaviy Texnologiya', desc: 'Digital rentgen, CEREC CAD/CAM, 3D implantatsiya rejalashtirish.' },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <Hero />

      {/* ══ WHY US ══ */}
      <section className="section" style={{ background: 'var(--bg2)', transition: 'background 0.4s' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="tag reveal from-bottom" style={{ margin: '0 auto 16px' }}>Nima uchun biz?</div>
            <h2 className="font-display reveal from-bottom delay-1" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Siz loyiq bo'lgan xizmat
            </h2>
            <p className="reveal from-bottom delay-2" style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '480px', margin: '14px auto 0', lineHeight: 1.75 }}>
              Zamonaviy stomatologiya — bu nafaqat davolash, balki siz uchun mukammal tajriba.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {whyUs.map((item, i) => (
              <div key={i} className={`glass reveal from-bottom delay-${i + 1}`} style={{ padding: '28px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '13px',
                  background: 'var(--teal-dim)', border: '1px solid var(--teal-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--teal)', marginBottom: '18px',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text2)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '56px' }}>
            <div>
              <div className="tag reveal from-left">Xizmatlar</div>
              <h2 className="font-display reveal from-left delay-1" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.15, marginTop: '14px' }}>
                Barcha stomatologiya<br />xizmatlari
              </h2>
            </div>
            <Link href="/services" className="btn-outline reveal from-right">
              Barchasini ko'rish
              <ArrowRightSVG size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {services.map((s, i) => (
              <ServiceCard key={s.id} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT BANNER ══ */}
      <section className="section" style={{ background: 'var(--bg2)', transition: 'background 0.4s', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px', alignItems: 'center' }}>
            {/* Left text */}
            <div>
              <div className="tag reveal from-left">Biz haqimizda</div>
              <h2 className="font-display reveal from-left delay-1" style={{ fontSize: 'clamp(28px, 4vw, 50px)', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '16px 0 20px' }}>
                20 yildan ortiq<br />
                <span style={{ color: 'var(--teal)' }}>ishonchli xizmat</span>
              </h2>
              <p className="reveal from-left delay-2" style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '28px' }}>
                2004 yildan buyon Toshkent shahrida faoliyat yuritamiz. Yuzlab mamnun bemorlar va xalqaro sertifikatlar biz uchun eng yaxshi tavsiya.
              </p>

              <div className="reveal from-left delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Og\'riqsiz anesteziya metodlari',
                  'Bir kunda kompleks davolash',
                  '100% steril asbob-uskunalar',
                  "5 yillik kafolat implantatlar uchun",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text2)' }}>
                    <span style={{ flexShrink: 0 }}><CheckSVG size={16} /></span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="reveal from-left delay-4">
                <Link href="/contact" className="btn-primary">
                  Biz bilan bog'laning
                  <ArrowRightSVG size={18} />
                </Link>
              </div>
            </div>

            {/* Right — visual */}
            <div className="reveal from-right delay-2" style={{ position: 'relative' }}>
              {/* Main visual box */}
              <div style={{
                width: '100%', aspectRatio: '4/5',
                background: 'linear-gradient(145deg, var(--bg3), var(--bg))',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '240px', height: '240px',
                  background: 'radial-gradient(circle, rgba(0,201,177,0.15) 0%, transparent 70%)',
                }} />
                <div className="animate-float" style={{ position: 'relative', zIndex: 1 }}>
                  <ToothSVG size={110} />
                </div>

                {/* Grid overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(0,201,177,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,177,0.04) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
              </div>

              {/* Floating badge */}
              <div className="glass" style={{
                position: 'absolute', bottom: '-16px', right: '-16px',
                padding: '18px 24px',
              }}>
                <div className="stat-num font-display" style={{ fontSize: '38px' }}>20+</div>
                <div style={{ fontSize: '12px', color: 'var(--text3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Yillik tajriba</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DOCTORS ══ */}
      <section className="section" id="doctors">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="tag reveal from-bottom" style={{ margin: '0 auto 16px' }}>Mutaxassislar</div>
            <h2 className="font-display reveal from-bottom delay-1" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Bizning shifokorlarimiz
            </h2>
            <p className="reveal from-bottom delay-2" style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '440px', margin: '14px auto 0', lineHeight: 1.75 }}>
              Har bir shifokorimiz xalqaro sertifikatlarga ega va doimiy malaka oshirib boradi.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {doctors.map((d, i) => (
              <DoctorCard key={d.id} {...d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section" style={{ background: 'var(--bg2)', transition: 'background 0.4s' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="tag reveal from-bottom" style={{ margin: '0 auto 16px' }}>Sharhlar</div>
            <h2 className="font-display reveal from-bottom delay-1" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Bemorlarimiz nima deydi
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {testimonials.map((t, i) => (
              <div key={t.id} className={`glass reveal from-bottom delay-${(i % 3) + 1}`} style={{ padding: '28px' }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {[1,2,3,4,5].map(s => <StarSVG key={s} filled={s <= t.rating} />)}
                </div>

                {/* Text */}
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.75, marginBottom: '20px', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>

                {/* Author */}
                <div style={{
                  display: 'flex', gap: '12px', alignItems: 'center',
                  paddingTop: '16px', borderTop: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                    background: `${t.color}22`,
                    border: `1.5px solid ${t.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: 700, color: t.color,
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--teal)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{ padding: '80px 0', overflow: 'hidden', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,201,177,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="tag reveal from-bottom" style={{ margin: '0 auto 20px' }}>Bugun boshlang</div>
          <h2 className="font-display reveal from-bottom delay-1" style={{ fontSize: 'clamp(32px, 5vw, 60px)', color: 'var(--text)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '20px' }}>
            Sog'lom tabassum uchun<br />
            <span style={{ color: 'var(--teal)' }}>birinchi qadam siz</span>
          </h2>
          <p className="reveal from-bottom delay-2" style={{ fontSize: '16px', color: 'var(--text2)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.75 }}>
            Bepul dastlabki konsultatsiya va professional tekshiruv uchun navbat oling.
          </p>
          <div className="reveal from-bottom delay-3" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn-primary" style={{ fontSize: '15px', padding: '16px 44px' }}>
              Navbat olish — Bepul
              <ArrowRightSVG size={18} />
            </Link>
            <Link href="/contact" className="btn-outline" style={{ fontSize: '15px', padding: '15px 36px' }}>
              Bog'lanish
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
