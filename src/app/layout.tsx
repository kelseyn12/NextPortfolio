import "../styles/global.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Kelsey Nocek | Portfolio",
  description: "Creative developer portfolio site for Kelsey Nocek",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
