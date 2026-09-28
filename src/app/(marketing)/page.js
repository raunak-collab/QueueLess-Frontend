import Hero from "../../components/landing/Hero.jsx";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import Benefits from "../../components/landing/Benefits";
import CTA from "../../components/landing/CTA";

export default function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
    </>
  );
}