"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Guide {
  id: number;
  name: string;
  city: string;
  languages: string[];
  rating: number;
  reviewCount: number;
  badges: string[];
  bio: string;
  tagline: string;
  experience: number;
  pricePerDay: number;
  initials: string;
  photo: string;
  tripsCompleted: number;
  responseTime: string;
  verificationBadges: string[];
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
    bio: "History enthusiast with 8 years of experience showing Delhi's hidden gems and heritage sites. From the majestic Red Fort to the serene Lodhi Gardens, I'll take you on a journey through the rich tapestry of India's capital. My expertise spans Mughal history, British colonial architecture, and the vibrant street food culture that makes Delhi a paradise for food lovers.",
    tagline: "Discover Delhi's hidden treasures with a passionate historian",
    experience: 8,
    pricePerDay: 2500,
    initials: "PS",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 245,
    responseTime: "< 1 hour",
    verificationBadges: ["ID Verified", "Police Verified", "Education Verified", "Phone Verified"],
  },
  {
    id: 2,
    name: "Raj Kapoor",
    city: "Jaipur",
    languages: ["English", "Hindi", "Rajasthani"],
    rating: 4.8,
    reviewCount: 89,
    badges: ["Verified", "Family Friendly"],
    bio: "Born and raised in the Pink City. I specialize in royal palaces, local markets, and authentic food tours. Having grown up amidst the grandeur of Jaipur's havelis, I share stories that guidebooks don't tell. From bargaining at Johari Bazaar to watching the sunset at Nahargarh Fort, experience Jaipur like a local.",
    tagline: "Your local connection to the royal heritage of Rajasthan",
    experience: 6,
    pricePerDay: 2200,
    initials: "RK",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 178,
    responseTime: "< 2 hours",
    verificationBadges: ["ID Verified", "Police Verified", "Phone Verified"],
  },
  {
    id: 3,
    name: "Anita Menon",
    city: "Kochi",
    languages: ["English", "Malayalam", "Tamil"],
    rating: 5.0,
    reviewCount: 64,
    badges: ["Verified", "Heritage Expert", "Eco Guide"],
    bio: "Spice garden specialist and coastal cuisine expert. Let me show you the soul of Kerala. From the aromatic spice plantations of Thekkady to the serene backwaters of Alleppey, I curate experiences that touch your heart. My grandmother's recipes and my grandmother's stories will make your journey unforgettable.",
    tagline: "Experience the soul of God's Own Country",
    experience: 7,
    pricePerDay: 2800,
    initials: "AM",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 156,
    responseTime: "< 1 hour",
    verificationBadges: ["ID Verified", "Police Verified", "Education Verified", "Phone Verified"],
  },
  {
    id: 4,
    name: "Vikram Singh",
    city: "Agra",
    languages: ["English", "Hindi", "Urdu"],
    rating: 4.7,
    reviewCount: 156,
    badges: ["Verified", "Taj Expert"],
    bio: "Certified Taj Mahal historian. I'll take you beyond the monument to discover Agra's lesser-known wonders. While the Taj Mahal is magnificent, Agra has so much more to offer - from the magnificent Agra Fort to the forgotten tombs of the Mughal era. Let me show you the city beyond the crowds.",
    tagline: "Beyond the Taj - discover Agra's hidden marvels",
    experience: 10,
    pricePerDay: 2000,
    initials: "VS",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 312,
    responseTime: "< 30 min",
    verificationBadges: ["ID Verified", "Police Verified", "Phone Verified"],
  },
  {
    id: 5,
    name: "Meera Patel",
    city: "Mumbai",
    languages: ["English", "Hindi", "Gujarati", "Marathi"],
    rating: 4.9,
    reviewCount: 203,
    badges: ["Verified", "Top Rated", "City Insider"],
    bio: "Film industry insider and street food champion. Experience Mumbai like a local, not a tourist. From Bollywood studio tours to the best vada pav in town, I'll show you the real Mumbai. My connections in the film industry can get you behind-the-scenes access that tourists never see.",
    tagline: "Your insider pass to the Maximum City",
    experience: 9,
    pricePerDay: 3000,
    initials: "MP",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 428,
    responseTime: "< 1 hour",
    verificationBadges: ["ID Verified", "Police Verified", "Education Verified", "Phone Verified"],
  },
  {
    id: 6,
    name: "Arjun Reddy",
    city: "Hyderabad",
    languages: ["English", "Telugu", "Urdu"],
    rating: 4.8,
    reviewCount: 78,
    badges: ["Verified", "Food Specialist"],
    bio: "Nizam's cuisine expert and heritage walk specialist. The city of pearls has so much more to offer. From the iconic Charminar to the hidden gems of the old city, I'll guide you through Hyderabad's rich history and mouth-watering cuisine. The biryani waiting is worth the journey.",
    tagline: "Taste the legacy of the Nizams",
    experience: 5,
    pricePerDay: 2400,
    initials: "AR",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 145,
    responseTime: "< 2 hours",
    verificationBadges: ["ID Verified", "Police Verified", "Phone Verified"],
  },
  {
    id: 7,
    name: "Sunita Joshi",
    city: "Varanasi",
    languages: ["English", "Hindi", "Bhojpuri"],
    rating: 4.9,
    reviewCount: 112,
    badges: ["Verified", "Spiritual Guide", "Photography"],
    bio: "Born on the ghats of Ganga. I'll help you understand the spiritual heart of India. Varanasi is not just a city - it's an experience that touches the soul. From the magical Ganga Aarti to the mystical lanes of the old city, let me guide you through this ancient spiritual capital.",
    tagline: "Experience the spiritual heart of India",
    experience: 12,
    pricePerDay: 1800,
    initials: "SJ",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 267,
    responseTime: "< 1 hour",
    verificationBadges: ["ID Verified", "Police Verified", "Education Verified", "Phone Verified"],
  },
  {
    id: 8,
    name: "Karthik Nair",
    city: "Chennai",
    languages: ["English", "Tamil", "Malayalam"],
    rating: 4.7,
    reviewCount: 91,
    badges: ["Verified", "Temple Expert", "Arts & Culture"],
    bio: "Classical dance historian and temple architecture specialist. Discover South India's rich heritage. From the majestic Brihadeeswarar Temple to the serene beaches of Marina, Chennai is a treasure trove of art and culture. Let me show you the classical arts that define this beautiful city.",
    tagline: "Unveil the classical soul of South India",
    experience: 7,
    pricePerDay: 2100,
    initials: "KN",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    tripsCompleted: 189,
    responseTime: "< 2 hours",
    verificationBadges: ["ID Verified", "Police Verified", "Phone Verified"],
  },
];

