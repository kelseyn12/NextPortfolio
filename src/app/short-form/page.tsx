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
      intro="Personal projects showing how I work."
      ctaHref="/#contact"
      titleTag="h1"
    />
  );
}
