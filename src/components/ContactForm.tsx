'use client';
import { CheckSVG } from '@/lib/icons';

export default function ContactForm() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      onSubmit={e => e.preventDefault()}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label className="form-label">Ism</label>
          <input className="form-input" placeholder="Jasur" style={{ marginTop: '6px' }} />
        </div>
        <div>
          <label className="form-label">Telefon</label>
          <input className="form-input" placeholder="+998 90..." style={{ marginTop: '6px' }} />
        </div>
      </div>
      <div>
        <label className="form-label">Mavzu</label>
        <input className="form-input" placeholder="Savolingizni kiriting" style={{ marginTop: '6px' }} />
      </div>
      <div>
        <label className="form-label">Xabar</label>
        <textarea className="form-input" rows={4} placeholder="Batafsil yozing..." style={{ resize: 'vertical', marginTop: '6px' }} />
      </div>
      <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
        <CheckSVG size={16} color="#07101E" />
        Yuborish
      </button>
    </form>
  );
}
