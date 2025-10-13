"use client";
import Image from "next/image"
import { motion } from "framer-motion";
import FlipCard from "../cards/flipcard";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default function Business1(){
    return(
        <div className="w-full h-full pb-24">
                  <div className=" max-w-screen-xl mx-auto px-6 flex flex-col  items-start px-6 md:space-x-12 space-y-8 md:space-y-0 pt-24">
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
       <div className=" text-justify">
        PT Centra Energy Optima is a company focused on the gold industry with two main business lines: gold refining 
        and gold trading. In its refining operations, the company is committed to processing and purifying gold to high 
        standards, producing quality products that meet both domestic and international market demands. Meanwhile, in its 
        trading division, PT Centra Energy Optima actively engages in the buying and selling of gold, whether in bullion 
        form or other derivative products, upholding transparency, trust, and professionalism as the foundation of all 
        its business activities.
        </div>   
<br />
<br />
            <div className="flex flex-col md:flex-row space-x-4 w-1/2">
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
      </div>
    )
}