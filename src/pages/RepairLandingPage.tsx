import Header from "../components/Header";
import RepairHero from "../components/repair/RepairHero";
import RepairTrustBar from "../components/repair/RepairTrustBar";
import RepairAdvantages from "../components/repair/RepairAdvantages";
import RepairFeatures from "../components/repair/RepairFeatures";
import RepairHowItWorks from "../components/repair/RepairHowItWorks";
import RepairReviews from "../components/repair/RepairReviews";
import RepairServiceArea from "../components/repair/RepairServiceArea";
import RepairFAQ from "../components/repair/RepairFAQ";
import RepairFinalCTA from "../components/repair/RepairFinalCTA";
import Footer from "../components/Footer";
import MobileCallBar from "../components/MobileCallBar";
import { useRepairSEO } from "../lib/useRepairSEO";

export default function RepairLandingPage() {
  useRepairSEO();

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-ink selection:bg-orange/20 selection:text-orange-dark bg-white">
      {/* Skip links for accessibility */}
      <a 
        href="#quote-container" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange text-white px-4 py-2 rounded-lg font-bold z-[100] shadow-md outline-none"
      >
        Skip to Quote Form
      </a>

      {/* Header */}
      <Header />

      <main id="main-content">
        <RepairHero />
        <RepairTrustBar />
        <RepairAdvantages />
        <RepairFeatures />
        <RepairHowItWorks />
        <RepairReviews />
        <RepairServiceArea />
        <RepairFAQ />
        <RepairFinalCTA />
      </main>

      <Footer />

      {/* Mobile Sticky Bar */}
      <MobileCallBar />
    </div>
  );
}
