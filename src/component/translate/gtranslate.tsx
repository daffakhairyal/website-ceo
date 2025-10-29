"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function GTranslate() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-trigger GTranslate saat route berubah
    if (typeof window !== "undefined" && (window as any).gtranslateSettings) {
      const event = new Event("gtranslate:update");
      window.dispatchEvent(event);
    }
  }, [pathname]);

  return (
    <>
      {/* Tempat GTranslate akan muncul */}
      <div className="gtranslate_wrapper"></div>

      {/* Inisialisasi konfigurasi */}
      <Script id="gtranslate-settings" strategy="beforeInteractive">
        {`
          window.gtranslateSettings = {
            default_language: "id",
            native_language_names: true,
            detect_browser_language: true,
            languages: ["id","ar","zh-CN","ms","ko", "en"],
            wrapper_selector: ".gtranslate_wrapper",
            switcher_horizontal_position: "right",
            switcher_vertical_position: "top",
            float_switcher_open_direction: "right"
          };
        `}
      </Script>

      {/* Script utama dari GTranslate */}
      <Script
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="afterInteractive"
      />
    </>
  );
}
