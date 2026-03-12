'use client';
import { useState } from 'react';
import { services, doctors, timeSlots } from '@/lib/data';
import { CalendarSVG, ClockSVG, UserSVG, CheckSVG } from '@/lib/icons';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    notes: '',
  });

  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'var(--teal-dim)', border: '2px solid var(--teal)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
        }}>
          <CheckSVG size={32} />
        </div>
        <h3 className="font-display" style={{ fontSize: '28px', color: 'var(--text)', marginBottom: '12px' }}>
          Navbatingiz qabul qilindi!
        </h3>
        <p style={{ color: 'var(--text2)', fontSize: '15px', marginBottom: '28px' }}>
          Tez orada siz bilan bog'lanamiz. Telefon raqamingizga SMS yuborildi.
        </p>
        <button className="btn-primary" onClick={() => { setSubmitted(false); setStep(1); setForm({ service: '', doctor: '', date: '', time: '', name: '', phone: '', notes: '' }); }}>
          Yangi navbat olish
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            <div style={{
              width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
              background: step >= s ? 'var(--teal)' : 'var(--input)',
              border: `1.5px solid ${step >= s ? 'var(--teal)' : 'var(--border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px', fontWeight: 700,
              color: step >= s ? '#07101E' : 'var(--text3)',
              transition: 'all 0.3s',
            }}>{step > s ? <CheckSVG size={14} color="#07101E" /> : s}</div>
            <span style={{ fontSize: '12px', color: step >= s ? 'var(--text)' : 'var(--text3)', fontWeight: step === s ? 600 : 400 }}>
              {['Xizmat tanlash', 'Vaqt belgilash', 'Ma\'lumotlar'][s - 1]}
            </span>
            {s < 3 && <div style={{ flex: 1, height: '1px', background: step > s ? 'var(--teal)' : 'var(--border)', transition: 'background 0.3s' }} />}
          </div>
        ))}
      </div>

      {/* Step 1 - Service & Doctor */}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label className="form-label">Xizmat turi</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px', marginTop: '8px' }}>
              {services.map(s => (
                <button key={s.id} onClick={() => set('service', s.name)} style={{
                  padding: '12px 16px',
                  background: form.service === s.name ? 'var(--teal-dim)' : 'var(--input)',
                  border: `1.5px solid ${form.service === s.name ? 'var(--teal)' : 'var(--border)'}`,
                  borderRadius: '12px',
                  color: form.service === s.name ? 'var(--teal)' : 'var(--text2)',
                  fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                  transition: 'all 0.25s', textAlign: 'left',
                }}>
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="form-label">Shifokor tanlash</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px', marginTop: '8px' }}>
              {doctors.map(d => (
                <button key={d.id} onClick={() => set('doctor', d.name)} style={{
                  padding: '12px 16px',
                  background: form.doctor === d.name ? 'var(--teal-dim)' : 'var(--input)',
                  border: `1.5px solid ${form.doctor === d.name ? 'var(--teal)' : 'var(--border)'}`,
                  borderRadius: '12px',
                  color: form.doctor === d.name ? 'var(--teal)' : 'var(--text2)',
                  fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                  transition: 'all 0.25s', textAlign: 'left',
                }}>
                  <div style={{ fontWeight: 600, color: form.doctor === d.name ? 'var(--teal)' : 'var(--text)', marginBottom: '2px' }}>{d.name}</div>
                  <div style={{ fontSize: '11px', opacity: 0.7 }}>{d.specialty}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-primary" onClick={() => setStep(2)} disabled={!form.service}>
              Davom etish
            </button>
          </div>
        </div>
      )}

      {/* Step 2 - Date & Time */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CalendarSVG size={14} />
              Sana tanlang
            </label>
            <input
              type="date"
              className="form-input"
              value={form.date}
              onChange={e => set('date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              style={{ marginTop: '8px' }}
            />
          </div>

          <div>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ClockSVG size={14} />
              Vaqt tanlang
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '8px', marginTop: '8px' }}>
              {timeSlots.map(t => (
                <button key={t} onClick={() => set('time', t)} style={{
                  padding: '10px',
                  background: form.time === t ? 'var(--teal)' : 'var(--input)',
                  border: `1.5px solid ${form.time === t ? 'var(--teal)' : 'var(--border)'}`,
                  borderRadius: '10px',
                  color: form.time === t ? '#07101E' : 'var(--text2)',
                  fontSize: '13px', fontWeight: form.time === t ? 700 : 500,
                  cursor: 'pointer', transition: 'all 0.25s',
                }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn-outline" onClick={() => setStep(1)}>Orqaga</button>
            <button className="btn-primary" onClick={() => setStep(3)} disabled={!form.date || !form.time}>
              Davom etish
            </button>
          </div>
        </div>
      )}

      {/* Step 3 - Personal info */}
      {step === 3 && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label className="form-label">Ism familiya</label>
              <input className="form-input" placeholder="Abdullayev Jasur" value={form.name} onChange={e => set('name', e.target.value)} required style={{ marginTop: '6px' }} />
            </div>
            <div>
              <label className="form-label">Telefon raqam</label>
              <input className="form-input" placeholder="+998 90 123 45 67" value={form.phone} onChange={e => set('phone', e.target.value)} required style={{ marginTop: '6px' }} />
            </div>
          </div>

          <div>
            <label className="form-label">Qo'shimcha izoh (ixtiyoriy)</label>
            <textarea className="form-input" rows={3} placeholder="Muammo yoki so'rovingizni yozing..." value={form.notes} onChange={e => set('notes', e.target.value)} style={{ resize: 'vertical', marginTop: '6px' }} />
          </div>

          {/* Summary */}
          <div style={{
            padding: '16px', background: 'var(--teal-dim)',
            border: '1px solid var(--teal-border)', borderRadius: '12px',
            fontSize: '13px', color: 'var(--text2)',
          }}>
            <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>Navbat ma'lumotlari:</div>
            <div>📋 {form.service}</div>
            {form.doctor && <div>👨‍⚕️ {form.doctor}</div>}
            <div>📅 {form.date} — {form.time}</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="button" className="btn-outline" onClick={() => setStep(2)}>Orqaga</button>
            <button type="submit" className="btn-primary">
              <CheckSVG size={16} color="#07101E" />
              Navbatni tasdiqlash
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
