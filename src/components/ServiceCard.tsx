'use client';
import Link from 'next/link';
import { getServiceIcon, ArrowUpRightSVG, ClockSVG } from '@/lib/icons';

interface ServiceCardProps {
  icon: string;
  name: string;
  desc: string;
  price: string;
  duration: string;
  index?: number;
}

export default function ServiceCard({ icon, name, desc, price, duration, index = 0 }: ServiceCardProps) {
  return (
    <div
      className={`glass glass-hover reveal from-bottom delay-${(index % 3) + 1} service-card`}
      style={{ padding: '32px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      <style>{`
        .service-card .service-icon { transition: all 0.35s; }
        .service-card:hover .service-icon {
          background: var(--teal) !important;
          color: #fff !important;
          border-color: var(--teal) !important;
        }
        .service-arrow-btn {
          width: 36px; height: 36px;
          background: var(--teal-dim);
          border: 1px solid var(--teal-border);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: var(--teal);
          transition: all 0.3s;
          flex-shrink: 0;
          text-decoration: none;
        }
        .service-arrow-btn:hover {
          background: var(--teal);
          color: #07101E;
        }
      `}</style>

      {/* Icon */}
      <div className="service-icon" style={{
        width: '52px', height: '52px',
        background: 'var(--teal-dim)',
        border: '1px solid var(--teal-border)',
        borderRadius: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
      }}>
        {getServiceIcon(icon)}
      </div>

      {/* Name */}
      <h3 style={{
        fontSize: '17px', fontWeight: 600,
        color: 'var(--text)',
        marginBottom: '10px',
        lineHeight: 1.3,
      }}>{name}</h3>

      {/* Desc */}
      <p style={{
        fontSize: '13.5px', color: 'var(--text2)',
        lineHeight: 1.75, marginBottom: '24px',
      }}>{desc}</p>

      {/* Bottom row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: '16px',
        borderTop: '1px solid var(--border)',
      }}>
        <div>
          <div style={{ fontSize: '13px', color: 'var(--teal)', fontWeight: 600 }}>{price}</div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            fontSize: '12px', color: 'var(--text3)', marginTop: '3px',
          }}>
            <ClockSVG size={12} />
            {duration}
          </div>
        </div>
        <Link href="/booking" className="service-arrow-btn">
          <ArrowUpRightSVG size={14} />
        </Link>
      </div>
    </div>
  );
}
