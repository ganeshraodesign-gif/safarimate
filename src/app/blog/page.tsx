import { Metadata } from "next";
import { Shield, MapPin, Utensils, Calendar, Clock, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Resources & Safety Guides | SafarMate",
  description: "Everything you need to know for a safe and memorable trip to India. Expert tips, city guides, cultural advice, and travel planning resources.",
};

const categories = [
  { name: "Safety Tips", icon: Shield, color: "bg-red-500" },
  { name: "City Guides", icon: MapPin, color: "bg-blue-500" },
  { name: "Cultural Advice", icon: Utensils, color: "bg-purple-500" },
  { name: "Travel Planning", icon: Calendar, color: "bg-green-500" },
];

const articles = [
  {
    id: 1,
    title: "Safety Tips for Female Travelers in India",
    excerpt: "Essential safety advice and practical tips for women traveling solo or in groups across India. Learn how to stay safe while enjoying everything this incredible country has to offer.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    category: "Safety Tips",
    readTime: "8 min read",
    date: "March 2026",
  },
  {
    id: 2,
    title: "Top 10 Places to Visit in Delhi",
    excerpt: "From the historic Red Fort to the bustling markets of Chandni Chowk, discover the must-visit attractions in India's vibrant capital city.",
    image: "https://images.unsplash.com/photo-1568721028339-aeb2a1d7079d?w=800&q=80",
    category: "City Guides",
    readTime: "6 min read",
    date: "March 2026",
  },
  {
    id: 3,
    title: "India Cultural Do's and Don'ts",
    excerpt: "Navigate Indian customs with confidence. Learn about appropriate dress, dining etiquette, religious traditions, and social norms to show respect.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    category: "Cultural Advice",
    readTime: "7 min read",
    date: "February 2026",
  },
  {
    id: 4,
    title: "Best Time to Visit India",
    excerpt: "Planning your trip? Discover the ideal seasons for visiting different regions of India, from the snowy Himalayas to the beaches of Goa.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Travel Planning",
    readTime: "5 min read",
    date: "February 2026",
  },
  {
    id: 5,
    title: "Understanding Indian Food",
    excerpt: "A guide to India's diverse culinary landscape. From street food to fine dining, learn what to expect and how to navigate the incredible food scene.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    category: "Cultural Advice",
    readTime: "6 min read",
    date: "January 2026",
  },
  {
    id: 6,
    title: "Emergency Contacts in India",
    excerpt: "Your comprehensive guide to emergency services in India. Save these important numbers for police, ambulance, and embassy contacts.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "Safety Tips",
    readTime: "4 min read",
    date: "January 2026",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Safety Tips":
      return "bg-red-100 text-red-700";
    case "City Guides":
      return "bg-blue-100 text-blue-700";
    case "Cultural Advice":
      return "bg-purple-100 text-purple-700";
    case "Travel Planning":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#FFF8F3] to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F3]/80 to-white" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-['Inter'] text-sm font-medium text-primary">Resources</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-6">
            Travel Resources & Safety Guides
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-text/60 max-w-2xl mx-auto">
            Everything you need to know for a safe and memorable trip to India
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-3">
              Browse by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color}/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                </div>
                <span className="font-['Inter'] font-medium text-text">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FFF8F3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-3">
              Featured Articles
            </h2>
            <p className="font-['Inter'] text-base text-text/60">
              Expert insights and practical advice for your India journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-['Inter'] text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-text/40">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-['Inter'] text-xs">{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-text/60 line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter'] text-xs text-text/40">{article.date}</span>
                    <span className="font-['Inter'] text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Get travel tips delivered to your inbox
            </h2>
            <p className="font-['Inter'] text-base text-text/60 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for weekly travel tips, safety updates, and exclusive insights about exploring India.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl border border-gray-200 font-['Inter'] text-text placeholder:text-text/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <button
                type="submit"
                className="bg-primary text-white font-['Inter'] font-medium px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="font-['Inter'] text-xs text-text/40 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FFF8F3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-['Inter'] text-sm text-text/50">
            Last updated: March 2026 • SafarMate provides these resources for informational purposes
          </p>
        </div>
      </section>
    </main>
  );
}