"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function SliderImages() {
  const images = [
    "/images/mine.jpg",
    "/images/trading.jpg",
    "/images/minting.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full">
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ))}
    </div>
  );
}
