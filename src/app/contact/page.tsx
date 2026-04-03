import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | SafarMate",
  description: "Get in touch with SafarMate. Contact our 24/7 emergency helpline or reach out for general inquiries about our local guide services.",
};

const emergencyNumbers = [
  { service: "Police", number: "100", icon: "🚔" },
  { service: "Ambulance", number: "102", icon: "🚑" },
  { service: "Fire", number: "101", icon: "🚒" },
];

const socialLinks = [
  { name: "Twitter", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
  { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "Facebook", icon: "M22 12c0-5.525-4.475-10-10-10S2 6.475 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#FFF8F3] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-6">
            Get In Touch
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl text-text/60 max-w-2xl mx-auto">
            Have questions about our services? We&apos;re here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-red-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-red-600">
                  24/7 Emergency Support
                </h2>
                <p className="font-['Inter'] text-sm text-text/60">We&apos;re here for you in any crisis</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-['Inter'] font-medium text-text">24/7 Helpline</span>
                </div>
                <p className="font-['Inter'] text-2xl font-bold text-red-600">+91 98765 43210</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-['Inter'] font-medium text-text">Emergency Email</span>
                </div>
                <p className="font-['Inter'] text-lg font-semibold text-text">emergency@safarmate.com</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-['Inter'] text-sm text-text/70 bg-red-100/50 rounded-lg p-4">
                <strong>Response Time:</strong> Our emergency team responds within 15 minutes, 24 hours a day, 7 days a week. For non-emergency inquiries, please use the contact form below.
              </p>
            </div>

            <div className="border-t border-red-200 pt-6">
              <h3 className="font-['Inter'] font-semibold text-text mb-4">India Emergency Numbers</h3>
              <div className="grid grid-cols-3 gap-4">
                {emergencyNumbers.map((item) => (
                  <div key={item.service} className="bg-white border-2 border-red-200 rounded-xl p-4 text-center hover:border-red-400 transition-colors">
                    <span className="text-2xl block mb-1">{item.icon}</span>
                    <span className="font-['Inter'] text-sm font-medium text-text block">{item.service}</span>
                    <span className="font-['Inter'] text-xl font-bold text-red-600">{item.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-6">
                Send Us a Message
              </h2>
              <p className="font-['Inter'] text-text/60 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="font-['Inter'] text-sm font-medium text-text block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-[#E38B29]/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-['Inter'] text-text"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-['Inter'] text-sm font-medium text-text block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-[#E38B29]/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-['Inter'] text-text"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="font-['Inter'] text-sm font-medium text-text block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-[#E38B29]/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-['Inter'] text-text"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-['Inter'] text-sm font-medium text-text block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#E38B29]/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-['Inter'] text-text resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary text-white font-['Inter'] font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-6">
                Other Ways to Reach Us
              </h2>
              <p className="font-['Inter'] text-text/60 mb-8">
                Prefer to reach out through other channels? We&apos;re available on social media and at our office.
              </p>

              <div className="space-y-6">
                <div className="bg-[#FFF8F3] rounded-xl p-6">
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-4">
                    Our Office
                  </h3>
                  <div className="font-['Inter'] text-text/70 space-y-2">
                    <p>SafarMate Technologies Pvt. Ltd.</p>
                    <p>123 Travel Boulevard, Suite 401</p>
                    <p>MG Road, Sector 14</p>
                    <p>Gurgaon, Haryana 122001</p>
                    <p>India</p>
                  </div>
                </div>

                <div className="bg-[#FFF8F3] rounded-xl p-6">
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-4">
                    General Inquiries
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-['Inter'] text-text/70">hello@safarmate.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-['Inter'] text-text/70">+91 98765 43210</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFF8F3] rounded-xl p-6">
                  <h3 className="font-['Playfair_Display'] text-lg font-semibold text-text mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="w-12 h-12 rounded-full bg-white border border-[#E38B29]/20 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors"
                        aria-label={social.name}
                      >
                        <svg className="w-5 h-5 text-text/60" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E38B29]/10 to-[#E38B29]/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-semibold text-text mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="font-['Inter'] text-base text-text/60 mb-8 max-w-xl mx-auto">
            If you&apos;re in immediate need of emergency support, please call our 24/7 helpline. For non-urgent matters, fill out the form and we&apos;ll respond within 24 hours.
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
