"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, ChevronRight, ChevronLeft } from "lucide-react";

const directors = [
  {
    id: 1,
    name: "Indra Fithani AR",
    position: "Direktur Utama",
    image: "/images/dirut1.jpeg",
    description:
      "Sebagai Direktur Utama, beliau memimpin arah strategis perusahaan dengan fokus pada inovasi, efisiensi, dan tata kelola yang berintegritas tinggi.",
    email: "indrafithaniar@centraenergioptima.com",
    linkedin: "#",
  },
  {
    id:2,
    name: "Yerisvo Hendra",
    position: "Direktur Keuangan",
    image: "/images/yerisvohendra.jpeg",
    description:
      "Mengelola dan mengawasi seluruh aspek keuangan perusahaan, memastikan transparansi, efisiensi, dan keberlanjutan finansial.",
    email: "yerisvohendra@centraenergioptima.com",
    linkedin: "#",
  },
  {
    id:3,
    name: "Rithoudin Himawan",
    position: "Direktur Operasional",
    image: "/images/ritho.jpeg",
    description:
      "Bertanggung jawab atas pelaksanaan operasional dan peningkatan efisiensi dalam seluruh proses bisnis perusahaan.",
    email: "rithoudinhimawan@centraenergioptima.com",
    linkedin: "#",
  },
];

export default function Direksi() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDirector = directors[currentIndex];
const mobileCurrentDirector = directors;


  const nextDirector = () => {
    setCurrentIndex((prev) => (prev + 1) % directors.length);
  };

  const prevDirector = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? directors.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative bg-yellow-500 pt-30 pb-20 px-6 md:px-16 flex flex-col items-center justify-center overflow-hidden space-y-8 md:space-y-3">
      {/* ====== TITLE SECTION ====== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
          Board of Directors
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-800 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Tim manajemen kami berkomitmen untuk menjalankan strategi perusahaan
          dengan profesionalisme, inovasi, dan integritas.
        </p>
      </motion.div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="hidden md:flex md:flex-col md:flex-row items-center justify-center w-full max-w-6xl relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center w-full"
          >
            {/* Kiri - Foto */}
            <div className="relative md:w-1/2 w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={currentDirector.image}
                alt={currentDirector.name}
                fill
                className="object-cover"
                priority
              />

              {/* Navigasi slider di bawah foto */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white flex items-center justify-between px-6 py-3">
                <div className="text-sm tracking-widest">
                  <span className="font-semibold text-yellow-400 text-3xl">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>{" "}
                  / <span className="font-semibold text-3xl">{String(directors.length).padStart(2, "0")}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prevDirector}
                    className="hover:text-yellow-400 transition text-6xl font-bold"
                  >
                    <ChevronLeft size={48}  className="p-2 bg-yellow-400 rounded-full text-black duration-300 hover:bg-yellow-500 cursor-pointer"/>
                  </button>
                  <button
                    onClick={nextDirector}
                    className="hover:text-yellow-400 transition text-6xl font-bold"
                  >
                   <ChevronRight size={48} className="p-2 bg-yellow-400 rounded-full text-black duration-300 hover:bg-yellow-500 cursor-pointer"/>
                  </button>
                </div>
              </div>
            </div>

            {/* Kanan - Detail */}
            <div className="bg-white rounded-2xl shadow-lg md:-ml-16 mt-8 md:mt-0 p-8 md:w-[45%] relative z-10">
              <div className="mb-2">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  Direksi
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {currentDirector.name}
              </h3>
              <p className="text-yellow-600 font-medium mb-4">
                {currentDirector.position}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {currentDirector.description}
              </p>

              {/* Kontak */}
              <div className="flex gap-4 mt-6">
                <a
                  href={`mailto:${currentDirector.email}`}
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Mail size={22} />
                </a>
                <a
                  href={currentDirector.linkedin}
                  target="_blank"
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>


      {/* ====== MOBILE MAIN CONTENT ====== */}

            <div className="md:hidden flex md:flex-col md:flex-row items-center justify-center w-full max-w-6xl relative space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center w-full"
          >
            {/* Kiri - Foto */}
            <div className="relative md:w-1/2 w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={mobileCurrentDirector[0].image}
                alt={mobileCurrentDirector[0].name}
                fill
                className="object-cover"
                priority
              />

            </div>

            {/* Kanan - Detail */}
            <div className="bg-white rounded-2xl shadow-lg md:-ml-16 mt-8 md:mt-0 p-8 md:w-[45%] relative z-10">
              <div className="mb-2">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  Direksi
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {mobileCurrentDirector[0].name}
              </h3>
              <p className="text-yellow-600 font-medium mb-4">
                {mobileCurrentDirector[0].position}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {mobileCurrentDirector[0].description}
              </p>

              {/* Kontak */}
              <div className="flex gap-4 mt-6">
                <a
                  href={`mailto:${mobileCurrentDirector[0].email}`}
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Mail size={22} />
                </a>
                <a
                  href={mobileCurrentDirector[0].linkedin}
                  target="_blank"
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

                  <div className="md:hidden flex md:flex-col md:flex-row items-center justify-center w-full max-w-6xl relative space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center w-full"
          >
            {/* Kiri - Foto */}
            <div className="relative md:w-1/2 w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={mobileCurrentDirector[1].image}
                alt={mobileCurrentDirector[1].name}
                fill
                className="object-cover"
                priority
              />

            </div>

            {/* Kanan - Detail */}
            <div className="bg-white rounded-2xl shadow-lg md:-ml-16 mt-8 md:mt-0 p-8 md:w-[45%] relative z-10">
              <div className="mb-2">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  Direksi
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {mobileCurrentDirector[1].name}
              </h3>
              <p className="text-yellow-600 font-medium mb-4">
                {mobileCurrentDirector[1].position}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {mobileCurrentDirector[1].description}
              </p>

              {/* Kontak */}
              <div className="flex gap-4 mt-6">
                <a
                  href={`mailto:${mobileCurrentDirector[1].email}`}
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Mail size={22} />
                </a>
                <a
                  href={mobileCurrentDirector[1].linkedin}
                  target="_blank"
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

            <div className="md:hidden flex md:flex-col md:flex-row items-center justify-center w-full max-w-6xl relative space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center w-full"
          >
            {/* Kiri - Foto */}
            <div className="relative md:w-1/2 w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={mobileCurrentDirector[2].image}
                alt={mobileCurrentDirector[2].name}
                fill
                className="object-cover"
                priority
              />

            </div>

            {/* Kanan - Detail */}
            <div className="bg-white rounded-2xl shadow-lg md:-ml-16 mt-8 md:mt-0 p-8 md:w-[45%] relative z-10">
              <div className="mb-2">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  Direksi
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {mobileCurrentDirector[2].name}
              </h3>
              <p className="text-yellow-600 font-medium mb-4">
                {mobileCurrentDirector[2].position}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {mobileCurrentDirector[2].description}
              </p>

              {/* Kontak */}
              <div className="flex gap-4 mt-6">
                <a
                  href={`mailto:${mobileCurrentDirector[2].email}`}
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Mail size={22} />
                </a>
                <a
                  href={mobileCurrentDirector[2].linkedin}
                  target="_blank"
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      
    </section>
  );
}
