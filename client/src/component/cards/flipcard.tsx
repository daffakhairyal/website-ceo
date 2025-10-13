"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface FlipCardProps {
  frontImage: string;
  frontTitle: string; 
  backText: string;   
}

export default function FlipCard({ frontImage, frontTitle, backText }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-80 perspective cursor-pointer"
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-full transform-style-preserve-3d"
      >
        {/* Front (gambar + judul di tengah) */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden flex items-center justify-center bg-gray-800">
          <Image
            src={frontImage}
            alt={frontTitle}
            fill
            className="object-cover"
            priority={true}
          />
          <h3 className="absolute text-3xl font-bold text-white text-center">{frontTitle}</h3>
        </div>

        {/* Back (deskripsi saja) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl flex items-center justify-center p-6 text-white text-center font-semibold bg-yellow-500">
          <p>{backText}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