interface Review {
  id: number;
  travelerName: string;
  country: string;
  rating: number;
  date: string;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    travelerName: "Michael Thompson",
    country: "United States",
    rating: 5,
    date: "January 2026",
    comment: "Priya was absolutely amazing! Her knowledge of Delhi's history is unparalleled. She took us to places we never would have found on our own. The street food tour was the highlight of our trip!",
  },
  {
    id: 2,
    travelerName: "Emma Williams",
    country: "United Kingdom",
    rating: 5,
    date: "December 2025",
    comment: "Such a warm and welcoming guide. Priya made us feel completely safe and comfortable throughout our entire tour. Her English is excellent and she has great recommendations for everything!",
  },
  {
    id: 3,
    travelerName: "Hans Mueller",
    country: "Germany",
    rating: 4,
    date: "November 2025",
    comment: "Very professional and knowledgeable. The heritage walk was informative and well-organized. Would highly recommend for anyone visiting Delhi.",
  },
  {
    id: 4,
    travelerName: "Sophie Laurent",
    country: "France",
    rating: 5,
    date: "October 2025",
    comment: "A wonderful experience! Priya's passion for her city is infectious. She went above and beyond to make our trip special. Can't thank her enough!",
  },
];

const cityPricing: Record<string, { guide: number; companion: number; support: number }> = {
  Delhi: { guide: 10, companion: 15, support: 8 },
  Mumbai: { guide: 12, companion: 18, support: 10 },
  Jaipur: { guide: 10, companion: 14, support: 8 },
  Agra: { guide: 8, companion: 12, support: 6 },
  Varanasi: { guide: 8, companion: 12, support: 6 },
  Kochi: { guide: 11, companion: 16, support: 9 },
  Hyderabad: { guide: 10, companion: 15, support: 8 },
  Chennai: { guide: 9, companion: 14, support: 7 },
};

const languageIcons: Record<string, string> = {
  English: "🇬🇧",
  Hindi: "🇮🇳",
  Punjabi: "🇮🇳",
  Rajasthani: "🇮🇳",
  Malayalam: "🇮🇳",
  Tamil: "🇮🇳",
  Urdu: "🇵🇰",
  Telugu: "🇮🇳",
  Marathi: "🇮🇳",
  Gujarati: "🇮🇳",
  Bhojpuri: "🇮🇳",
  Spanish: "🇪🇸",
  French: "🇫🇷",
  German: "🇩🇪",
  Japanese: "🇯🇵",
  Chinese: "🇨🇳",
};

const badgeIcons: Record<string, string> = {
  "ID Verified": "🪪",
  "Police Verified": "👮",
  "Education Verified": "🎓",
  "Phone Verified": "📱",
  Email: "📧",
  "Payment Verified": "💳",
};

