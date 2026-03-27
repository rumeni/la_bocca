import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'La Bocca bar',
  description: 'Mesto gde se dolazi bez povoda, a ostaje duze nego sto si planirao. Dobrodosli u La Bocca bar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} font-sans bg-ivory text-espresso antialiased selection:bg-caramel selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
