"use client";

import { useState } from "react";

interface Guide {
  id: number;
  name: string;
  city: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  badges: string[];
  bio: string;
  pricePerDay: number;
  initials: string;
}

const guides: Guide[] = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Delhi",
    languages: ["English", "Hindi", "Punjabi"],
    rating: 4.9,
    reviewCount: 127,
    badges: ["Verified", "Top Rated", "Expert"],
    bio: "History enthusiast with 8 years of experience showing Delhi's hidden gems and heritage sites.",
    pricePerDay: 2500,
    initials: "PS",
  },
  {
    id: 2,
    name: "Raj Kapoor",
    city: "Jaipur",
    languages: ["English", "Hindi", "Rajasthani"],
    rating: 4.8,
    reviewCount: 89,
    badges: ["Verified", "Family Friendly"],
    bio: "Born and raised in the Pink City. I specialize in royal palaces, local markets, and authentic food tours.",
    pricePerDay: 2200,
    initials: "RK",
  },
  {
    id: 3,
    name: "Anita Menon",
    city: "Kochi",
    languages: ["English", "Malayalam", "Tamil"],
    rating: 5.0,
    reviewCount: 64,
    badges: ["Verified", "Heritage Expert", "Eco Guide"],
    bio: "Spice garden specialist and coastal cuisine expert. Let me show you the soul of Kerala.",
    pricePerDay: 2800,
    initials: "AM",
  },
  {
    id: 4,
    name: "Vikram Singh",
    city: "Agra",
    languages: ["English", "Hindi", "Urdu"],
    rating: 4.7,
    reviewCount: 156,
    badges: ["Verified", " Taj Expert"],
    bio: "Certified Taj Mahal historian. I'll take you beyond the monument to discover Agra's lesser-known wonders.",
    pricePerDay: 2000,
    initials: "VS",
  },
  {
    id: 5,
    name: "Meera Patel",
    city: "Mumbai",
    languages: ["English", "Hindi", "Gujarati", "Marathi"],
    rating: 4.9,
    reviewCount: 203,
    badges: ["Verified", "Top Rated", "City Insider"],
    bio: "Film industry insider and street food champion. Experience Mumbai like a local, not a tourist.",
    pricePerDay: 3000,
    initials: "MP",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    city: "Hyderabad",
    languages: ["English", "Telugu", "Urdu"],
    rating: 4.8,
    reviewCount: 78,
    badges: ["Verified", "Food Specialist"],
    bio: "Nizam's cuisine expert and heritage walk specialist. The city of pearls has so much more to offer.",
    pricePerDay: 2400,
    initials: "AR",
  },
  {
    id: 7,
    name: "Sunita Joshi",
    city: "Varanasi",
    languages: ["English", "Hindi", "Bhojpuri"],
    rating: 4.9,
    reviewCount: 112,
    badges: ["Verified", "Spiritual Guide", "Photography"],
    bio: "Born on the ghats of Ganga. I'll help you understand the spiritual heart of India.",
    pricePerDay: 1800,
    initials: "SJ",
  },
  {
    id: 8,
    name: "Karthik Nair",
    city: "Chennai",
    languages: ["English", "Tamil", "Malayalam"],
    rating: 4.7,
    reviewCount: 91,
    badges: ["Verified", "Temple Expert", "Arts & Culture"],
    bio: "Classical dance historian and temple architecture specialist. Discover South India's rich heritage.",
    pricePerDay: 2100,
    initials: "KN",
  },
];

const cities = ["All Cities", "Delhi", "Jaipur", "Kochi", "Agra", "Mumbai", "Hyderabad", "Varanasi", "Chennai"];
const languages = ["All Languages", "English", "Hindi", "Punjabi", "Rajasthani", "Malayalam", "Tamil", "Urdu", "Telugu", "Marathi", "Gujarati"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-warning fill-warning" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg shrink-0">
          {guide.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text text-lg truncate">{guide.name}</h3>
          <p className="text-text-secondary text-sm">{guide.city}</p>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={Math.floor(guide.rating)} />
            <span className="text-sm text-text-secondary">({guide.reviewCount})</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {guide.badges.map((badge) => (
          <span
            key={badge}
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              badge === "Verified"
                ? "bg-success/10 text-success"
                : badge === "Top Rated"
                ? "bg-primary/10 text-primary-dark"
                : "bg-gray-100 text-text-secondary"
            }`}
          >
            {badge}
          </span>
        ))}
      </div>

      <p className="text-text-secondary text-sm mb-4 line-clamp-2">{guide.bio}</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {guide.languages.map((lang) => (
          <span key={lang} className="text-xs bg-gray-50 text-text-secondary px-2 py-0.5 rounded">
            {lang}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <span className="text-lg font-bold text-primary">₹{guide.pricePerDay}</span>
          <span className="text-text-secondary text-sm">/day</span>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default function GuidesPage() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages");

  const filteredGuides = guides.filter((guide) => {
    const cityMatch = selectedCity === "All Cities" || guide.city === selectedCity;
    const langMatch = selectedLanguage === "All Languages" || guide.languages.includes(selectedLanguage);
    return cityMatch && langMatch;
  });

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">Meet Our Verified Guides</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real people, verified backgrounds, ready to show you their India
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <div className="w-full sm:w-64">
            <label htmlFor="city" className="sr-only">
              Select City
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-card text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-64">
            <label htmlFor="language" className="sr-only">
              Select Language
            </label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-card text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 text-text-secondary">
          Showing {filteredGuides.length} guide{filteredGuides.length !== 1 ? "s" : ""}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">No guides found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCity("All Cities");
                setSelectedLanguage("All Languages");
              }}
              className="mt-4 text-primary hover:text-primary-dark font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}