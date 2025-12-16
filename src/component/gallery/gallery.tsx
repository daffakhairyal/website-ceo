"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Gallery() {
const data = [
  { src: "/images/0.jpeg", title: "Pertemuan dengan disperindag", date: "12 Des 2025" },
  { src: "/images/7.jpeg", title: "Kunjungan Raffi Ahmad", date: "" },
  { src: "/images/1.jpeg", title: "Emas Batangan", date: "" },
  { src: "/images/2.jpeg", title: "Emas Granula", date: "" },
  { src: "/images/3.jpeg", title: "Emas Granula", date: "" },
  { src: "/images/4.jpeg", title: "Emas", date: "" },
  { src: "/images/5.jpeg", title: "Emas Granula", date: "" },
  { src: "/images/6.jpeg", title: "Emas Batangan", date: "" },
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
    <section className="w-full h-full pt-24 pb-24 bg-gray-50 py-16 px-6">
      {/* Judul Halaman */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center pt-6 mb-12 text-gray-800"
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
          {data.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-3"
            >
              <div className="overflow-hidden rounded-2xl shadow-md relative group">
      {/* Image + Link */}
      <a
        href={item.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
      </a>
{/* Gradient Overlay */}
<div
  className="
    pointer-events-none
    absolute inset-0
    bg-gradient-to-t from-black/80 via-black/30 to-transparent
    opacity-100 md:opacity-0
    md:group-hover:opacity-100
    transition-opacity duration-300
  "
/>

{/* Text Overlay */}
<div
  className="
    pointer-events-none
    absolute bottom-0 left-0 right-0 p-4
    opacity-100 md:opacity-0
    md:group-hover:opacity-100
    transition-all duration-300
    md:translate-y-4 md:group-hover:translate-y-0
  "
>
  <p className="text-white text-sm font-medium">
    {item.title}
  </p>
  <span className="text-gray-300 text-xs">
    {item.date}
  </span>
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
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-2xl shadow-md group"
          >
    <div
      key={index}
      className="w-full relative overflow-hidden rounded-md group transition-transform duration-300 hover:scale-105"
    >
      {/* Image + Link */}
      <a
        href={item.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
      </a>
{/* Gradient Overlay */}
<div
  className="
    pointer-events-none
    absolute inset-0
    bg-gradient-to-t from-black/80 via-black/30 to-transparent
    opacity-100 md:opacity-0
    md:group-hover:opacity-100
    transition-opacity duration-300
  "
/>

{/* Text Overlay */}
<div
  className="
    pointer-events-none
    absolute bottom-0 left-0 right-0 p-4
    opacity-100 md:opacity-0
    md:group-hover:opacity-100
    transition-all duration-300
    md:translate-y-4 md:group-hover:translate-y-0
  "
>
  <p className="text-white text-sm font-medium">
    {item.title}
  </p>
  <span className="text-gray-300 text-xs">
    {item.date}
  </span>
</div>

    </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
