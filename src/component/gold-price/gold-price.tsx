"use client";

import React, { useEffect, useState } from "react";
import { RefreshCw, Copy } from "lucide-react";
import { motion } from "framer-motion";
import SliderImages from "../slider-images/slider-images";

// ===================================================================
// Gold Price Component (REAL API VERSION)
// Data: GoldAPI (XAU/USD) + ExchangeRate.host (USD → IDR)
// ===================================================================

export default function GoldPrice() {
  const [price, setPrice] = useState(0);          // IDR / gram (real)
  const [change, setChange] = useState(0);        // percent change
  const [history, setHistory] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  // =====================================================
  // FETCH REAL PRICE
  // =====================================================
  async function fetchGoldPrice() {
    try {
      setLoading(true);

      // Fetch gold price (XAU/USD)
      const goldRes = await fetch("https://www.goldapi.io/api/XAU/USD", {
        headers: {
          "x-access-token": "goldapi-3hul019mizb9hmc-io",
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const gold = await goldRes.json();

      // Harga per gram 24k dalam USD
      const usdPerGram = gold.price_gram_24k;

      // Fetch kurs USD → IDR
      const fxRes = await fetch(
        "https://api.exchangerate.host/latest?base=USD&symbols=IDR"
      );
      const fx = await fxRes.json();
      const rate = fx?.rates?.IDR ?? 16000; // fallback

      // Konversi ke IDR
      const idrPrice = Math.round(usdPerGram * rate);

      // Hitung perubahan persen
      const last = history.length ? history[history.length - 1] : idrPrice;
      const pct = ((idrPrice - last) / last) * 100;

      // Update state
      const newHistory = history.slice(-8).concat(idrPrice).slice(-8);

      setPrice(idrPrice);
      setChange(parseFloat(pct.toFixed(2)));
      setHistory(newHistory);
    } catch (err) {
      console.error("Gagal fetch harga emas:", err);
    } finally {
      setLoading(false);
    }
  }

  // =====================================================
  // Auto refresh 12 detik
  // =====================================================
  useEffect(() => {
    fetchGoldPrice(); // initial
    const id = setInterval(fetchGoldPrice, 12000);
    return () => clearInterval(id);
  }, []);

  // Format IDR
  function formatIDR(n: number) {
    return n.toLocaleString("id-ID");
  }

  // Copy
  function handleCopy() {
    navigator.clipboard
      ?.writeText(`Rp ${formatIDR(price)} / gram`)
      .catch(() => {});
  }

  // Sparkline SVG path
  function sparklinePath(values: number[] = []) {
    if (!values.length) return "";
    const w = 200;
    const h = 40;
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;
    const step = w / Math.max(1, values.length - 1);

    return values
      .map((v, i) => {
        const x = Math.round(i * step);
        const y = Math.round(h - ((v - min) / range) * h);
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ");
  }

  const trendUp = change >= 0;

  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-stretch py-10 md:px-30 md:space-x-12 space-y-8 md:space-y-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className="relative overflow-hidden rounded-2xl border border-yellow-600/20 bg-gradient-to-br from-black via-[#070707] to-[#0b0b0b] p-6 shadow-2xl">
          <div
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-30 mix-blend-screen"
            style={{
              background:
                "radial-gradient(600px 200px at 10% 10%, rgba(255,215,0,0.08), transparent 20%), radial-gradient(400px 120px at 90% 80%, rgba(255,215,0,0.04), transparent 20%)",
            }}
          />

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-sm uppercase tracking-widest text-yellow-400/90">
                Harga Emas
              </h1>

              <div className="mt-2 flex items-baseline gap-3">
                <div
                  className="text-4xl font-extrabold leading-none bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,#ffd66b,#ffd700,#f7c948)",
                  }}
                >
                  Rp {formatIDR(price)}
                </div>

                {/* <div
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    trendUp
                      ? "bg-emerald-900/40 text-emerald-300"
                      : "bg-red-900/40 text-red-300"
                  }`}
                >
                  {trendUp ? "▲" : "▼"} {Math.abs(change)}%
                </div> */}
              </div>

              <p className="mt-2 text-xs text-gray-300/60">
                Per gram
              </p>

              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={fetchGoldPrice}
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-md bg-yellow-600/10 px-3 py-2 text-sm font-semibold text-yellow-300 hover:bg-yellow-600/15 transition"
                >
                  <RefreshCw
                    className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                  />
                  Refresh
                </button>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-md bg-white/3 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/6 transition"
                >
                  <Copy className="h-4 w-4" />
                  Salin harga
                </button>

<div className="ml-3 rounded-md bg-white/3 px-2 py-1 text-xs text-gray-200">
  Terakhir: {
    new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date())
  }
</div>

              </div>
            </div>

            {/* Sparkline */}
            {/* <div className="hidden sm:flex flex-col items-end gap-3">
              <div className="rounded-lg bg-gradient-to-tr from-black/50 to-yellow-900/10 px-3 py-2 text-xs text-gray-300">
                Spot (24K)
              </div>

              <div className="rounded-xl bg-gradient-to-br from-black/60 to-black/30 p-3 shadow-inner">
                <svg
                  width="200"
                  height="40"
                  viewBox="0 0 200 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={sparklinePath(history)}
                    stroke="#FFD700"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div> */}
          </div>

          {/* footer */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* <div className="text-xs text-gray-400">
              Sumber: GoldAPI.io • Kurs: Exchangerate.host
            </div> */}
            <div className="text-xs text-gray-400">
              Unit: gram • Mata uang: IDR
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl">
        <SliderImages />
      </div>
    </div>
  );
}
