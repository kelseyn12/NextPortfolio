'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const STAGGER_CLASSES = [
  'scroll-reveal-stagger-1',
  'scroll-reveal-stagger-2',
  'scroll-reveal-stagger-3',
  'scroll-reveal-stagger-4',
  'scroll-reveal-stagger-5',
] as const;

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'scale';
  staggerIndex?: number;
};

export default function ScrollReveal({
  children,
  className = '',
  variant = 'fadeUp',
  staggerIndex,
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal();
  const baseClass = variant === 'scale' ? 'scroll-reveal-scale' : 'scroll-reveal';
  const staggerClass = staggerIndex !== undefined && staggerIndex >= 0 && staggerIndex < STAGGER_CLASSES.length
    ? STAGGER_CLASSES[staggerIndex]
    : '';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${staggerClass} ${visible ? 'scroll-reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
