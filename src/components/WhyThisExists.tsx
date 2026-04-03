"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    title: "Feeling unsafe in unfamiliar places",
    description: "Walking through unknown streets, unsure if you're going the right way or if it's safe.",
  },
  {
    title: "Harassment and unwanted attention",
    description: "The constant vigilance needed when you look different, speak differently, or travel alone.",
  },
  {
    title: "Confusion about local customs and norms",
    description: "Not knowing when to remove your shoes, how to greet someone, or what might accidentally offend.",
  },
  {
    title: "Missing out on authentic experiences",
    description: "Sticking to tourist zones because you don't know where—or how—to explore the real India.",
  },
];

export default function WhyThisExists() {
  return (
    <section className="py-24 bg-[#F5F2ED] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] to-[#F5F2ED]" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-6">
            Travelers Deserve Better
          </h2>
          <p className="font-['Inter'] text-lg text-text/70 max-w-2xl mx-auto leading-relaxed">
            We know travel should feel like coming home to a place you've never been. 
            Instead, too many people leave India with memories of anxiety instead of wonder.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80"
              alt="Crowded Indian street - traveling alone"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <p className="font-['Playfair_Display'] text-xl font-semibold text-white mb-1">
                Traveling Alone
              </p>
              <p className="font-['Inter'] text-sm text-white/80">
                Confusing streets, constant vigilance, missing the real experience
              </p>
            </div>
            <div className="absolute top-4 left-4 z-20 bg-red-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              The Problem
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80"
              alt="Happy travelers with guide - the solution"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <p className="font-['Playfair_Display'] text-xl font-semibold text-white mb-1">
                With a Trusted Guide
              </p>
              <p className="font-['Inter'] text-sm text-white/80">
                Safe, relaxed, discovering authentic India with confidence
              </p>
            </div>
            <div className="absolute top-4 right-4 z-20 bg-green-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              The Solution
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#E38B29]/10 hover:border-[#E38B29]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-2">
                    {point.title}
                  </h3>
                  <p className="font-['Inter'] text-base text-text/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-['Playfair_Display'] text-xl md:text-2xl text-text italic">
            SafarMate exists so you can finally just{" "}
            <span className="text-primary">be a traveler</span>, not a target.
          </p>
        </motion.div>
      </div>
    </section>
  );
}