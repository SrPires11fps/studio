'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ThirdPartyScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Injeta o script e inicializa o fbq apenas uma vez
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

    // Garante que fbq seja uma função válida mesmo antes de o script carregar
    if (typeof (window as any).fbq !== 'function') {
      const fbq = function(...args: any[]) {
        ((window as any).fbq.queue = (window as any).fbq.queue || []).push(args);
      };
      (window as any).fbq = fbq;
    }

    (window as any).fbq('init', '1201401578841926');
    (window as any).fbPixelInitialized = true;

    const fbNoscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = "https://www.facebook.com/tr?id=1201401578841926&ev=PageView&noscript=1";
    fbNoscript.appendChild(img);
    document.body.appendChild(fbNoscript);

  }, []); // Roda apenas uma vez no mount

  useEffect(() => {
    // Rastreia PageView no carregamento inicial e em cada mudança de rota
    // Espera um pouco para garantir que o fbq foi inicializado pelo outro useEffect
    const timer = setTimeout(() => {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'PageView');
      }
    }, 50); // Pequeno delay para garantir a inicialização

    return () => clearTimeout(timer);
  }, [pathname]); // Roda no carregamento inicial e a cada mudança de pathname

  return null; // Este componente não renderiza nada
}
