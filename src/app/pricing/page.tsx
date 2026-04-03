import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | SafarMate",
  description: "Simple, transparent pricing for local guides across India. Choose from guide, companion, or support services.",
};

const pricingData = [
  { city: "Delhi", guide: 10, companion: 15, support: 8 },
  { city: "Mumbai", guide: 12, companion: 18, support: 10 },
  { city: "Jaipur", guide: 9, companion: 14, support: 7 },
  { city: "Varanasi", guide: 8, companion: 12, support: 6 },
  { city: "Ahmedabad", guide: "FREE", companion: 5, support: "FREE", special: true },
  { city: "Goa", guide: 11, companion: 16, support: 9 },
  { city: "Agra", guide: 9, companion: 14, support: 7 },
  { city: "Bangalore", guide: 10, companion: 15, support: 8 },
];

const faqs = [
  {
    question: "Are the prices per person or per group?",
    answer: "Our prices are per person. For groups of 4 or more, contact us for special group rates and custom packages."
  },
  {
    question: "What's included in the guide service?",
    answer: "The guide service includes a licensed local guide for sightseeing, historical interpretations, and local recommendations for your chosen city."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a satisfaction guarantee. If you're not happy with your guide experience, contact us within 24 hours for a review or refund."
  },
  {
    question: "Do I need to tip my guide separately?",
    answer: "Tips are optional and appreciated for exceptional service. The displayed price is all-inclusive—tipping is entirely at your discretion."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 days in advance to ensure guide availability. For peak season or popular cities, 1-2 weeks advance booking is advised."
  },
  {
    question: "Is there a minimum booking duration?",
    answer: "Our minimum booking is 4 hours for all service types. Extended bookings can be arranged directly with your guide."
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#FFF8F3] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-text/60 max-w-2xl mx-auto">
            No hidden fees. No surprise charges. Just honest pricing for authentic travel experiences 
            with verified local guides across India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text text-center mb-4">
              Our Service Types
            </h2>
            <p className="font-['Inter'] text-base text-text/60 text-center max-w-2xl mx-auto mb-12">
              Choose the level of assistance that fits your travel style and budget
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E38B29]/10">
                <div className="w-14 h-14 rounded-2xl bg-[#E38B29]/10 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-3">
                  Guide
                </h3>
                <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                  Licensed local guide for sightseeing. Perfect for tourists who want expert 
                  historical context and curated experiences at famous landmarks.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E38B29]/10">
                <div className="w-14 h-14 rounded-2xl bg-[#E38B29]/10 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-3">
                  Companion
                </h3>
                <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                  Full-day companion for all your travel needs. Ideal for solo travelers or 
                  those wanting a personal assistant throughout their journey.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E38B29]/10">
                <div className="w-14 h-14 rounded-2xl bg-[#E38B29]/10 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-3">
                  Support
                </h3>
                <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                  Basic assistance and local help. Great for travelers who need minimal 
                  support—navigation help, local tips, and emergency assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FFF8F3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Pricing by City
            </h2>
            <p className="font-['Inter'] text-base text-text/60">
              All prices are in USD per person, per day
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E38B29]/20">
                  <th className="font-['Inter'] text-sm font-medium text-text/60 py-4 text-left">City</th>
                  <th className="font-['Inter'] text-sm font-medium text-text/60 py-4 text-center">Guide</th>
                  <th className="font-['Inter'] text-sm font-medium text-text/60 py-4 text-center">Companion</th>
                  <th className="font-['Inter'] text-sm font-medium text-text/60 py-4 text-center">Support</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr 
                    key={item.city} 
                    className={`border-b border-[#E38B29]/10 ${item.special ? 'bg-primary/5' : ''}`}
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-['Inter'] font-medium text-text">{item.city}</span>
                        {item.special && (
                          <span className="font-['Inter'] text-xs font-medium bg-primary text-white px-2 py-0.5 rounded-full">
                            SPECIAL
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <span className={`font-['Inter'] text-lg font-semibold ${item.special ? 'text-primary' : 'text-text'}`}>
                        ${item.guide}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="font-['Inter'] text-lg font-semibold text-text">
                        ${item.companion}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span className={`font-['Inter'] text-lg font-semibold ${item.special ? 'text-primary' : 'text-text'}`}>
                        ${item.support}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text/50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-['Inter']">70% goes directly to your guide</span>
            </div>
            <span className="hidden sm:inline text-text/30">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-['Inter']">Secure booking with satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] text-base text-text/60">
              Have questions about our pricing? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-[#E38B29]/10"
              >
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                  {faq.question}
                </h3>
                <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E38B29]/10 to-[#E38B29]/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
            Ready to Plan Your Trip?
          </h2>
          <p className="font-['Inter'] text-base text-text/60 mb-8 max-w-xl mx-auto">
            Tell us about your travel plans and we&apos;ll match you with the perfect guide. 
            It only takes a minute to get started.
          </p>
          <Link 
            href="/request"
            className="inline-block bg-primary text-white font-['Inter'] font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200"
          >
            Request a Trip
          </Link>
        </div>
      </section>
    </main>
  );
}
