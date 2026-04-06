import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://laboccabar.rs'; // update this when you have your domain

export const metadata: Metadata = {
  title: 'La Bocca bar',
  description: 'Mesto gde se dolazi bez povoda, a ostaje duže nego što si planirao. Dobrodošli u La Bocca bar.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'La Bocca bar',
    description: 'Mesto gde se dolazi bez povoda, a ostaje duže nego što si planirao. Dobrodošli u La Bocca bar.',
    url: siteUrl,
    siteName: 'La Bocca bar',
    images: [
      {
        url: '/og-image.jpg', // replace with a real 1200x630 photo of the bar
        width: 1200,
        height: 630,
        alt: 'La Bocca bar — Kraljevo',
      },
    ],
    locale: 'sr_RS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Bocca bar',
    description: 'Mesto gde se dolazi bez povoda, a ostaje duže nego što si planirao.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: 'La Bocca bar',
  description: 'Mesto gde se dolazi bez povoda, a ostaje duže nego što si planirao. Dobrodošli u La Bocca bar.',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Radničkog Bataljona 33',
    addressLocality: 'Kraljevo',
    addressCountry: 'RS',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.7080009,
    longitude: 20.67599,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '07:00',
      closes: '00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '08:00',
      closes: '23:00',
    },
  ],
  sameAs: ['https://www.instagram.com/laboccabar/'],
  servesCuisine: ['Coffee', 'Cocktails'],
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans bg-ivory text-espresso antialiased selection:bg-caramel selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
