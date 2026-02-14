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

/**
 * Large, soft wave tile (2000×800): one broad undulation, thick stroke, fades at
 * top/bottom so vertical repeats blend. Mist-on-water, not wallpaper.
 */
const WAVE_SVG_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 800'%3E%3Cdefs%3E%3ClinearGradient id='f' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23fff' stop-opacity='0'/%3E%3Cstop offset='0.2' stop-color='%23fff' stop-opacity='1'/%3E%3Cstop offset='0.8' stop-color='%23fff' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3Cmask id='m'%3E%3Crect width='2000' height='800' fill='url(%23f)'/%3E%3C/mask%3E%3C/defs%3E%3Cpath mask='url(%23m)' d='M0,400 C500,300 1500,500 2000,400' fill='none' stroke='%231a2e38' stroke-width='220' stroke-linecap='round' stroke-opacity='0.4'/%3E%3C/svg%3E";

function WaveBackgroundLayer() {
  return (
    <div
      className="animate-wave-bg pointer-events-none fixed inset-0 z-0 opacity-[0.035] [@media(prefers-reduced-motion:reduce)]:animate-none [@media(prefers-reduced-motion:reduce)]:opacity-[0.02]"
      aria-hidden
      style={{
        backgroundImage: `url("${WAVE_SVG_DATA_URI}")`,
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0',
      }}
    />
  );
}

export default function PageLayers() {
  return (
    <>
      <GlobalGradientLayer />
      <GlobalGrainLayer />
      <WaveBackgroundLayer />
    </>
  );
}