const badgeColors: Record<string, string> = {
  "ID Verified": "bg-blue-100 text-blue-700 border-blue-200",
  "Police Verified": "bg-green-100 text-green-700 border-green-200",
  "Education Verified": "bg-purple-100 text-purple-700 border-purple-200",
  "Phone Verified": "bg-amber-100 text-amber-700 border-amber-200",
  Email: "bg-gray-100 text-gray-700 border-gray-200",
  "Payment Verified": "bg-emerald-100 text-emerald-700 border-emerald-200",
};

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? "text-warning fill-warning" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GuideProfilePage() {
  const params = useParams();
  const guideId = params?.id ? parseInt(params.id as string) : 1;
  const guide = guides.find((g) => g.id === guideId) || guides[0];
  
  const pricing = cityPricing[guide.city] || cityPricing.Delhi;
  const guideReviews = reviews;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const availableDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].filter(() => Math.random() > 0.3).slice(0, 20).sort((a, b) => a - b);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                  <div className="relative shrink-0 mx-auto sm:mx-0">
                    <img
                      src={guide.photo}
                      alt={guide.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary shadow-lg"
                    />
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-green-500 w-5 h-5 rounded-full border-2 border-white" title="Online"></div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-2">
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{guide.name}</h1>
                      <div className="flex gap-1">
                        {guide.badges.filter(b => b === "Verified").map((badge) => (
                          <span key={badge} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.42 0l-7 7A1 1 0 004 17h3v-2a1 1 0 00-1-1H2a1 1 0 00-1 1v3h3.586l6.293-6.293a1 1 0 000-1.414l-3-3a1 1 0 010-1.414l6-6a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 000 1.414l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 000 1.414l7 7a1 1 0 001.414 0z" clipRule="evenodd" />
                            </svg>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 flex items-center justify-center sm:justify-start gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {guide.city}, India
                    </p>
                    
                    <p className="text-gray-500 text-sm mb-4">{guide.tagline}</p>
                    
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center gap-2">
                        <StarRating rating={Math.floor(guide.rating)} size="lg" />
                        <span className="text-2xl font-bold text-gray-800">{guide.rating}</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <div className="text-gray-600">
                        <span className="font-semibold">{guide.reviewCount}</span> reviews
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{guide.bio}</p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {guide.languages.map((lang) => (
                        <span key={lang} className="bg-amber-50 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5">
                          <span>{languageIcons[lang] || "🌐"}</span>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Experience
                    </h3>
                    <p className="text-gray-600">
                      <span className="text-2xl font-bold text-primary">{guide.experience}</span> years
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Services & Pricing</h2>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Guide</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">Professional tour guide for historical sites & landmarks</p>
                    <div className="text-primary">
                      <span className="text-2xl font-bold">${pricing.guide}</span>
                      <span className="text-gray-500 text-sm">/day</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Companion</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">Full-time travel companion for complete trip support</p>
                    <div className="text-primary">
                      <span className="text-2xl font-bold">${pricing.companion}</span>
                      <span className="text-gray-500 text-sm">/day</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800">Support</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">On-call assistance for emergencies & guidance</p>
                    <div className="text-primary">
                      <span className="text-2xl font-bold">${pricing.support}</span>
                      <span className="text-gray-500 text-sm">/day</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mt-4 text-center">* Based in {guide.city}. Prices may vary for multi-day tours.</p>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Verification Badges</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {guide.verificationBadges.map((badge) => (
                    <div
                      key={badge}
                      className={`rounded-xl p-4 text-center border ${badgeColors[badge] || "bg-gray-100 text-gray-700 border-gray-200"}`}
                    >
                      <div className="text-2xl mb-2">{badgeIcons[badge] || "✓"}</div>
                      <p className="font-semibold text-sm">{badge}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Reviews</h2>
                
                <div className="space-y-6">
                  {guideReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
                            {review.travelerName.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{review.travelerName}</p>
                            <p className="text-gray-500 text-sm">{review.country}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <StarRating rating={review.rating} size="sm" />
                          <p className="text-gray-400 text-sm mt-1">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed pl-15">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                <div className="text-center mb-6">
                  <p className="text-gray-500 mb-1">Starting from</p>
                  <div className="text-primary">
                    <span className="text-4xl font-bold">${pricing.support}</span>
                    <span className="text-gray-500">/day</span>
                  </div>
                </div>
                
                <Link
                  href={`/request?guide=${guide.id}`}
                  className="block w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl text-center hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
                >
                  Request This Guide
                </Link>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600">Trips Completed</span>
                    <span className="font-semibold text-gray-800">{guide.tripsCompleted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-gray-800">{guide.responseTime}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Availability</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">{monthNames[currentMonth]} {currentYear}</p>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map((day) => (
                      <div key={day} className="text-center text-xs text-gray-400 font-medium py-1">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square"></div>
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const isAvailable = availableDays.includes(day);
                      return (
                        <div
                          key={day}
                          className={`aspect-square flex items-center justify-center text-sm rounded ${
                            isAvailable
                              ? "bg-green-100 text-green-700 font-medium"
                              : "text-gray-300"
                          }`}
                          title={isAvailable ? "Available" : "Unavailable"}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-green-100 rounded"></div>
                  <span>Available days this month</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-lg p-6 text-white">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-white/80 text-sm mb-4">Have questions about this guide? We're here to help!</p>
                <button className="w-full bg-white text-primary font-semibold py-2.5 px-4 rounded-lg hover:bg-white/90 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
