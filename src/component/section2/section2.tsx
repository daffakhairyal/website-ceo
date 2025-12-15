"use client";
import Image from "next/image"
import { motion } from "framer-motion";
import FlipCard from "../cards/flipcard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight } from "lucide-react"
import Navbar from "@/component/navbar/navbar"
import { useEffect, useState } from "react"
import axios from "axios";

type Business = {
  img: string;
  title: string;
  description: string;
};

export default function Section2() {
     const [titleClicked, setTitleClicked] = useState(true);
  const [productClicked, setProductClicked] = useState(false);
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
    <span className={`relative z-10 block border-none transition-transform duration-300 ${titleClicked ? "translate-y-3  text-3xl" : "translate-y-0 text-md"}`}>Tentang Kami</span>
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
    <span className={`relative z-10 block transition-transform duration-300  ${productClicked ? "translate-y-3 text-3xl" : "translate-y-0 text-md"}`}>Lini Bisnis Kami</span>
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
 PT. CENTRA ENERGI OPTIMA merupakan perusahaan
 yang bergerak di bidang pengelolaan unit bisnis dalam
 bidang pertambangan emas industri.
 Kami memulai operasi kami di bidang pertambangan,
 perdagangan, dan pemurnian emas, dengan fokus
 utama di Indonesia bagian timur, khususnya di Nabire,
 Papua Tengah. Sebagaimana diketahui secara luas,
 Papua memiliki potensi yang signifikan sebagai salah
 satu penghasil emas terbesar di wilayah Indonesia.

    </p>

    <p className="text-gray-50 leading-relaxed text-justify">
 Pada tahun 2023, kami memulai
 pemetaan eksplorasi bekerja sama
 dengan
 perusahaan-perusahaan
 kelas dunia untuk mengoptimalkan
 potensi pertambangan kami.
 Melalui upaya ini, kami bertujuan
 untuk memaksimalkan produksi
 emas dan memberikan kontribusi
 yang berarti bagi pertumbuhan
 ekonomi nasional, khususnya bagi
 Masyarakat Nabire dan daerah
 sekitarnya.

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
        src="/images/gold1.jpg"
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
        src="/images/mine.jpg"
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
      Kenapa Kami?
    </h1>

    <p className="mb-4 text-gray-50 leading-relaxed text-justify">
 PT. CENTRA ENERGI OPTIMA memulai
 aktivitas kemitraannya pada tahun 2019
 sebagai
 inisiatif
 kolaboratif
 dengan
 masyarakat lokal dibeberapa wilayah suku
 asli di Nabire, Papua Tengah.
 Tanah adat di wilayah ini secara tradisional
 dikelola oleh suku-suku, melestarikan
 warisan budaya dan sejarahnya. Meskipun
 menghadapi berbagai tantangan dan
 keterbatasan, kami tetap teguh dalam
 komitmen kami untuk memberdayakan
 masyarakat adat Papua, khususnya Suku
 Auparai, untuk bangkit dan berkembang.
 Seiring waktu, Kesamaan Visi membawa
 kami untuk resmi mendirikan entitas bisnis
 terpadu.
    </p>

    <p className="text-gray-50 leading-relaxed text-justify">
 Semangat yang tak tergoyahkan ini berpuncak pada pendirian resmi PT.
 CENTRA ENERGI OPTIMA, sebuah cerminan dedikasi kami sebagai
 komunitas Suku Auparai dari wilayah paling timur Indonesia untuk
 berkontribusi bagi kemajuan bangsa. Cita-cita utama kami adalah
 mewujudkan visi mulia Suku Auparai, membina pertumbuhan dan
 kesuksesan berkelanjutan yang selaras dengan harapan dan ambisi
 kolektif kita
    </p>
  </motion.div>

<div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
    {/* Kolom Kanan - Judul dan Deskripsi */}
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h1 className="text-3xl font-extrabold text-yellow-500 tracking-tight mb-2">
      Visi
    </h1>

    <p className="mb-4 text-gray-50 leading-relaxed text-justify">
Menciptakan produk emas berkualitas tinggi 
dengan kemurnian hingga 99,99%
    </p>


  </motion.div>
  {/* Kolom Kiri - Gambar */}
      <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="rounded-full p-6 "
  >
    <h1 className="text-3xl font-extrabold text-yellow-500 tracking-tight mb-2">
      Misi
    </h1>

    <p className="mb-4 text-gray-50 leading-relaxed text-justify">
Menjadi perusahaan emas terkemuka yang
 memiliki jaringan bisnis yang luas di tingkat
 nasional serta dikenal sebagai merek ber
reputasi di tingkat internasional.
    </p>
  </motion.div>
  </div>

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
          Lini Bisnis
        </motion.h2>
        <br />
        <br />
       <div className="text-white text-justify">
PT Centra Energy Optima berfokus pada pengembangan ekosistem emas yang terintegrasi melalui lima lini bisnis utama: refining, 
trading, mining, minting, dan bullion bank. Setiap lini saling mendukung untuk menciptakan rantai nilai emas yang berkelanjutan — 
mulai dari proses penambangan dan pemurnian, hingga pencetakan, perdagangan, serta layanan keuangan berbasis emas. Dengan komitmen 
terhadap kualitas, transparansi, dan inovasi, 
PT Centra Energy Optima berupaya menjadi pelaku utama dalam industri emas nasional maupun global.
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
              )}
    </div>
  </div>
</section>
    )
}