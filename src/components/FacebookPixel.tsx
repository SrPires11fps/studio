"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export function FacebookPixel() {
  const [pixelLoaded, setPixelLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // This effect ensures that the pixel is only initialized once
    if (pixelLoaded) return;
    
    // Check if fbq is already defined to avoid re-initialization
    if (window.fbq) {
        setPixelLoaded(true);
        return;
    }
    
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '1201401578841926');
    window.fbq('track', 'PageView');
    setPixelLoaded(true);
    
  }, [pixelLoaded]);

  useEffect(() => {
    // This effect tracks page views on navigation
    if (!pixelLoaded) return;
    window.fbq('track', 'PageView');
  }, [pathname, pixelLoaded]);

  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1201401578841926&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
}
