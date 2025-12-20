'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export function ThirdPartyScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // This is to avoid triggering the pixel multiple times in development.
    if (process.env.NODE_ENV === 'development' && (window as any).fbq) {
      return;
    }

    const fbScript = document.createElement('script');
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    `;
    document.head.appendChild(fbScript);

    const fbNoscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = "https://www.facebook.com/tr?id=1201401578841926&ev=PageView&noscript=1";
    fbNoscript.appendChild(img);
    document.body.appendChild(fbNoscript);

    const fbq = (window as any).fbq;
    if (fbq) {
      fbq('init', '1201401578841926');
      fbq('track', 'PageView');
    }
  }, []);

  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <>
      <Script
        id="utmify-script"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        strategy="afterInteractive"
      />
    </>
  );
}
