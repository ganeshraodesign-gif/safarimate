"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Shield, AlertCircle, Zap } from "lucide-react";

const emergencyContacts = [
  { label: "24/7 Helpline", value: "+91 98765 43210", icon: Phone },
  { label: "Email", value: "emergency@safarmate.com", icon: Mail },
];

const localEmergencyNumbers = [
  { label: "Police", number: "100", color: "#1E3A8A" },
  { label: "Ambulance", number: "102", color: "#C62828" },
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

export default function EmergencySupport() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNjI4MjgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJIM3YtMnYzNHYyaDMyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C62828]/10 border border-[#C62828]/20 mb-6">
            <Shield className="w-4 h-4 text-[#C62828]" />
            <span className="font-['Inter'] text-sm font-medium text-[#C62828]">Emergency Support</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-4">
            We&apos;re Here For You
          </h2>
          <p className="font-['Inter'] text-lg text-text/60 max-w-2xl mx-auto">
            Your safety is our top priority. Day or night, we&apos;re just a call away.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-6 flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C62828]" />
              SafarMate Support
            </h3>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#C62828]/10 flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-[#C62828]" />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-xs text-text/50">{contact.label}</p>
                    <p className="font-['Inter'] text-sm font-semibold text-text">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg"
          >
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-6 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#C62828]" />
              India Emergency Numbers
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {localEmergencyNumbers.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Phone className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-xs text-text/50">{item.label}</p>
                    <p className="font-['Inter'] text-lg font-bold" style={{ color: item.color }}>{item.number}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-['Inter'] text-xs text-text/40 mt-4">
              Save these numbers for quick access during your travels
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#C62828] to-[#8E0000] rounded-3xl p-8 md:p-10 text-white max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-2">
                SOS Button (Dashboard)
              </h3>
              <p className="font-['Inter'] text-white/80 max-w-md">
                One-tap access to emergency services and immediate guide contact on your traveler dashboard.
              </p>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/20 rounded-2xl">
              <Zap className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold">Coming Soon</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-['Inter'] text-center text-text/50 mt-8 max-w-xl mx-auto"
        >
          Rest easy knowing our dedicated team monitors your journey and is ready to assist whenever needed.
        </motion.p>
      </div>
    </section>
  );
}