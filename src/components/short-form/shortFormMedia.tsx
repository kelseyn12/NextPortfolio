'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';

export function YoutubePortraitIframe({ youtubeId, title }: { youtubeId: string; title: string }) {
  const params = new URLSearchParams({
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    iv_load_policy: '3',
  });
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;
  return (
    <>
      {/* eslint-disable react-dom/no-unsafe-iframe-sandbox -- YouTube embed needs allow-scripts and allow-same-origin for playback */}
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* eslint-enable react-dom/no-unsafe-iframe-sandbox */}
    </>
  );
}

export function FilterSection({
  visible,
  children,
}: {
  visible: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`grid transition-[grid-template-rows,margin-bottom] duration-300 ease-in-out ${
        visible ? 'mb-8 grid-rows-[1fr] md:mb-10' : 'mb-0 grid-rows-[0fr]'
      }`}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            visible ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function Lightbox({
  src,
  alt,
  onClose,
}: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <button
      type="button"
      className="fixed inset-0 z-[100] flex cursor-default items-center justify-center bg-black/90 p-4 focus:outline-none"
      onClick={onClose}
      aria-label="Close lightbox"
    >
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
        onClick={e => e.stopPropagation()}
      />
    </button>
  );
}
