"use client";

import Image from "next/image";
import { Construction } from "lucide-react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function ConstructionPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/images/hero.jpg",
    "/images/mine.jpg"
  ];

  return (
    <div className="h-full pt-30 pb-30 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-4">
      <Construction className="w-20 h-20 text-yellow-400 mb-6 animate-bounce" />
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 text-center">
        Under Construction
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-xl">
        Luxury is under construction. Centra Energi Optima – Coming soon.
      </p>

      <div className="w-full max-w-3xl relative h-[400px]">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="px-2 relative h-[400px]">
              <Image
                src={src}
                alt={`Gold ${index}`}
                fill
                className="rounded-2xl shadow-lg border-4 border-yellow-400 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <footer className="mt-12 text-gray-400">
        &copy; {new Date().getFullYear()} Centra Energi Optima. All rights reserved.
      </footer>
    </div>
  );
}
