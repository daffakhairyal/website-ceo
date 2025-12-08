"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, FileText, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const BASE_URL = "https://centraenergioptima.com/api";
const BASE_URL_IMAGE = "https://centraenergioptima.com";

type Legal = {
  title : string;
  description: string;
  icon : string;
  fileUrl : string;
}

export default function Legal() {
  const [data, setData] = useState<Legal[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Legal | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_current: number, next: number) => setSelectedDoc(data[next]),
    fade: true,
  };

useEffect(() => {
  axios
    .get(`${BASE_URL}/legals`)
    .then((res) => {
      setData(res.data);
      setSelectedDoc(res.data[0]);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);


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
          {data.map((doc, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedDoc(doc)}
            >
            
              <h2 className="text-2xl font-semibold mb-2">{doc.title}</h2>
              <p className="text-gray-500 text-center mb-4">{doc.description}</p>
              <a
                href={`${BASE_URL_IMAGE}/storage/${doc.fileUrl}`}
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


{selectedDoc && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="mt-16 max-w-5xl mx-auto px-4"
  >
    <h3 className="text-3xl font-semibold mb-6 text-center text-gray-700">
      {selectedDoc.title}
    </h3>

    <div className="relative w-full h-[700px] md:h-[900px] bg-white shadow-lg rounded-2xl overflow-hidden flex items-center justify-center">
      {/\.(jpeg|jpg|png|webp)$/i.test(selectedDoc.fileUrl) ? (
        <img
          src={`${BASE_URL_IMAGE}/storage/${selectedDoc.fileUrl}`}
          alt={selectedDoc.title}
          className="max-w-full max-h-full object-contain"
        />
      ) : selectedDoc.fileUrl.endsWith(".pdf") ? (
        <iframe
          src={`${BASE_URL_IMAGE}/storage/${selectedDoc.fileUrl}`}
          title={selectedDoc.title}
          className="w-full h-full"
        />
      ) : (
        <p className="text-gray-500">Preview tidak tersedia</p>
      )}
    </div>
  </motion.div>
)}



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
