"use client"; // wajib di Next.js 13+ jika pakai app directory

import { useEffect } from "react";

export default function GTranslate() {
  useEffect(() => {
    // set konfigurasi
    (window as any).gtranslateSettings = {
      default_language: "id",
      native_language_names: true,
      detect_browser_language: true,
      languages: ["id", "fr", "it", "es", "en"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
      switcher_vertical_position: "top",
      float_switcher_open_direction: "right",
    };

    // inject script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    // optional cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
}
