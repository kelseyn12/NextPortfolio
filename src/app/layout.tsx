import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageLayers from '@/components/PageLayers';
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Kelsey Nocek | Portfolio',
  description: 'Creative developer portfolio site for Kelsey Nocek',
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
        <PageLayers />
        <Navbar />
        <main className="relative z-10 pt-20">{children}</main>
      </body>
    </html>
  );
}
