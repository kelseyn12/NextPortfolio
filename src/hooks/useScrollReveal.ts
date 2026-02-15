'use client';

import { useEffect, useRef, useState } from 'react';

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  rootMargin: '0px 0px -8% 0px',
  threshold: 0.1,
};

export function useScrollReveal(options?: Partial<IntersectionObserverInit>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { ...DEFAULT_OPTIONS, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- options is optional; rootMargin/threshold are the stable deps we need
  }, [options?.rootMargin, options?.threshold]);

  return { ref, visible };
}
