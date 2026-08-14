import { lazy, Suspense } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Advantages from "../components/Advantages";
import MobileCallBar from "../components/MobileCallBar";

const Features = lazy(() => import("../components/Features"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const Reviews = lazy(() => import("../components/Reviews"));
const ServiceArea = lazy(() => import("../components/ServiceArea"));
const FAQ = lazy(() => import("../components/FAQ"));
const FinalCTA = lazy(() => import("../components/FinalCTA"));
const Footer = lazy(() => import("../components/Footer"));

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-ink selection:bg-orange/20 selection:text-orange-dark bg-white" id="home-page-root">
      {/* Skip links for screen reader accessibility (WCAG 2.1) */}
      <a 
        href="#quote-container" 
        id="home-skip-link"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange text-white px-4 py-2 rounded-lg font-bold z-[100] shadow-md outline-none"
      >
        Skip to Quote Form
      </a>

      {/* Primary Landing Sections */}
      <Header />
      
      <main id="home-main-content">
        <Hero />
        <TrustBar />
        <Advantages />
        <Suspense fallback={null}>
          <Features />
          <HowItWorks />
          <Reviews />
          <ServiceArea />
          <FAQ />
          <FinalCTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Mobile-only Sticky bar for prompt telephone/quote access */}
      <MobileCallBar />
    </div>
  );
}
