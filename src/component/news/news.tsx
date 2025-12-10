"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { updates } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

interface News {
  id: number;
  title: string;
  img: string;
  category: string;
  date: string;
}

export default function NewsComponent() {
  const router = useRouter();
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  // --- Pagination Logic ---
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(()=>{
    const fetchNews = async ()=>{
      try {
        const response = await axios.get("https://centraenergioptima.com/api/posts")
        setNewsData(response.data);
        console.log(response.data)
      } catch (err) {
        setError("Gagal memuat data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();

  }, [])

    const handleReadMore = (id: number) => {
    router.push(`/news/${id}`);
  };

  return (
    <div className="w-full mx-auto px-6 pt-24 pb-24">
      <h2 className="text-3xl font-bold mb-8 pt-6 text-center">Latest News</h2>

      {/* Grid Berita */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Gambar */}
            <div className="relative h-48 w-full">
              <img
                src={`https://centraenergioptima.com/storage/${news.img}`}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {news.category}
                </span>
                <span className="text-gray-400 text-xs">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{news.title}</h3>
              <button
                onClick={() => handleReadMore(news.id)}
                className="hover:cursor-pointer mt-4 bg-yellow-500 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-12 space-x-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-2 rounded-full transition-colors ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-gray-600 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full transition-colors ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
