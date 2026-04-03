import { Metadata } from "next";
import { Shield, BadgeCheck, GraduationCap, Mail, Phone, AlertTriangle, PhoneCall, MapPin, Clock, Heart, UserCheck, FileCheck, Users, Star, CheckCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Safety, Our Foundation | SafarMate",
  description: "Learn about SafarMate's comprehensive verification process and safety measures. Travel with confidence knowing every guide is thoroughly vetted.",
};

const verificationSteps = [
  {
    icon: BadgeCheck,
    title: "ID Verification",
    description: "Every guide must provide a government-issued ID which we verify against official databases. We check passports, Aadhaar cards, and other valid government IDs to ensure identity authenticity.",
  },
  {
    icon: Shield,
    title: "Police Verification",
    description: "We conduct comprehensive background checks through local police authorities. This includes checking for any criminal records, pending cases, or history that might concern travelers.",
  },
  {
    icon: GraduationCap,
    title: "Education Verification",
    description: "Academic credentials are verified directly with educational institutions. We confirm degrees, certifications, and qualifications claimed by our guides.",
  },
  {
    icon: UserCheck,
    title: "Phone & Email Verification",
    description: "Multiple contact points are verified to ensure guides are reachable. We confirm phone numbers through OTP verification and validate email addresses.",
  },
];

const trustBadges = [
  { icon: BadgeCheck, label: "ID Verified", color: "bg-blue-500" },
  { icon: Shield, label: "Police Verified", color: "bg-green-500" },
  { icon: GraduationCap, label: "Education Verified", color: "bg-purple-500" },
  { icon: Star, label: "Top Rated 4.8+", color: "bg-yellow-500" },
  { icon: Users, label: "100+ Tours Completed", color: "bg-orange-500" },
  { icon: Heart, label: "Female Friendly", color: "bg-pink-500" },
];

