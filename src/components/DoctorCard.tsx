import { UserSVG, CheckSVG } from '@/lib/icons';

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  patients: string;
  education: string;
  color: string;
  index?: number;
}

export default function DoctorCard({ name, specialty, experience, patients, education, color, index = 0 }: DoctorCardProps) {
  const initials = name.replace('Dr. ', '').split(' ').map(w => w[0]).join('').slice(0, 2);

  return (
    <div className={`glass glass-hover reveal from-bottom delay-${(index % 4) + 1}`} style={{ padding: '28px', overflow: 'hidden', position: 'relative' }}>
      {/* Top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${color}, transparent)` }} />

      {/* Avatar + info */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{
          width: '60px', height: '60px', borderRadius: '16px', flexShrink: 0,
          background: `${color}22`,
          border: `1.5px solid ${color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', fontWeight: 700, color: color,
          letterSpacing: '-0.02em',
        }}>
          {initials}
        </div>
        <div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '3px' }}>{name}</div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{specialty}</div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '10px', marginBottom: '18px',
      }}>
        {[
          { label: 'Tajriba', value: experience },
          { label: 'Bemorlar', value: patients },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--input)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '12px',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--text3)', marginTop: '3px', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{
        display: 'flex', gap: '8px', alignItems: 'flex-start',
        padding: '12px', background: 'var(--input)', borderRadius: '10px', border: '1px solid var(--border)',
      }}>
        <span style={{ color: color, marginTop: '1px', flexShrink: 0 }}><CheckSVG size={14} color={color} /></span>
        <span style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: 1.5 }}>{education}</span>
      </div>
    </div>
  );
}
