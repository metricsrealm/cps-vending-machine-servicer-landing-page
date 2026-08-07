/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Advantages from "./components/Advantages";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import { captureAttribution } from "./lib/attribution";

export default function App() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-ink selection:bg-orange/20 selection:text-orange-dark bg-white">
      {/* Skip links for screen reader accessibility (WCAG 2.1) */}
      <a 
        href="#quote-container" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange text-white px-4 py-2 rounded-lg font-bold z-[100] shadow-md outline-none"
      >
        Skip to Quote Form
      </a>

      {/* Primary Landing Sections */}
      <Header />
      
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Advantages />
        <Features />
        <HowItWorks />
        <Reviews />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Mobile-only Sticky bar for prompt telephone/quote access */}
      <MobileCallBar />
    </div>
  );
}
