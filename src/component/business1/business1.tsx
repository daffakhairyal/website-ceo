"use client";
import { motion } from "framer-motion";
import FlipCard from "../cards/flipcard";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios";
import { useEffect, useState } from "react";

type Business = {
  img: string;
  title: string;
  description: string;
};
// const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;


export default function Business1(){
  const [data, setData] = useState<Business[]>([]);
  useEffect(()=>{
    try {
      axios.get('https://centraenergioptima.com/api/businesses', {
  withCredentials: true
})
      .then(response => {
        console.log(response.data)
        setData(response.data);
      })
    } catch (error) {
      console.log(error)
    }
  },[]);

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
            <div className="flex flex-col md:flex-row space-x-4 w-100">
          {data.length > 0 ? (
            data.map((item, index) => (
              <FlipCard
                key={index}
                frontImage={
      item.img 
        ? `http://nginx-server:8000/storage/${item.img}` 
        : "/images/default.jpg"
    }
                frontTitle={item.title}
                backText={item.description}
              />
            ))
          ) : (
            <div>Data Not Found</div>
          )}

      </div>

      </div>
      </div>
    )
}