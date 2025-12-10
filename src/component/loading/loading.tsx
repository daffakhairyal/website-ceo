"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="w-full flex justify-center py-10 bg-black">
      <motion.div
        className="w-10 h-10 border-4 border-slate-50 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "linear",
        }}
      />
    </div>
  );
}
