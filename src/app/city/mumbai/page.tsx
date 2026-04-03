"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const places = [
  {
    name: "Gateway of India",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80",
  },
  {
    name: "Marine Drive",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400&q=80",
  },
  {
    name: "Colaba Causeway",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80",
  },
  {
    name: "Elephanta Caves",
    image: "https://images.unsplash.com/photo-1605433246452-84d7c3d3e60c?w=400&q=80",
  },
  {
    name: "Juhu Beach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const features = [
  {
    title: "Bollywood & Cinema",
    description:
      "Dive into the world's largest film industry. Visit film studios, catch a movie premiere, or spot your favorite stars.",
    icon: "🎬",
  },
  {
    title: "Street Food",
    description:
      "From the iconic vada pav to lip-smacking pav bhaji, Mumbai's street food scene is a culinary adventure.",
    icon: "🍳",
  },
  {
    title: "Beaches",
    description:
      "Relax at popular beaches like Juhu and Chowpatty, or explore the vibrant beach culture of the city.",
    icon: "🏖️",
  },
  {
    title: "Shopping",
    description:
      "From high-end malls to bustling street markets like Colaba Causeway, find treasures for every budget.",
    icon: "🛍️",
  },
];

const pricingOptions = [
  {
    title: "Guide",
    price: "$12",
    period: "/day",
    description: "Local expert for tours and navigation",
  },
  {
    title: "Companion",
    price: "$18",
    period: "/day",
    description: "Full-time travel companion for your journey",
  },
  {
    title: "Support",
    price: "$10",
    period: "/day",
    description: "Remote assistance and trip coordination",
  },
];

export default function MumbaiPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main className="min-h-screen">
      <section ref={ref} className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, scale }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&q=80')",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>

        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#E38B29]/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#E38B29]/5 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center h-full flex items-center justify-center">
          <div>
            <motion.h1
              className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience Mumbai -{" "}
              <span className="text-[#E38B29]">The City of Dreams</span>
            </motion.h1>

            <motion.p
              className="font-['Inter'] text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From Bollywood glitz to colonial charm, discover it all
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/guides?city=mumbai"
                className="font-['Inter'] px-8 py-4 bg-[#E38B29] text-white rounded-xl font-semibold text-lg hover:bg-[#E38B29]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Find Your Mumbai Guide
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Top Places in Mumbai
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {places.map((place, index) => (
              <motion.div
                key={place.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square mb-3">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-['Inter'] text-sm md:text-base font-semibold text-gray-900 text-center">
                  {place.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Mumbai?
          </motion.h2>
          <p className="font-['Inter'] text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover what makes Mumbai a must-visit destination for travelers from
            around the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#E38B29]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#E38B29] rounded-full animate-pulse" />
              <span className="font-['Inter'] text-[#E38B29] font-medium">
                8 Verified Guides Available
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Ready to Explore Mumbai?
            </h2>
            <p className="font-['Inter'] text-gray-600 mb-8">
              Connect with local experts who know Mumbai like their own backyard
            </p>

            <Link
              href="/guides?city=mumbai"
              className="font-['Inter'] inline-block px-8 py-4 bg-[#E38B29] text-white rounded-xl font-semibold text-lg hover:bg-[#E38B29]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View All Mumbai Guides
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mumbai Guide Pricing
          </motion.h2>
          <p className="font-['Inter'] text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose the perfect companion for your Mumbai adventure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className={`bg-white p-8 rounded-xl ${
                  index === 1
                    ? "ring-2 ring-[#E38B29] shadow-xl"
                    : "shadow-sm hover:shadow-md"
                } transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-['Playfair_Display'] text-4xl font-semibold text-[#E38B29]">
                    {option.price}
                  </span>
                  <span className="font-['Inter'] text-gray-500">
                    {option.period}
                  </span>
                </div>
                <p className="font-['Inter'] text-gray-600 text-sm">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="font-['Inter'] text-[#E38B29] font-medium hover:underline"
            >
              View Full Pricing Details →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#E38B29] to-[#d4781f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-white mb-4">
              Plan Your Mumbai Trip
            </h2>
            <p className="font-['Inter'] text-white/80 mb-8 max-w-xl mx-auto">
              Let us help you create the perfect Mumbai experience with our expert
              local guides
            </p>

            <Link
              href="/request"
              className="font-['Inter'] inline-block px-10 py-5 bg-white text-[#E38B29] rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Plan Your Mumbai Trip
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
