'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function ThirdPartyScripts() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // Use a global flag to ensure the FB pixel is initialized only once
    if ((window as any).fbPixelInitialized) {
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

    // This part runs after the script is appended.
    // The script itself will initialize fbq.
    // We can then safely use it.
    const fbq = (window as any).fbq;
    if (typeof fbq !== 'function') {
        (window as any).fbq = function(...args: any[]) {
            ((window as any).fbq.queue = (window as any).fbq.queue || []).push(args);
        };
    }
    
    (window as any).fbq('init', '1201401578841926');
    (window as any).fbq('track', 'PageView');
    
    const fbNoscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = "https://www.facebook.com/tr?id=1201401578841926&ev=PageView&noscript=1";
    fbNoscript.appendChild(img);
    document.body.appendChild(fbNoscript);

    (window as any).fbPixelInitialized = true;

  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    // This effect tracks subsequent page views after the initial one.
    if (!(window as any).fbPixelInitialized || isInitialLoad.current) {
        isInitialLoad.current = false;
        return;
    }
    (window as any).fbq('track', 'PageView');
  }, [pathname]); // Reruns on route change

  return null; // This component doesn't render anything
}
