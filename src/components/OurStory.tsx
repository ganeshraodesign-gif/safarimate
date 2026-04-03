"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#F5F2ED] to-[#EDE9E0]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de6f2afdc?w=800&q=80"
              alt="Women together, representing connection and community"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-['Inter'] text-white/90 text-sm font-medium">
                Building bridges through shared experiences
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-4">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </motion.div>

            <div className="space-y-6">
              <p className="font-['Inter'] text-lg md:text-xl text-text/80 leading-relaxed">
                We believe travel should be about connection, not just sightseeing. 
                It&apos;s about the moments that change you—the conversation with a local, 
                the hidden temple you never would have found, the feeling of belonging 
                somewhere completely new.
              </p>

              <p className="font-['Inter'] text-lg md:text-xl text-text/80 leading-relaxed">
                Every traveler deserves to feel safe and welcomed. Every local deserves 
                to be treated with dignity. That&apos;s why we built SafarMate—not as a tour 
                platform, but as a bridge between curious souls and the people who call 
                this land home.
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-['Playfair_Display'] text-xl md:text-2xl text-text italic pt-4"
              >
                This is our way of making sure nobody travels alone.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
