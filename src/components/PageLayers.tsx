'use client';

/**
 * One primary warm background tone for the page. No layered gradients.
 */
function GlobalGradientLayer() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
      style={{ background: 'rgb(232,224,212)' }}
    />
  );
}

function GlobalGrainLayer() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] [@media(prefers-reduced-motion:reduce)]:opacity-[0.01]"
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}

export default function PageLayers() {
  return (
    <>
      <GlobalGradientLayer />
      <GlobalGrainLayer />
    </>
  );
}
