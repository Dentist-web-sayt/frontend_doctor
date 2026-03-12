'use client';
import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);
  return ref;
}

// Hook to observe all .reveal elements
export function useRevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
