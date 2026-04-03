"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Guide {
  id: number;
  name: string;
  city: string;
  languages: string[];
  badges: string[];
  rating: number;
  reviewCount: number;
  tagline: string;
  avatarUrl: string;
}

const guides: Guide[] = [
  {
    id: 1,
    name: "Arjun Sharma",
    city: "Jaipur",
    languages: ["English", "Hindi", "Rajasthani"],
    badges: ["ID Verified", "Top Rated"],
    rating: 4.9,
    reviewCount: 127,
    tagline: "Let me show you the royal heritage of Jaipur like a local",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 2,
    name: "Priya Menon",
    city: "Goa",
    languages: ["English", "Hindi", "Konkani", "Portuguese"],
    badges: ["ID Verified", "Superhost"],
    rating: 4.8,
    reviewCount: 89,
    tagline: "Discover hidden beaches and authentic Goan cuisine with me",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: 3,
    name: "Vikram Singh",
    city: "Varanasi",
    languages: ["English", "Hindi", "Bhojpuri"],
    badges: ["ID Verified", "Cultural Expert"],
    rating: 4.9,
    reviewCount: 203,
    tagline: "Experience the spiritual soul of India's oldest city",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    id: 4,
    name: "Ananya Das",
    city: "Kolkata",
    languages: ["English", "Hindi", "Bengali"],
    badges: ["ID Verified", "Foodie Guide"],
    rating: 4.7,
    reviewCount: 64,
    tagline: "From street food to heritage walks — I'll be your local friend",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "text-[#E38B29] fill-current"
              : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function MeetOurGuides() {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-text mb-4">
            Meet Our Guides
          </h2>
          <p className="font-['Inter'] text-lg text-text/60 max-w-xl mx-auto">
            Real people, verified backgrounds, here to help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 shadow-lg border-2 border-white ring-2 ring-gray-100">
                  <img
                    src={guide.avatarUrl}
                    alt={guide.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text">
                  {guide.name}
                </h3>
                <p className="font-['Inter'] text-sm text-text/60">{guide.city}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {guide.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#E38B29]/10 text-primary"
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mb-3">
                <StarRating rating={guide.rating} />
                <span className="font-['Inter'] text-sm text-text/70">
                  {guide.rating} ({guide.reviewCount})
                </span>
              </div>

              <p className="font-['Inter'] text-sm text-text/70 italic mb-3">
                &quot;{guide.tagline}&quot;
              </p>

              <div className="pt-3 border-t border-gray-100">
                <p className="font-['Inter'] text-xs text-text/50">
                  <span className="font-medium text-text/70">Speaks:</span>{" "}
                  {guide.languages.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/guides"
            className="inline-flex items-center font-['Inter'] text-primary font-semibold hover:underline underline-offset-4 transition-all duration-300"
          >
            View All Guides
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}