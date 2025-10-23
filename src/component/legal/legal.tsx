"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, FileText, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const legalDocs = [
  {
    title: "SK Kemenkum 1",
    description: "Pengesahan pendirian badan hukum Perseoran Terbatas",
    icon: <FileText className="w-10 h-10 text-blue-500" />,
    fileUrl: "/documents/kemenkum1.jpeg",
  },
  {
    title: "SK Kemenkum 2",
    description: "Pengesahan pendirian badan hukum Perseoran Terbatas",
    icon: <FileCheck className="w-10 h-10 text-green-500" />,
    fileUrl: "/documents/kemenkum2.jpeg",
  },
  {
    title: "Notaris",
    description: "Dokumen notaris",
    icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
    fileUrl: "/documents/notaris.jpeg",
  },
];

export default function Legal() {
  const [selectedDoc, setSelectedDoc] = useState(legalDocs[0]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_current: number, next: number) => setSelectedDoc(legalDocs[next]),
    fade: true,
  };

  return (
    <div className="min-h-screen pt-30 bg-gray-50 pb-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
      >
        Legalitas Perusahaan
      </motion.h1>

      {/* Slider Card */}
      <div className="max-w-4xl mx-auto">
        <Slider {...sliderSettings}>
          {legalDocs.map((doc, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedDoc(doc)}
            >
              <div className="mb-4">{doc.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{doc.title}</h2>
              <p className="text-gray-500 text-center mb-4">{doc.description}</p>
              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition"
              >
                Unduh Dokumen
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Preview Gambar Besar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 max-w-5xl mx-auto px-4"
      >
        <h3 className="text-3xl font-semibold mb-6 text-center text-gray-700">
          {selectedDoc.title}
        </h3>
        <div className="relative w-full h-[700px] md:h-[900px] bg-white shadow-lg rounded-2xl overflow-hidden">
          <Image
            src={selectedDoc.fileUrl}
            alt={selectedDoc.title}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-center text-gray-500 max-w-2xl mx-auto"
      >
        Semua dokumen legal di atas dijamin resmi dan sesuai peraturan pemerintah.
      </motion.div>
    </div>
  );
}
