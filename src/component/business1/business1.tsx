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
      axios.get('https://centraenergioptima.com/api/businesses')
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
PT Centra Energy Optima adalah perusahaan yang bergerak di industri emas dengan operasi terintegrasi yang mencakup kegiatan pertambangan, 
pencetakan (minting), pemurnian (refining), perdagangan, dan bullion banking. Dalam kegiatan pertambangannya, perusahaan berfokus 
pada ekstraksi sumber daya emas secara bertanggung jawab untuk memastikan keberlanjutan produksi. Melalui operasi pencetakan dan 
pemurnian, PT Centra Energy Optima mengolah dan memurnikan emas sesuai standar internasional, menghasilkan produk emas batangan 
dan koin berkualitas tinggi. Pada divisi perdagangan, perusahaan berpartisipasi aktif di pasar emas domestik dan internasional 
dengan menjunjung tinggi transparansi dan integritas dalam setiap transaksi. Selain itu, melalui layanan bullion banking,
 PT Centra Energy Optima menyediakan solusi penyimpanan emas, pembiayaan, dan likuiditas, sehingga memperkuat posisinya sebagai 
 pelaku industri emas yang terpercaya dan komprehensif.
        </div>   
<br />
<br />
            <div className="flex flex-col md:flex-row space-x-4 w-full  space-y-4 md:space-y-0">
          {data.length > 0 ? (
            data.map((item, index) => (
              <FlipCard
                key={index}
                frontImage={
      item.img 
        ? `https://centraenergioptima.com/storage/${item.img}` 
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
