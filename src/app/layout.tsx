import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import Script from 'next/script';
import React from 'react';
import { Poppins } from 'next/font/google';
import FacebookPixel from '@/components/FacebookPixel';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: 'Método Destravamento Instantâneo',
  description: 'Diga adeus à dor nas costas e recupere sua qualidade de vida.',
  icons: {
    icon: 'https://i.imgur.com/kgsU2l3.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body>
        {children}
        <Toaster />
        <FacebookPixel />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
      </body>
    </html>
  );
}
