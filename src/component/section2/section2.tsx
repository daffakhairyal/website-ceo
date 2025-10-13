"use client";
import Image from "next/image"
import { motion } from "framer-motion";
import FlipCard from "../cards/flipcard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight } from "lucide-react"
import Navbar from "@/component/navbar/navbar"
import { useState } from "react"


export default function Section2() {
     const [titleClicked, setTitleClicked] = useState(true);
  const [productClicked, setProductClicked] = useState(false);

   const handleTitleClick = () => {
    if (!titleClicked) {
      setTitleClicked(true);
      setProductClicked(false);
    }
  };

  const handleProductClick = () => {
    if (!productClicked) {
      setProductClicked(true);
      setTitleClicked(false);
    } 
  };
    return (
       
<section className="w-full">
     {/*Section 2*/}
  <div className="relative flex justify-center h-full">
<div className="absolute top-0 left-1/2 -translate-x-1/2 flex border-none">
  <button
    onClick={handleTitleClick}
    className="relative cursor-pointer text-2xl font-semibold px-4 py-2 overflow-visible rounded-bl-lg group border-none shadow-lg"
  >
    {/* Background kotak */}
    <span
      className={`absolute top-0 left-0 w-full h-full bg-yellow-600 transition-transform duration-300 origin-top border-none rounded-bl-lg ${
        titleClicked ? "scale-y-150 rounded-br-lg" : ""
      }`}
    ></span>

    {/* Teks */}
    <span className={`relative z-10 block border-none transition-transform duration-300 ${titleClicked ? "translate-y-3  text-3xl" : "translate-y-0 text-md"}`}>About Us</span>
  </button>

  <button
    onClick={handleProductClick}
    className="relative cursor-pointer text-2xl font-semibold px-4 py-2 overflow-visible group border-none shadow-lg"
  >
    <span
      className={`absolute top-0 left-0 w-full h-full bg-yellow-600 transition-transform duration-300 origin-top rounded-br-lg ${
        productClicked ? "scale-y-150 rounded-bl-lg" : ""
      }`}
    ></span>
    <span className={`relative z-10 block transition-transform duration-300  ${productClicked ? "translate-y-3 text-3xl" : "translate-y-0 text-md"}`}>Our Business</span>
  </button>
</div>

{/*Konten Dinamis */}
        <div className="w-full bg-black text-white h-full py-20">
           {titleClicked && (

<div className="w-full bg-black">
<div className="max-w-screen-xl bg-black mx-auto mt-20 md:mt-5 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

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

    <p className="mb-4 text-gray-50 leading-relaxed text-justify">
      PT. Centra Energy Optima is a company engaged in managing business units
      within the gold mining industry. We began our operations in mining,
      trading, and gold refining, with a primary focus on eastern Indonesia,
      particularly in Nabire, Papua. As widely recognized, Papua holds
      significant potential as one of Indonesia’s largest gold-producing
      regions. Our gold mining operations are based in Nabire, Papua, with an
      ongoing process to obtain a 5,000-hectare mining concession.
    </p>

    <p className="text-gray-50 leading-relaxed text-justify">
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

    <p className="mb-4 text-gray-50 leading-relaxed text-justify">
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

    <p className="text-gray-50 leading-relaxed text-justify">
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

              )}

              {productClicked && (


      <div className=" max-w-screen-xl mt-20 md:mt-5 mx-auto px-6 flex flex-col  items-start px-6 md:space-x-12 space-y-8 md:space-y-0 ">
        {/* Gambar di kanan */}
         <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl font-extrabold text-yellow-500 tracking-tight mb-4 md:mb-0"
        >
          Business Line
        </motion.h2>
        <br />
        <br />
       <div className="text-white text-justify">
        PT Centra Energy Optima is a company focused on the gold industry with two main business lines: gold refining 
        and gold trading. In its refining operations, the company is committed to processing and purifying gold to high 
        standards, producing quality products that meet both domestic and international market demands. Meanwhile, in its 
        trading division, PT Centra Energy Optima actively engages in the buying and selling of gold, whether in bullion 
        form or other derivative products, upholding transparency, trust, and professionalism as the foundation of all 
        its business activities.
        </div>   
<br />
<br />
            <div className="flex flex-col md:flex-row space-x-4 w-full md:w-1/2 space-y-4 md:space-y-0">
        <FlipCard
          frontImage="/images/hero.jpg"
          frontTitle="Refinery"
          backText="Our refinery processes gold to high standards for domestic and international markets."
        />
        <FlipCard
          frontImage="/images/mine.jpg"
          frontTitle="Trading"
          backText="We actively trade gold, both bullion and derivatives, with transparency and professionalism."
        />

      </div>

      </div>
              )}
    </div>
  </div>
</section>
    )
}