"use client";
import { motion } from "framer-motion";
import FlipCard from "../cards/flipcard";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default function Business1(){
    return(
        <div className="w-full h-full pb-24">
                  <div className=" max-w-screen-xl mx-auto px-6 flex flex-col  items-start px-6 md:space-x-12 space-y-8 md:space-y-0 pt-30">
        {/* Gambar di kanan */}
         <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl font-extrabold  tracking-tight mb-4 md:mb-0"
        >
          Business Line
        </motion.h2>
        <br />
        <br />
       <div className=" text-justify">
PT Centra Energy Optima is a company engaged in the gold industry with integrated operations 
covering mining, minting, refining, trading, and bullion banking. In its mining activities, the 
company focuses on extracting gold resources responsibly to ensure sustainable production. Through 
its minting and refining operations, PT Centra Energy Optima processes and purifies gold to international 
standards, producing high-quality bullion and coin products. In the trading division, the company actively 
participates in the domestic and international gold markets, ensuring transparency and integrity in every transaction. 
Furthermore, through its bullion banking services, PT Centra Energy Optima provides gold storage, financing, 
and liquidity solutions, strengthening its position as a trusted and comprehensive player in the gold industry.
        </div>   
<br />
<br />
            <div className="flex flex-col md:flex-row space-x-4 w-full">
        <FlipCard
          frontImage="/images/hero.jpg"
          frontTitle="Refinery"
          backText="Our refinery processes gold to high standards for domestic and international markets."
        />
        <FlipCard
          frontImage="/images/trading.jpg"
          frontTitle="Trading"
          backText="We actively trade gold, both bullion and derivatives, with transparency and professionalism."
        />

                <FlipCard
          frontImage="/images/mine.jpg"
          frontTitle="Mining"
          backText="The process of extracting gold from the earth to produce gold dore (raw gold) for further refining."
        />
                <FlipCard
          frontImage="/images/minting.jpg"
          frontTitle="Minting"
          backText="The process of refining and shaping pure gold into bars or coins with 99.99% purity, ready for sale or storage."
        />
                <FlipCard
          frontImage="/images/bullion.jpg"
          frontTitle="Bullion Bank"
          backText="A financial institution that trades, stores, lends, and manages gold transactions in the global market."
        />

      </div>

      </div>
      </div>
    )
}