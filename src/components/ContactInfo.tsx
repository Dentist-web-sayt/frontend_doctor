import { PhoneSVG, MapPinSVG, ClockSVG } from '@/lib/icons';
import { workingHours } from '@/lib/data';

export default function ContactInfo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Cards */}
      {[
        {
          icon: <PhoneSVG size={22} />,
          title: 'Telefon',
          lines: ['+998 71 123 45 67', '+998 90 987 65 43'],
        },
        {
          icon: <MapPinSVG size={22} />,
          title: 'Manzil',
          lines: ["Toshkent, Mirzo Ulugbek ko'chasi 14", 'Metro: Mirzo Ulugbek'],
        },
        {
          icon: <ClockSVG size={22} />,
          title: 'Ish vaqti',
          lines: workingHours.map(w => `${w.day}: ${w.hours}`),
        },
      ].map((card, i) => (
        <div key={i} className="glass" style={{ padding: '22px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{
            width: '46px', height: '46px', borderRadius: '12px', flexShrink: 0,
            background: 'var(--teal-dim)', border: '1px solid var(--teal-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--teal)',
          }}>
            {card.icon}
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {card.title}
            </div>
            {card.lines.map((line, j) => (
              <div key={j} style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.6 }}>{line}</div>
            ))}
          </div>
        </div>
      ))}

      {/* Map placeholder */}
      <div className="glass" style={{
        height: '200px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '12px',
        color: 'var(--text3)',
        borderRadius: '18px',
        background: 'linear-gradient(135deg, var(--bg2), var(--bg3))',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,201,177,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,177,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <MapPinSVG size={32} />
        <span style={{ fontSize: '13px', fontWeight: 500 }}>Xaritada ko'rish</span>
      </div>
    </div>
  );
}
