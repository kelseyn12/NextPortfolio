import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import PageLayers from '@/components/PageLayers';
import '../styles/global.css';

const GA_MEASUREMENT_ID = 'G-Z1D82SJ5K4';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kelseynocek.com'),
  title: {
    default: 'Kelsey Nocek | Squarespace, Shopify & Custom Web Developer',
    template: '%s | Kelsey Nocek',
  },
  description:
    'Freelance web developer building fast, custom Squarespace and Shopify sites for small businesses and outdoor brands. Based in the Midwest.',
  keywords: [
    'Squarespace developer',
    'Shopify developer',
    'custom web developer',
    'freelance web developer',
    'small business website design',
    'outdoor brand web design',
  ],
  authors: [{ name: 'Kelsey Nocek' }],
  creator: 'Kelsey Nocek',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kelseynocek.com',
    siteName: 'Kelsey Nocek',
    title: 'Kelsey Nocek | Squarespace, Shopify & Custom Web Developer',
    description:
      'Freelance web developer building fast, custom Squarespace and Shopify sites for small businesses and outdoor brands.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelsey Nocek — Squarespace, Shopify & Custom Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelsey Nocek | Squarespace, Shopify & Custom Web Developer',
    description:
      'Freelance web developer building fast, custom Squarespace and Shopify sites for small businesses and outdoor brands.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <PageLayers />
        <Navbar />
        <main className="relative z-10 pt-20">{children}</main>
      </body>
    </html>
  );
}
