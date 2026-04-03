"use client";

import { motion } from "framer-motion";

const cityImages: Record<string, string> = {
  Delhi: "https://images.unsplash.com/photo-1568721028339-aeb2a1d7079d?w=100&q=80",
  Mumbai: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=100&q=80",
  Jaipur: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=100&q=80",
  Varanasi: "https://images.unsplash.com/photo-1586179935424-5c27c4e87f5e?w=100&q=80",
  Ahmedabad: "https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=100&q=80",
  Goa: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=100&q=80",
  Agra: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=100&q=80",
  Bangalore: "https://images.unsplash.com/photo-1555658636-6e4a36218a93?w=100&q=80",
};

const pricingData = [
  { city: "Delhi", guide: "$10", companion: "$15", support: "$8" },
  { city: "Mumbai", guide: "$12", companion: "$18", support: "$10" },
  { city: "Jaipur", guide: "$9", companion: "$14", support: "$7" },
  { city: "Varanasi", guide: "$8", companion: "$12", support: "$6" },
  { city: "Ahmedabad", guide: "FREE", companion: "$5", support: "FREE", highlight: true },
  { city: "Goa", guide: "$11", companion: "$16", support: "$9" },
  { city: "Agra", guide: "$9", companion: "$14", support: "$7" },
  { city: "Bangalore", guide: "$10", companion: "$15", support: "$8" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PricingSection() {
  return (
    <section className="py-24 bg-[#FDF8F3] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-['Inter'] text-lg text-text/60 max-w-xl mx-auto">
            Choose the service that fits your travel needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b-2 border-[#E38B29]/30">
                <th className="font-['Playfair_Display'] text-lg font-semibold text-text py-4 px-6 text-left">
                  City
                </th>
                <th className="font-['Playfair_Display'] text-lg font-semibold text-text py-4 px-6 text-center">
                  Guide
                </th>
                <th className="font-['Playfair_Display'] text-lg font-semibold text-text py-4 px-6 text-center">
                  Companion
                </th>
                <th className="font-['Playfair_Display'] text-lg font-semibold text-text py-4 px-6 text-center">
                  Support
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, index) => (
                <motion.tr
                  key={row.city}
                  variants={itemVariants}
                  className={`border-b border-[#E38B29]/10 ${
                    row.highlight
                      ? "bg-[#E38B29]/10"
                      : index % 2 === 0
                      ? "bg-white"
                      : "bg-[#FDF8F3]"
                  } ${row.highlight ? "border-l-4 border-r-4 border-[#E38B29]" : ""}`}
                >
                  <td className={`font-['Inter'] text-base text-text py-4 px-6 ${row.highlight ? "font-semibold" : ""}`}>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-[#E38B29] transition-all duration-200"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={cityImages[row.city]}
                          alt={row.city}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <span>{row.city}</span>
                      {row.highlight && (
                        <span className="ml-2 inline-block px-2 py-0.5 text-xs font-semibold bg-[#E38B29] text-white rounded-full">
                          SPECIAL
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="font-['Inter'] text-base text-text py-4 px-6 text-center">
                    <span className={row.highlight ? "font-semibold text-[#E38B29]" : ""}>
                      {row.guide}
                    </span>
                  </td>
                  <td className="font-['Inter'] text-base text-text py-4 px-6 text-center">
                    <span className={row.highlight ? "font-semibold text-[#E38B29]" : ""}>
                      {row.companion}
                    </span>
                  </td>
                  <td className="font-['Inter'] text-base text-text py-4 px-6 text-center">
                    <span className={row.highlight ? "font-semibold text-[#E38B29]" : ""}>
                      {row.support}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-['Inter'] text-base text-text/60 text-center mt-8"
        >
          70% goes to your guide, 30% supports the platform
        </motion.p>
      </div>
    </section>
  );
}
