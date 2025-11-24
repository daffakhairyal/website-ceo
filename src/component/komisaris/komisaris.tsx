"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, ChevronRight, ChevronLeft } from "lucide-react";
import axios from "axios";

type Leader = {
  img: string;
  name: string;
  title: string;
  position: string;
  email: string;
  linkedin: string;
  status: number;
  description: string;
};

const BASE_URL = "https://centraenergioptima.com/api";
const BASE_URL_IMAGE = "https://centraenergioptima.com";

export default function Direksi() {
  const [data, setData] = useState<Leader[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentDirector = data[currentIndex];

  useEffect(() => {
    axios
      .get(BASE_URL + "/komisaris", { withCredentials: true })
      .then((res) => setData(res.data))
      .catch(() => {});
  }, []);

  const nextDirector = () => setCurrentIndex((prev) => (prev + 1) % data.length);
  const prevDirector = () =>
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <section className="relative bg-yellow-500 pt-30 pb-20 px-6 md:px-16 flex flex-col items-center justify-center overflow-hidden space-y-8 md:space-y-3">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
          Board of Commissioners
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mt-3 rounded-full" />
        <p className="text-gray-800 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Tim manajemen kami berkomitmen untuk menjalankan strategi perusahaan
          dengan profesionalisme, inovasi, dan integritas.
        </p>
      </motion.div>

      {/* DESKTOP SLIDER */}
      {data.length > 0 && currentDirector && (
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
              {/* Image */}
              <div className="relative md:w-1/2 w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
                <img
                  src={`${BASE_URL_IMAGE}/storage/${currentDirector.img}`}
                  alt={currentDirector.name}
                  className="object-cover w-full h-full"
                />

                {/* Slider Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white flex items-center justify-between px-6 py-3">
                  <div className="text-sm tracking-widest">
                    <span className="font-semibold text-yellow-400 text-3xl">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>{" "}
                    /{""}
                    <span className="font-semibold text-3xl">
                      {String(data.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={prevDirector}>
                      <ChevronLeft
                        size={48}
                        className="p-2 bg-yellow-400 rounded-full text-black duration-300 hover:bg-yellow-500 cursor-pointer"
                      />
                    </button>

                    <button onClick={nextDirector}>
                      <ChevronRight
                        size={48}
                        className="p-2 bg-yellow-400 rounded-full text-black duration-300 hover:bg-yellow-500 cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-white rounded-2xl shadow-lg md:-ml-16 mt-8 md:mt-0 p-8 md:w-[45%] relative z-10">
                <div className="mb-2">
                  <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    Komisaris
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentDirector.name}
                </h3>

                <p className="text-yellow-600 font-medium mb-4">
                  {currentDirector.position ?? currentDirector.title}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentDirector.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* MOBILE VERSION */}
      <div className="md:hidden w-full space-y-10">
        {data.length > 0 ? (
          data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
                <img
                  src={`${BASE_URL_IMAGE}/storage/${item.img}`}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg mt-8 p-8 w-full">
                <div className="mb-2">
                  <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    Komisaris
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-yellow-600 font-medium mb-4">
                  {item.position ?? item.title}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex gap-4 mt-6">
                  <a
                    href={`mailto:${item.email}`}
                    className="text-gray-500 hover:text-yellow-600 transition"
                  >
                    <Mail size={22} />
                  </a>

                  <a
                    href={item.linkedin}
                    target="_blank"
                    className="text-gray-500 hover:text-yellow-600 transition"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center text-gray-800 font-medium">
            Data Not Found
          </div>
        )}
      </div>
    </section>
  );
}