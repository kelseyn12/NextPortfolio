import type { Metadata } from 'next';
import ShortFormContent from '@/components/ShortFormContent';

export const metadata: Metadata = {
  title: 'Short-Form | Kelsey Nocek',
  description:
    'I create short-form content around movement, gear, and the places I\'m in.',
};

export default function ShortFormPage() {
  return (
    <ShortFormContent
      title="Short-Form"
      intro="I create short-form content around movement, gear, and the places I'm in."
      ctaHref="/#contact"
      titleTag="h1"
    />
  );
}
