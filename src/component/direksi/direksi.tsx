"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";

const directors = [
  {
    name: "Indra Fithani AR",
    position: "Direktur Utama",
    image: "/images/dirut1.jpeg",
    email: "indrafithaniar@centraenergioptima.com",
    linkedin: "#",
  },
  {
    name: "Yerisvo Hendra",
    position: "Direktur Keuangan",
    image: "/images/ditkeu.jpeg",
    email: "yerisvohendra@centraenergioptima.com",
    linkedin: "#",
  },
  {
    name: "Rithoudin Himawan",
    position: "Direktur Operasional",
    image: "/img/direksi3.jpg",
    email: "indrafithaniar@centraenergioptima.com",
    linkedin: "#",
  }
];

export default function Direksi() {
  return (
    <section className="w-full bg-white pt-20 pb-24 px-6 md:px-12">
      <div className="text-center mb-12 pt-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide"
        >
          Board of Directors
        </motion.h2>
        <div className="mt-3 w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Kepemimpinan kami berkomitmen untuk menjaga integritas, inovasi, dan
          keunggulan dalam industri emas.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {directors.map((director, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 text-center hover:shadow-lg transition-shadow duration-300 w-full"
          >
<div className="relative w-32 h-32 mx-auto">
  <Image
    src={director.image}
    alt={director.name}
    fill
    priority
    className="rounded-full object-cover border-4 border-yellow-500"
  />
</div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {director.name}
            </h3>
            <p className="text-sm text-yellow-600 font-medium mb-3">
              {director.position}
            </p>

            <div className="flex justify-center gap-4 mt-2">
              <a
                href={`mailto:${director.email}`}
                className="text-gray-500 hover:text-yellow-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href={director.linkedin}
                target="_blank"
                className="text-gray-500 hover:text-yellow-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
