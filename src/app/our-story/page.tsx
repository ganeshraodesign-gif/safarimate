import { Metadata } from "next";
import { Heart, Users, Shield, Handshake, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Why SafarMate Exists",
  description: "Discover why SafarMate was created - a mission to make travel in India safe, dignified, and meaningful through verified local guides.",
};

const storySections = [
  {
    id: "why-we-started",
    icon: Heart,
    title: "Why We Started",
    content: "We started SafarMate after witnessing something that changed us forever. A solo female traveler, excited to explore India, ended her trip early because she felt unsafe. Not because of the places—but because of the people who wouldn't leave her alone. She had done everything right. She was cautious, dressed appropriately, stayed in tourist areas. Yet every corner turned into a hassle, every interaction felt like a threat.",
    highlight: "We realized that the problem wasn't the destination—it was the absence of a trusted companion.",
  },
  {
    id: "the-problem",
    icon: Users,
    title: "The Problem We Saw",
    content: "Every traveler who comes to India faces this reality: the excitement of exploring a land rich with culture is constantly interrupted by noise—autowalas overcharging, unwanted attention, people misleading you to places that benefit them. For solo travelers, especially women, it becomes exhausting. You're constantly on guard, second-guessing every interaction, worrying about your safety.",
    highlight: "The joy of discovery gets drowned out by the burden of constant vigilance.",
    problems: [
      "Unwanted attention and harassment that turns exploring into a battle",
      "Autowalas and vendors overcharging, making every trip stressful",
      "No access to safe, reliable local companions who genuinely care",
      "Language barriers that leave you dependent on whoever approaches you",
      "Missing hidden gems because you don't know who to trust",
    ],
  },
  {
    id: "our-solution",
    icon: Shield,
    title: "Our Solution",
    content: "We built SafarMate around one simple idea: every traveler deserves a trusted local companion—someone verified, trained, and genuinely passionate about showing their city. Not a tour guide with a script, but a local who treats you with dignity and shows you the real India.",
    highlight: "Verified guides who are more than tour leaders—they're companions you can trust.",
    features: [
      "Every guide goes through strict ID and police verification",
      "We check backgrounds, verify identities, and ensure no red flags",
      "Guides are trained in safety protocols and traveler support",
      "Real-time verification so you know exactly who you're meeting",
      "Your guide is with you—not just pointing directions, but walking beside you",
    ],
  },
  {
    id: "our-values",
    icon: Handshake,
    title: "Our Values",
    content: "These aren't just words on a wall. They guide every decision we make, every guide we onboard, every policy we build.",
    values: [
      {
        title: "Safety First",
        description: "We don't compromise on traveler safety. Every guide is verified, every trip is monitored, every concern is heard.",
      },
      {
        title: "Dignity for All",
        description: "We treat every traveler with respect, and we expect our guides to do the same. No judgment, no assumptions.",
      },
      {
        title: "Trust Earned",
        description: "We don't take your trust for granted. We earn it through transparency, consistency, and accountability.",
      },
      {
        title: "Human Connection",
        description: "Travel is about people, not just places. We connect you with locals who become the heart of your journey.",
      },
    ],
  },
  {
    id: "what-makes-us-different",
    icon: Sparkles,
    title: "What Makes Us Different",
    content: "There are many ways to book a tour in India. You can find guides at every corner, use generic booking platforms, or rely on hotel recommendations. So why SafarMate?",
    highlight: "We're not just a booking platform—we're a trust platform.",
    differences: [
      "We're the only platform with comprehensive police verification for every single guide",
      "We don't just list guides—we match you with someone who fits your trip and personality",
      "Our guides aren't employees—they're verified locals who genuinely want to show their city",
      "You can verify your guide on-site using our OTP system before the tour begins",
      "We stay with you throughout the trip, not just at booking",
    ],
  },
];

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    description: "Former software engineer who quit her job to solve the safety problem in Indian travel after her own difficult solo trip experiences.",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Operations",
    description: "Former hotel manager with 12 years of experience in guest services and safety protocols.",
  },
  {
    name: "Sofia Rahman",
    role: "Head of Guide Relations",
    description: "Passionate about empowering local communities and ensuring guides are treated with dignity.",
  },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#FFF8F3] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="font-['Inter'] text-sm font-medium text-primary">Our Story</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-6">
            Why SafarMate Exists
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-text/60 max-w-2xl mx-auto">
            It started with a simple belief: every traveler deserves to explore with joy, not fear. 
            This is our story—and the reason we wake up every day.
          </p>
        </div>
      </section>

      {storySections.map((section, index) => (
        <section
          key={section.id}
          className={`py-16 md:py-24 ${index % 2 === 1 ? "bg-[#FFF8F3]" : ""}`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <section.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text">
                  {section.title}
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="font-['Inter'] text-base md:text-lg text-text/70 leading-relaxed">
                {section.content}
              </p>

              {section.highlight && (
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border-l-4 border-primary">
                  <p className="font-['Playfair_Display'] text-lg text-text italic">
                    "{section.highlight}"
                  </p>
                </div>
              )}

              {section.problems && (
                <div className="grid gap-4 mt-6">
                  {section.problems.map((problem, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <span className="font-['Inter'] text-base text-text/70">{problem}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.features && (
                <div className="grid gap-4 mt-6">
                  {section.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="font-['Inter'] text-base text-text/70">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.values && (
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {section.values.map((value, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                      <h4 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-2">
                        {value.title}
                      </h4>
                      <p className="font-['Inter'] text-sm text-text/60">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.differences && (
                <div className="grid gap-4 mt-6">
                  {section.differences.map((diff, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{i + 1}</span>
                      </div>
                      <span className="font-['Inter'] text-base text-text/70">{diff}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-[#FFF8F3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Meet the Team Behind SafarMate
            </h2>
            <p className="font-['Inter'] text-base text-text/60 max-w-2xl mx-auto">
              We're not a faceless corporation. We're travelers who experienced the same 
              problems you're facing—and we're building the solution we wished we had.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-semibold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-1">
                  {member.name}
                </h3>
                <p className="font-['Inter'] text-sm text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="font-['Inter'] text-sm text-text/60">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
              Join Our Mission
            </h2>
            <p className="font-['Inter'] text-base text-text/60 mb-8 max-w-xl mx-auto">
              Whether you're a traveler looking for safe exploration or a local who wants 
              to share their world—we're building something meaningful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/guides"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-['Inter'] font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200"
              >
                Find a Guide
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/become-guide"
                className="inline-flex items-center justify-center gap-2 bg-white text-text font-['Inter'] font-medium px-8 py-4 rounded-full border-2 border-gray-200 hover:border-primary transition-colors duration-200"
              >
                Become a Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-['Inter'] text-sm text-text/40">
            Last updated: March 2026 • SafarMate is committed to continuous improvement
          </p>
        </div>
      </section>
    </main>
  );
}