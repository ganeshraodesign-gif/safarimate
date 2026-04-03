import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | SafarMate",
  description: "Learn how SafarMate connects you with verified local guides for authentic travel experiences across India.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#FFF8F3] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-6">
            How SafarMate Works
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-text/60 max-w-2xl mx-auto">
            Experience India with a trusted local guide in three simple steps. 
            From request to adventure, we make travel seamless and safe.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E38B29]/0 via-[#E38B29]/30 to-[#E38B29]/0" />
            
            <div className="space-y-16 md:space-y-24">
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-3xl bg-[#E38B29]/10 flex items-center justify-center border-2 border-[#E38B29]/20">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">
                      1
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
                    Submit Your Request
                  </h2>
                  <p className="font-['Inter'] text-base md:text-lg text-text/60 leading-relaxed mb-4">
                    Fill out our simple form with your travel details. Tell us your travel dates, 
                    the city you want to explore, and your preferences—whether it&apos;s historical tours, 
                    local cuisine, or off-the-beaten-path adventures.
                  </p>
                  <ul className="font-['Inter'] text-sm text-text/50 space-y-2">
                    <li className="flex items-center justify-center md:justify-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E38B29]" />
                      Travel dates and duration
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E38B29]" />
                      City or destination
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E38B29]" />
                      Interests and preferences
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-3xl bg-[#E38B29]/10 flex items-center justify-center border-2 border-[#E38B29]/20">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">
                      2
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-right">
                  <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
                    Get Matched
                  </h2>
                  <p className="font-['Inter'] text-base md:text-lg text-text/60 leading-relaxed mb-4">
                    Our team reviews your request and matches you with a verified local guide 
                    who suits your travel style and interests. Every guide on SafarMate is 
                    personally vetted and background-checked for your safety.
                  </p>
                  <div className="inline-block bg-[#E38B29]/10 px-4 py-2 rounded-full">
                    <span className="font-['Inter'] text-sm font-medium text-primary">
                      ⚡ Usually within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-3xl bg-[#E38B29]/10 flex items-center justify-center border-2 border-[#E38B29]/20">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">
                      3
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
                    Travel with Confidence
                  </h2>
                  <p className="font-['Inter'] text-base md:text-lg text-text/60 leading-relaxed mb-4">
                    Meet your guide, start your adventure, and experience India safely. 
                    Our OTP verification system ensures you&apos;re matched with the right guide, 
                    and our 24/7 support team is always just a call away.
                  </p>
                  <ul className="font-['Inter'] text-sm text-text/50 space-y-2">
                    <li className="flex items-center justify-center md:justify-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Verified guides with local expertise
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Secure payment and booking
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      OTP verification for safety
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FFF8F3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              What Happens After Matching?
            </h2>
            <p className="font-['Inter'] text-base text-text/60 max-w-2xl mx-auto">
              Once you&apos;re matched with a guide, here&apos;s what to expect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E38B29]/10">
              <div className="w-12 h-12 rounded-xl bg-[#E38B29]/10 flex items-center justify-center mb-4">
                <span className="font-['Playfair_Display'] text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                Connect with Your Guide
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                You&apos;ll receive your guide&apos;s details and can chat to finalize the itinerary 
                and plan your trip details together.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E38B29]/10">
              <div className="w-12 h-12 rounded-xl bg-[#E38B29]/10 flex items-center justify-center mb-4">
                <span className="font-['Playfair_Display'] text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                Secure Payment
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                Complete your booking through our secure payment system. Your payment is 
                protected until the tour is completed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E38B29]/10">
              <div className="w-12 h-12 rounded-xl bg-[#E38B29]/10 flex items-center justify-center mb-4">
                <span className="font-['Playfair_Display'] text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                OTP Verification
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                On the day of your tour, verify your guide using the OTP system for 
                added security and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#E38B29]/10 to-[#E38B29]/5 rounded-3xl p-8 md:p-12 border border-[#E38B29]/20">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Ready to Explore India?
            </h2>
            <p className="font-['Inter'] text-base text-text/60 mb-8 max-w-xl mx-auto">
              Join thousands of travelers who&apos;ve discovered the real India with SafarMate. 
              Your adventure starts with a single request.
            </p>
            <a 
              href="/request" 
              className="inline-block bg-primary text-white font-['Inter'] font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              Submit Your Request
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