const travelTips = [
  {
    title: "Share Your Itinerary",
    description: "Share your travel plans with a trusted friend or family member. Update them when your plans change.",
  },
  {
    title: "Keep Emergency Contacts",
    description: "Save our emergency number and local emergency services in your phone for quick access.",
  },
  {
    title: "Trust Your Instincts",
    description: "If something feels wrong, remove yourself from the situation. Your safety is more important than politeness.",
  },
  {
    title: "Stay Connected",
    description: "Keep your phone charged and maintain communication with your emergency contacts throughout the trip.",
  },
  {
    title: "Know Your Guide",
    description: "Verify your guide's identity using our OTP system before starting any tour. Don't proceed without verification.",
  },
  {
    title: "Keep Documents Safe",
    description: "Keep digital and physical copies of your important documents in separate, secure locations.",
  },
];

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#FFF8F3] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-['Inter'] text-sm font-medium text-primary">Trust & Safety</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-6">
            Your Safety, Our Foundation
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-text/60 max-w-2xl mx-auto">
            At SafarMate, we believe every traveler deserves to explore with peace of mind. 
            Our comprehensive verification system ensures that when you travel with us, 
            you're in safe hands from the first message to the final goodbye.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Our Verification Process
            </h2>
            <p className="font-['Inter'] text-base text-text/60 max-w-2xl mx-auto">
              Every guide on SafarMate undergoes a rigorous multi-step verification process. 
              We partner with local authorities and institutions to verify every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verificationSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-2">
                      {step.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-10 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-2">
                  100% Verified Guides
                </h3>
                <p className="font-['Inter'] text-sm text-text/60 max-w-xl">
                  No guide joins SafarMate without completing our entire verification process. 
                  We reject applications that don't meet our strict safety standards. Your trust is earned, not assumed.
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
              Trust Badges Explained
            </h2>
            <p className="font-['Inter'] text-base text-text/60 max-w-2xl mx-auto">
              Look for these badges on every guide's profile—they represent our commitment to transparency
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl ${badge.color}/10 flex items-center justify-center`}>
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-['Inter'] font-medium text-text">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-['Inter'] text-sm text-text/50">
              Badges are earned through verified achievements and cannot be purchased or faked.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 w-fit mb-4">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="font-['Inter'] text-sm font-medium text-red-700">What If Something Goes Wrong?</span>
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
                We've Got Your Back
              </h2>
              <p className="font-['Inter'] text-base text-text/60 mb-6 leading-relaxed">
                While our verification process prevents most issues, we understand that sometimes 
                situations arise that need attention. We're committed to supporting you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Inter'] font-semibold text-text mb-1">24/7 Support Available</h4>
                    <p className="font-['Inter'] text-sm text-text/50">Our team is available around the clock to assist with any concerns during your trip.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Inter'] font-semibold text-text mb-1">Instant Resolution Process</h4>
                    <p className="font-['Inter'] text-sm text-text/50">We investigate and resolve issues promptly, with clear communication throughout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Inter'] font-semibold text-text mb-1">Travel Insurance Partnership</h4>
                    <p className="font-['Inter'] text-sm text-text/50">We can help you connect with trusted insurance providers for additional peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Inter'] font-semibold text-text mb-1">Easy Reporting System</h4>
                    <p className="font-['Inter'] text-sm text-text/50">Report any concerns easily through our app or website. Every report is taken seriously.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-text mb-4">
                Our Promise to You
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 mb-6 leading-relaxed">
                When you book with SafarMate, you're not just getting a guide—you're gaining a 
                partner committed to your safety. We refuse to compromise on trust because we 
                know how important it is to your travel experience.
              </p>
              <div className="bg-white rounded-2xl p-5 border border-primary/10">
                <p className="font-['Inter'] text-sm text-text/70 italic">
                  "Your safety isn't an afterthought—it's the foundation everything else is built upon. 
                  Every policy, every process, every decision starts with one question: Is this safe for our travelers?"
                </p>
                <p className="font-['Inter'] text-xs text-text/40 mt-3">— The SafarMate Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FFF8F3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Tips for Staying Safe While Traveling
            </h2>
            <p className="font-['Inter'] text-base text-text/60 max-w-2xl mx-auto">
              A little preparation goes a long way. Here are some practical tips from experienced travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                  {tip.title}
                </h3>
                <p className="font-['Inter'] text-sm text-text/60 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Emergency Contact Information
            </h2>
            <p className="font-['Inter'] text-base text-text/60 max-w-2xl mx-auto">
              Keep these contacts saved for quick access during your trip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                SafarMate Emergency
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 mb-3">
                Available 24/7 for urgent safety concerns
              </p>
              <p className="font-['Inter'] text-lg font-semibold text-primary">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                Police Emergency
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 mb-3">
                For immediate police assistance
              </p>
              <p className="font-['Inter'] text-lg font-semibold text-primary">
                100
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                Ambulance
              </h3>
              <p className="font-['Inter'] text-sm text-text/60 mb-3">
                Medical emergencies
              </p>
              <p className="font-['Inter'] text-lg font-semibold text-primary">
                102
              </p>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-10 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-3">
                  Introducing Our SOS Button
                </h3>
                <p className="font-['Inter'] text-white/90 leading-relaxed mb-4">
                  During your trip, you'll have access to our SOS button—an instant way to reach 
                  our emergency response team. With one tap, we know your location and can act immediately.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 font-['Inter'] text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Real-time location sharing
                  </li>
                  <li className="flex items-center gap-2 font-['Inter'] text-sm">
                    <CheckCircle className="w-4 h-4" />
                    One-tap emergency call
                  </li>
                  <li className="flex items-center gap-2 font-['Inter'] text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Instant connection to local authorities
                  </li>
                </ul>
              </div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <span className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white">SOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FFF8F3]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Questions? We're Here to Help
            </h2>
            <p className="font-['Inter'] text-base text-text/60 mb-8 max-w-xl mx-auto">
              If you have any questions about our safety measures or verification process, 
              don't hesitate to reach out. We believe in transparency and happy to explain our process.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white font-['Inter'] font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-['Inter'] text-sm text-text/40">
            Last updated: March 2026 • SafarMate is committed to continuously improving our safety measures
          </p>
        </div>
      </section>
    </main>
  );
}
