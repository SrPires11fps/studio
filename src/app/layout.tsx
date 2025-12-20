import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import React from 'react';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

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
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6946d65085f20f4ee7658aca";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </body>
    </html>
  );
}
