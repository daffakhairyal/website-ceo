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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"



export default function Section3(){
    const data = [
  { island: "Papua", reserve: 1869 },
  { island: "Sulawesi", reserve: 557 },
  { island: "Nusa Tenggara", reserve: 507 },
  { island: "Java", reserve: 397 },
  { island: "Sumatra", reserve: 169 },
  { island: "Borneo", reserve: 41 },
  { island: "Maluku", reserve: 7 },
]
    return(
        <section className="">
                <section className="relative w-full h-screen flex items-center overflow-hidden">
                    {/* Background */}
                    <Image
                      src="/images/mine.jpg"
                      alt="Hero Background"
                      fill
                      priority
                      className="object-cover"
                    />
            
                    {/* Overlay gradasi gelap dari kiri */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
            
                    {/* Aksen gradasi bawah */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
            {/* Konten utama */}
        <div className="relative z-10 flex flex-col pt-30 h-full px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            className="text-left max-w-xl"
          >
            <h1 className="text-3xl md:text-3xl font-bold text-yellow-500 leading-tight mb-6">
              7 ISLANDS WITH THE LARGEST GOLD ORE RESERVES IN INDONESIA
            </h1>

            <div className="flex gap-4">
            </div>
          </motion.div>
                 {/* Grafik */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
          className="w-3/4 md:w-full h-[400px]"
        >
          <ResponsiveContainer width="130%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="island" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                cursor={{ fill: "rgba(253, 224, 71, 0.2)" }}
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "0.5rem",
                  border: "1px solid #fcd34d",
                }}
              />
              <Bar dataKey="reserve" fill="#facc15" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
            
        </div>
                  </section>
        </section>
    )
}