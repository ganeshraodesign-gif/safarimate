"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Request",
    description: "Submit your trip details and preferences. Tell us where you want to go and what experiences you're seeking.",
  },
  {
    number: "02",
    title: "Match",
    description: "We connect you with a verified local guide who shares your interests and understands your travel style.",
  },
  {
    number: "03",
    title: "Travel Safely",
    description: "Experience India with confidence. Your guide ensures authentic experiences while keeping you safe.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-4">
            How It Works
          </h2>
          <p className="font-['Inter'] text-lg text-text/60 max-w-xl mx-auto">
            Three simple steps to your perfect travel experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#E38B29]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#E38B29]/10 flex items-center justify-center border border-[#E38B29]/20 group-hover:bg-[#E38B29]/20 group-hover:border-[#E38B29]/40 transition-all duration-300">
                    <span className="font-['Playfair_Display'] text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full -translate-y-1/2 w-8 h-px bg-[#E38B29]/30" />
                  )}
                </div>

                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-3">
                  {step.title}
                </h3>
                <p className="font-['Inter'] text-base text-text/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
