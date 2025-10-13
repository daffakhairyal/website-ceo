"use client";
import Image from "next/image"
import { motion } from "framer-motion";
import FlipCard from "../cards/flipcard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight } from "lucide-react"
import Navbar from "@/component/navbar/navbar"

export default function Profile1(){
    return(
        <div className="w-full h-full pb-24">
        <div className="max-w-screen-xl  mx-auto pt-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
          {/* Kolom kiri - Judul dan deskripsi */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-extrabold text-yellow-500 tracking-tight mb-6">
              Profile
            </h1>
        
            <p className="mb-4 leading-relaxed text-justify">
              PT. Centra Energy Optima is a company engaged in managing business units
              within the gold mining industry. We began our operations in mining,
              trading, and gold refining, with a primary focus on eastern Indonesia,
              particularly in Nabire, Papua. As widely recognized, Papua holds
              significant potential as one of Indonesia’s largest gold-producing
              regions. Our gold mining operations are based in Nabire, Papua, with an
              ongoing process to obtain a 5,000-hectare mining concession.
            </p>
        
            <p className=" leading-relaxed text-justify">
              In 2024, we initiated exploration collaboration and mapping with
              world-class companies to optimize our mining potential. Through these
              efforts, we aim to maximize gold production and make a meaningful
              contribution to national economic growth, particularly benefiting the
              people of Nabire and its surrounding areas.
            </p>
          </motion.div>
        
          {/* Kolom kanan - Gambar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-full p-6 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-100 md:h-100 rounded-full">
              <Image
                src="/images/hero.jpg"
                alt="Hero Background"
                fill
                priority
                className="object-cover rounded-full"
              />
            </div>
          </motion.div>
        
          
          {/* Kolom kiri - Gambar */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-full p-6 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-100 md:h-100 rounded-full">
              <Image
                src="/images/hero.jpg"
                alt="Hero Background"
                fill
                priority
                className="object-cover rounded-full"
              />
            </div>
          </motion.div>
        
        
          {/* Kolom kanan - Judul dan Deskripsi */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-extrabold text-yellow-500 tracking-tight mb-6">
              Why Choose Us?
            </h1>
        
            <p className="mb-4  leading-relaxed text-justify">
        PT. Centra Energy Optima was established 
        in 2022 as a collaborative initiative with the 
        local community of one of the indigenous 
        tribes in Nabire, Central Papua. The 
        customary land in this region has 
        traditionally been managed by the tribe, 
        preserving its cultural and historical 
        heritage. Despite various challenges and 
        limitations, we remain steadfast in our 
        commitment 
        to 
        empowering 
        the 
        indigenous people of Papua, particularly 
        the Auparay Tribe, to rise and thrive. Over 
        time, our shared vision led us to officially 
        establish a unified business entity
            </p>
        
            <p className=" leading-relaxed text-justify">
        This unwavering spirit culminated in the formal founding of PT. Centra 
        Energy Optima, a reflection of our dedication as a community of the 
        Auparay Tribe from the easternmost region of Indonesia to contribute to 
        the nation’s progress. Our ultimate aspiration is to realize the noble 
        vision of the Auparay Tribe, fostering sustainable growth and success in 
        alignment with our collective hopes and ambitions.
            </p>
          </motion.div>
        
        </div>
        </div>
    )
}