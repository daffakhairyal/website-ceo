"use client";
import { useParams } from "next/navigation";
import React from "react";
import { Calendar, Tag } from "lucide-react";
import { updates } from "../data";

export default function NewsPage() {
  const params = useParams();
  const { id } = params;

  const newsItem = updates.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Berita Tidak Ditemukan</h2>
          <p className="text-gray-400">Berita dengan ID {id} tidak ada.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full pt-5 pb-24">
      <div className="w-full mx-auto pt-24 px-6 items-center">
        <div className="max-w-4xl mx-auto">
          {/* Judul */}
          <h1 className="text-5xl font-extrabold mb-6">{newsItem.title}</h1>

          {/* Info */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-gray-400">
              <Tag className="w-5 h-5" />
              <span>{newsItem.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>{newsItem.date}</span>
            </div>
          </div>

          {/* Gambar */}
          {newsItem.img && (
            <img
              src={newsItem.img}
              alt={newsItem.title}
              className="w-full h-auto rounded-lg mb-8"
            />
          )}

          {/* Konten */}
<div
  className="prose prose-invert max-w-full text-lg"
  dangerouslySetInnerHTML={{ __html: newsItem.description }}
></div>

          {/* Tombol Kembali */}
          <div className="mt-12">
            <a
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition"
            >
              Kembali ke Berita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
