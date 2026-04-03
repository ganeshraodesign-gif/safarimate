"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const places = [
  {
    name: "Sabarmati Ashram",
    image: "https://images.unsplash.com/photo-1626128028318-350e9a2e7075?w=400&q=80",
  },
  {
    name: "Adalaj Stepwell",
    image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80",
  },
  {
    name: "Jama Masjid",
    image: "https://images.unsplash.com/photo-1565183928294-7063f23ce836?w=400&q=80",
  },
  {
    name: "Manek Chowk",
    image: "https://images.unsplash.com/photo-1605218427306-635ba2439dd0?w=400&q=80",
  },
  {
    name: "Gujarat Science City",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const features = [
  {
    title: "FREE Guided Tours",
    description:
      "Complimentary guided tours with verified local experts - discover Ahmedabad's hidden gems without any cost!",
    icon: "🎁",
  },
  {
    title: "Gandhi's Legacy",
    description:
      "Walk in Mahatma Gandhi's footsteps at Sabarmati Ashram, the epicenter of India's independence movement.",
    icon: "🕊️",
  },
  {
    title: "Architectural Stepwells",
    description:
      "Marvel at the stunning Adalaj Stepwell - a 500-year-old architectural wonder with intricate carvings.",
    icon: "🏛️",
  },
  {
    title: "Rich Textiles",
    description:
      "Explore the famous Manek Chowk markets for handwoven textiles, Bandhani, and traditional Garba costumes.",
    icon: "🧵",
  },
  {
    title: "Gujarati Cuisine",
    description:
      "Savor authentic Gujarati thali, dhokla, thepla, and famous street food at Manek Chowk night market.",
    icon: "🍛",
  },
];

const pricingOptions = [
  {
    title: "Guide",
    price: "FREE",
    period: "",
    description: "Local expert for tours and navigation",
    highlighted: true,
  },
  {
    title: "Companion",
    price: "$5",
    period: "/day",
    description: "Full-time travel companion for your journey",
    highlighted: false,
  },
  {
    title: "Support",
    price: "FREE",
    period: "",
    description: "Remote assistance and trip coordination",
    highlighted: true,
  },
];

export default function AhmedabadPage() {
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
                "url('https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=1920&q=80')",
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
            <motion.div
              className="inline-block bg-[#E38B29] text-white px-4 py-1 rounded-full font-semibold text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              FREE
            </motion.div>

            <motion.h1
              className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Visit Ahmedabad -{" "}
              <span className="text-[#E38B29]">Heritage & History</span>
            </motion.h1>

            <motion.p
              className="font-['Inter'] text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              FREE guided tours available - Discover the city's rich heritage
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/request"
                className="font-['Inter'] px-8 py-4 bg-[#E38B29] text-white rounded-xl font-semibold text-lg hover:bg-[#E38B29]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Your Free Tour
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
            Top Places in Ahmedabad
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
            Why Ahmedabad?
          </motion.h2>
          <p className="font-['Inter'] text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Experience the perfect blend of history, culture, and hospitality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-gray-900 mb-2">
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
                6 Verified Guides Available
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Ready to Explore Ahmedabad?
            </h2>
            <p className="font-['Inter'] text-gray-600 mb-8">
              Connect with local experts who know Ahmedabad like their own
              backyard
            </p>

            <Link
              href="/guides?city=ahmedabad"
              className="font-['Inter'] inline-block px-8 py-4 bg-[#E38B29] text-white rounded-xl font-semibold text-lg hover:bg-[#E38B29]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View All Ahmedabad Guides
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
            Ahmedabad Guide Pricing
          </motion.h2>
          <p className="font-['Inter'] text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose the perfect companion for your Ahmedabad adventure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className={`bg-white p-8 rounded-xl ${
                  option.highlighted
                    ? "ring-2 ring-[#E38B29] shadow-xl bg-gradient-to-b from-[#E38B29]/5 to-white"
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
                  <span
                    className={`font-['Playfair_Display'] text-4xl font-semibold ${
                      option.highlighted ? "text-[#E38B29]" : "text-gray-900"
                    }`}
                  >
                    {option.price}
                  </span>
                  <span className="font-['Inter'] text-gray-500">
                    {option.period}
                  </span>
                </div>
                <p className="font-['Inter'] text-gray-600 text-sm">
                  {option.description}
                </p>
                {option.highlighted && (
                  <div className="mt-4 inline-block bg-[#E38B29] text-white text-xs px-3 py-1 rounded-full font-semibold">
                    BEST VALUE
                  </div>
                )}
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

      <section className="py-20 bg-gradient-to-r from-[#E38B29] to-[#c47824]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-white mb-4">
              Book Free Ahmedabad Tour
            </h2>
            <p className="font-['Inter'] text-white/80 mb-8 max-w-xl mx-auto">
              Experience the best of Ahmedabad with our FREE guided tours - the
              perfect way to discover this incredible city
            </p>

            <Link
              href="/request"
              className="font-['Inter'] inline-block px-10 py-5 bg-white text-[#E38B29] rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Free Ahmedabad Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}