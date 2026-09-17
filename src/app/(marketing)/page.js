import Hero from "../../components/landing/Hero.jsx";
import TrustedBy from "../../components/landing/TrustedBy";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import Benefits from "../../components/landing/Benefits";
import Testimonials from "../../components/landing/Testimonials";
import PricingPreview from "../../components/landing/PricingPreview";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";
import Navbar from "@/components/landing/Navbar.jsx";

export default function LandingPage() {
  return (
    <>
    <Navbar/>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <PricingPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}