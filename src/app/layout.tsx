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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57RR9X3W');`}}></script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57RR9X3W"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
        <Toaster />

        <script
          id="utmify-loader"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (document.getElementById('utmify-pixel-script')) return;
                
                window.pixelId = "6946d65085f20f4ee7658aca";
                var pixelScript = document.createElement("script");
                pixelScript.id = "utmify-pixel-script";
                pixelScript.async = true;
                pixelScript.defer = true;
                pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
                document.head.appendChild(pixelScript);

                if (document.getElementById('utmify-utm-script')) return;

                var utmScript = document.createElement("script");
                utmScript.id = "utmify-utm-script";
                utmScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
                utmScript.setAttribute('data-utmify-prevent-xcod-sck', '');
                utmScript.setAttribute('data-utmify-prevent-subids', '');
                utmScript.async = true;
                utmScript.defer = true;
                document.head.appendChild(utmScript);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
