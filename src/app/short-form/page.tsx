import type { Metadata } from 'next';
import ShortFormContent from '@/components/ShortFormContent';

export const metadata: Metadata = {
  title: 'Short-Form Samples | Kelsey Nocek',
  description:
    'Sample short-form content around movement, gear, and the places I\'m in — examples of what I can create.',
};

export default function ShortFormPage() {
  return (
    <ShortFormContent
      title="Short-Form Samples"
      intro="Samples of the short-form content I create around movement, gear, and the places I'm in — not paid partnerships (yet), just examples of what I can do."
      ctaHref="/#contact"
      titleTag="h1"
    />
  );
}
