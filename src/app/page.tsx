import Hero from "@/components/Hero";
import WhyThisExists from "@/components/WhyThisExists";
import HowItWorks from "@/components/HowItWorks";
import TrustSafety from "@/components/TrustSafety";
import MeetOurGuides from "@/components/MeetOurGuides";
import PricingSection from "@/components/PricingSection";
import AhmedabadFreeTour from "@/components/AhmedabadFreeTour";
import Testimonials from "@/components/Testimonials";
import OurStory from "@/components/OurStory";
import EmergencySupport from "@/components/EmergencySupport";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyThisExists />
      <TrustSafety />
      <HowItWorks />
      <MeetOurGuides />
      <PricingSection />
      <AhmedabadFreeTour />
      <Testimonials />
      <OurStory />
      <EmergencySupport />
    </main>
  );
}