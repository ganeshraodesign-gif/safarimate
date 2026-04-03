"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const includedItems = [
  { icon: "🚶", text: "Heritage walk" },
  { icon: "🍛", text: "Local food tasting" },
  { icon: "🛕", text: "Temple visits" },
  { icon: "🛒", text: "Market tour" },
];

export default function AhmedabadFreeTour() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=800&q=80"
          alt="Ahmedabad City"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/85 via-[#16213e]/80 to-[#0f3460]/75" />
      </div>
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.03]" />
      
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#E38B29]/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#E38B29]/15 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.div
        className="absolute top-10 left-[10%] w-16 h-16 rounded-full border-2 border-[#E38B29]/20"
        initial={{ opacity: 0, rotate: -30 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-16 right-[15%] w-12 h-12 rounded-full bg-[#E38B29]/15"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-[20%] w-8 h-8 rounded-full border border-[#E38B29]/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-[#E38B29] text-white rounded-full text-sm font-semibold tracking-wide mb-4 shadow-lg">
            SPECIAL OFFER
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Discover Ahmedabad -{" "}
            <span className="text-[#E38B29]">Free!</span>
          </h2>
        </motion.div>

        <motion.div
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-[#E38B29]/30 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-[#E38B29] text-white font-['Inter'] font-bold text-lg rounded-lg shadow-lg animate-pulse">
              FREE
            </span>
            <p className="font-['Inter'] text-xl md:text-2xl text-text font-medium">
              Guided City Tour for Everyone
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl mb-8 group">
            <img
              src="https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=800&q=80"
              alt="Ahmedabad Heritage"
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-['Inter'] font-semibold text-lg">Explore the Heritage City</p>
              <p className="font-['Inter'] text-sm opacity-80">Manek Chowk • Sabarmati Ashram • Pol Streets</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {includedItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-[#FFF8F0] border border-[#E38B29]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl mb-2">{item.icon}</span>
                <span className="font-['Inter'] text-sm md:text-base text-text font-medium text-center">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-['Inter'] text-lg text-[#E38B29] font-semibold mb-6">
              No hidden costs - our gift to you
            </p>
            <Link
              href="/book-free-tour"
              className="inline-block font-['Inter'] px-10 py-5 bg-[#E38B29] text-white rounded-xl font-bold text-lg md:text-xl hover:bg-[#d47b24] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book Your Free Tour
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#E38B29]/40"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
