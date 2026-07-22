import { Metadata } from 'next';
import { ReactNode } from 'react';
import { getLocale } from 'next-intl/server';
import { draftMode } from 'next/headers';

export const metadata: Metadata = {
  metadataBase: new URL('https://meiris.com'),
  other: {
    google: 'notranslate',
  },
};
import { DM_Sans, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["700"],
});

import VisualEditingWrapper from '@/components/VisualEditingWrapper';

export default async function RootLayout({ children }: { children: ReactNode }) {
  let locale = 'en';
  try {
    locale = await getLocale();
  } catch (e) {
    // Fallback for non-i18n routes like /studio
  }

  const isDraft = draftMode().isEnabled;
  
  return (
    <html lang={locale} translate="no" className={`${dmSans.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        {isDraft && <VisualEditingWrapper />}
      </body>
    </html>
  );
}

