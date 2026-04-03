"use client";

import { motion } from "framer-motion";
import { Shield, BadgeCheck, GraduationCap, Mail, Phone, Star, Users, Heart } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "ID Verified", description: "Government ID validated" },
  { icon: Shield, label: "Police Verified", description: "Background check cleared" },
  { icon: GraduationCap, label: "Education Verified", description: "Qualifications confirmed" },
  { icon: Mail, label: "Email Verified", description: "Active email confirmed" },
  { icon: Phone, label: "Phone Verified", description: "Number authenticated" },
  { icon: Star, label: "Top Rated", description: "4.8+ average rating" },
  { icon: Users, label: "Trusted Guide", description: "Verified local expert" },
  { icon: Heart, label: "Female Friendly", description: "Safe for solo travelers" },
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

export default function TrustSafety() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJIM3YtMnYzNHYyaDMyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-['Inter'] text-sm font-medium text-primary">Trust & Safety</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-4">
            Your Safety, Our Priority
          </h2>
          <p className="font-['Inter'] text-lg text-text/60 max-w-2xl mx-auto">
            Every guide on SafarMate undergoes rigorous verification. We partner with local authorities to ensure your peace of mind.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-['Playfair_Display'] text-base font-semibold text-text mb-1">
                  {badge.label}
                </h3>
                <p className="font-['Inter'] text-xs text-text/50">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-text mb-4">
                Our Verification Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-['Inter'] text-xs font-bold text-primary">1</span>
                  </div>
                  <p className="font-['Inter'] text-sm text-text/70">
                    <span className="font-semibold">ID Verification</span> — Government-issued ID checked against official databases
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-['Inter'] text-xs font-bold text-primary">2</span>
                  </div>
                  <p className="font-['Inter'] text-sm text-text/70">
                    <span className="font-semibold">Background Check</span> — Police verification through local authorities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-['Inter'] text-xs font-bold text-primary">3</span>
                  </div>
                  <p className="font-['Inter'] text-sm text-text/70">
                    <span className="font-semibold">Ongoing Monitoring</span> — Reviews and ratings continuously monitored
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
                  <Shield className="w-16 h-16 mb-4 opacity-90" />
                  <h4 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                    100% Verified Guides
                  </h4>
                  <p className="font-['Inter'] text-sm opacity-90">
                    Every guide passes our 7-step verification process before joining SafarMate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
