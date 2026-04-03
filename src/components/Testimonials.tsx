"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Priya made me feel safe exploring Delhi alone as a solo female traveler. Her knowledge of hidden gems transformed my trip into something I never imagined possible.",
    name: "Sarah Mitchell",
    country: "Australia",
    rating: 5,
    guide: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    quote: "Vikram showed us the real Varanasi — not the tourist version. Standing by the ghats at sunrise with him sharing stories his grandmother told him was magical.",
    name: "James & Emma Chen",
    country: "Canada",
    rating: 5,
    guide: "Vikram Singh",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    quote: "An experience I'll never forget. The Golden Triangle tour exceeded every expectation. Our guide Raj made ancient history come alive with his storytelling.",
    name: "Marco Di Stefano",
    country: "Italy",
    rating: 5,
    guide: "Raj Malhotra",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E38B29]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-4">
            What Travelers Say
          </h2>
          <p className="font-['Inter'] text-lg text-text/60 max-w-xl mx-auto">
            Real stories from travelers who experienced India with SafarMate
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white rounded-2xl p-8 shadow-lg shadow-[#E38B29]/10 border border-[#E38B29]/10 hover:shadow-xl hover:shadow-[#E38B29]/15 transition-all duration-300"
            >
              <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-['Playfair_Display'] leading-none">
                "
              </div>
              
              <div className="relative pt-4">
                <StarRating rating={testimonial.rating} />
                
                <blockquote className="font-['Inter'] text-base text-text/80 italic leading-relaxed mt-4 mb-6">
                  {testimonial.quote}
                </blockquote>
                
                <div className="border-t border-[#E38B29]/10 pt-4 flex items-center gap-4">
                  {testimonial.photo && (
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#E38B29]/20">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="font-['Playfair_Display'] text-lg font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="font-['Inter'] text-sm text-text/60">
                      {testimonial.country}
                    </p>
                    {testimonial.guide && (
                      <p className="font-['Inter'] text-sm text-primary mt-2">
                        Traveled with {testimonial.guide}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
