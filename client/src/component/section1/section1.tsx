"use client";
import Image from "next/image"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight } from "lucide-react"
import Navbar from "@/component/navbar/navbar"
import { useState } from "react"
import Section2 from "@/component/section2/section2"
import { Suspense, lazy } from "react"
import { useRouter } from "next/navigation"
import {updates } from "../data"

export default function Section1() {
  const router = useRouter()
  const handleLearn = () => {
    router.push("/profile")
  }
    const handleContact = () => {
    router.push("/contact")
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }
    return(
        <section>
              <section className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background */}
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay gradasi gelap dari kiri */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>

        {/* Konten utama */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-left max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Leading Gold, Connecting Nations.
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10">
          Become a leading gold company from the region that 
has national network and international brand
            </p>

            <div className="flex gap-4">
              <motion.button
                onClick={handleLearn}
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
              >
                Learn More
              </motion.button>
              <motion.button
              onClick={handleContact}
                whileHover={{ scale: 1.05 }}
                className="border cursor-pointer border-gray-300 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Aksen gradasi bawah */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Quick Updates Section */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full pb-8">
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-white px-6 md:px-16 lg:px-24">
            {/* Title */}
            <h2 className="text-2xl md:text-5xl font-semibold text-yellow-500 whitespace-nowrap">
              Latest Article
            </h2>

            {/* Slider */}
            <div className="flex-1 w-full">
              <Slider {...settings}>
                {updates.map((item, index) => (
                  <div key={index} className="px-2">
                    <motion.div
                    onClick={() => router.push(`/news/${item.id}`)}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white/10 cursor-pointer backdrop-blur-md border border-white/20 rounded-2xl p-5 h-40 md:h-32 flex flex-col justify-between hover:bg-white/20 transition duration-300"
                    >
                      <div>
                        <p className="text-yellow-400 text-sm font-semibold uppercase">
                          {item.category}
                        </p>
                        <h3 className="text-sm font-semibold text-white mt-1 line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-300 mt-3">
                        <span>{item.date}</span>
                        <ArrowRight size={18} className="text-yellow-400" />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>


      </section>
      {/* Quick Updates Mobile Section */}
<div className="md:hidden w-full pb-6 bg-black pt-3">
  <div className="flex flex-col gap-4 text-white px-6">
    <h2 className="text-2xl font-semibold text-yellow-500">
      Artikel Terbaru
    </h2>

    Slider
    <div className="w-full">
      <Slider
        dots={true}
        infinite={true}
        speed={800}
        slidesToShow={1}       // Hanya 1 item per slide
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3500}
        arrows={false}
      >
        {updates.map((item, index) => (
          <div key={index} className="px-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 h-32 flex flex-col justify-between hover:bg-white/20 transition duration-300"
            >
              <div>
                <p className="text-yellow-400 text-xs font-semibold uppercase">
                  {item.category}
                </p>
                <h3 className="text-sm font-semibold text-white mt-1 line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                <span>{item.date}</span>
                <ArrowRight size={16} className="text-yellow-400" />
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>
</section>
    )
}