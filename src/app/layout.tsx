import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import Script from 'next/script';
import Head from 'next/head';
import React from 'react';

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
    <html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
               src="https://www.facebook.com/tr?id=1201401578841926&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <body>
        <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1201401578841926');
                fbq('track', 'PageView');
              `,
            }}
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
        <Script id="back-redirect" strategy="afterInteractive">
          {`
            (function(w,d,l){
              if (w.myBackRedirect) return;

              const link = 'https://destravamento-instantaneo.vercel.app/#oferta-especial';
              
              function setBackRedirect(url) {
                let urlBackRedirect = url;
                urlBackRedirect = urlBackRedirect.trim() +
                  (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
                  d.location.search.replace('?', '').toString();

                history.pushState(null, '', l.href);
                w.addEventListener('popstate', function () {
                    setTimeout(function(){
                         l.href = urlBackRedirect;
                    }, 1);
                }, { once: true });
              }
              
              setBackRedirect(link);
              w.myBackRedirect = true;
            }(window,document,location));
          `}
        </Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
