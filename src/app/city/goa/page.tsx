"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const places = [
  {
    name: "Benaulim Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  },
  {
    name: "Basilica of Bom Jesus",
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400&q=80",
  },
  {
    name: "Fort Aguada",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80",
  },
  {
    name: "Dudhsagar Falls",
    image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=400&q=80",
  },
  {
    name: "Palolem Beach",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80",
  },
];

const features = [
  {
    title: "Beautiful Beaches",
    description:
      "Explore pristine sandy shores along Goa's 100km coastline, from popular beaches to hidden coves.",
    icon: "🏖️",
  },
  {
    title: "Portuguese Heritage",
    description:
      "Discover colonial churches, charming villages, and centuries-old architecture blending Indian and European cultures.",
    icon: "🏛️",
  },
  {
    title: "Water Sports",
    description:
      "From parasailing to jet skiing, dive into thrilling adventures across Goan's warm waters.",
    icon: "🏄",
  },
  {
    title: "Vibrant Nightlife",
    description:
      "Experience beach parties, shacks, and nightlife that rivals the world's best party destinations.",
    icon: "🎉",
  },
];

const pricingOptions = [
  {
    title: "Guide",
    price: "$11",
    period: "/day",
    description: "Local expert for tours and navigation",
  },
  {
    title: "Companion",
    price: "$16",
    period: "/day",
    description: "Full-time travel companion for your journey",
  },
  {
    title: "Support",
    price: "$9",
    period: "/day",
    description: "Remote assistance and trip coordination",
  },
];

export default function GoaPage() {
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
                "url('https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1920&q=80')",
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
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0D9488]/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#0D9488]/5 blur-3xl"
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
              Relax in Goa -{" "}
              <span className="text-[#0D9488]">Beach Paradise</span>
            </motion.h1>

            <motion.p
              className="font-['Inter'] text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sun, sand, and Portuguese charm await you
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/guides?city=goa"
                className="font-['Inter'] px-8 py-4 bg-[#0D9488] text-white rounded-xl font-semibold text-lg hover:bg-[#0D9488]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Find Your Goa Guide
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
            Top Places in Goa
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
            Why Goa?
          </motion.h2>
          <p className="font-['Inter'] text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover what makes Goa a must-visit destination for travelers from
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
            <div className="inline-flex items-center gap-2 bg-[#0D9488]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#0D9488] rounded-full animate-pulse" />
              <span className="font-['Inter'] text-[#0D9488] font-medium">
                11 Verified Guides Available
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Ready to Explore Goa?
            </h2>
            <p className="font-['Inter'] text-gray-600 mb-8">
              Connect with local experts who know Goa like their own backyard
            </p>

            <Link
              href="/guides?city=goa"
              className="font-['Inter'] inline-block px-8 py-4 bg-[#0D9488] text-white rounded-xl font-semibold text-lg hover:bg-[#0D9488]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View All Goa Guides
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
            Goa Guide Pricing
          </motion.h2>
          <p className="font-['Inter'] text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose the perfect companion for your Goa adventure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className={`bg-white p-8 rounded-xl ${
                  index === 1
                    ? "ring-2 ring-[#0D9488] shadow-xl"
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
                  <span className="font-['Playfair_Display'] text-4xl font-semibold text-[#0D9488]">
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
              className="font-['Inter'] text-[#0D9488] font-medium hover:underline"
            >
              View Full Pricing Details →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0D9488] to-[#0f766e]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-white mb-4">
              Plan Your Goa Trip
            </h2>
            <p className="font-['Inter'] text-white/80 mb-8 max-w-xl mx-auto">
              Let us help you create the perfect Goa experience with our expert
              local guides
            </p>

            <Link
              href="/request"
              className="font-['Inter'] inline-block px-10 py-5 bg-white text-[#0D9488] rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Plan Your Goa Trip
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}