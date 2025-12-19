"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // This effect tracks page views after the base script is loaded in layout.tsx
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  // The <noscript> part is in layout.tsx
  return null;
}
