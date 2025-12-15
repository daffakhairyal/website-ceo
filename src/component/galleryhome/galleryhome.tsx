"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./gallery.css"

export default function GalleryHome() {
  const images = [
    "/images/0.jpeg",
    "/images/7.jpeg",
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="gallery-section w-full h-full pt-24 pb-24 bg-black py-16 px-6">
      {/* Judul Halaman */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center pt-6 mb-12 text-yellow-500"
      >
        Gallery
      </motion.h1>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-3"
            >
              <div className="overflow-hidden rounded-2xl shadow-md relative group">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                />
                {/* Overlay teks */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    Photo {index + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Grid tambahan di bawah slider */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-2xl shadow-md group"
          >
            <img
              src={src}
              alt={`Grid Image ${index + 1}`}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
