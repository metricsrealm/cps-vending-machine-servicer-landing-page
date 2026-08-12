import { useEffect } from "react";

export function useRepairSEO() {
  useEffect(() => {
    // Save previous SEO values
    const originalTitle = document.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute("content") || "";

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonicalLink?.getAttribute("href") || "";

    const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    const originalJsonLd = jsonLdScript?.textContent || "";

    // Apply Repair Landing Page SEO metadata
    document.title = "Vending Machine Repair & Maintenance in Utah | CPS Markets & Vending";

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional vending machine repair, preventive maintenance, and ongoing service for Utah businesses. Keeping your vending machines operating reliably across Salt Lake City and statewide."
      );
    }

    if (canonicalLink) {
      canonicalLink.setAttribute(
        "href",
        "https://vending.cpsmarketsandvending.com/vending-repair-maintenance/"
      );
    }

    if (jsonLdScript) {
      const repairJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://cpsmarketsandvending.com/#organization",
            "name": "CPS Markets & Vending",
            "url": "https://cpsmarketsandvending.com/",
            "telephone": "+1-385-208-4074",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Utah"
            },
            "description": "Full-service vending machine repair, maintenance, and vending machine services for Utah businesses."
          },
          {
            "@type": "Service",
            "@id": "https://vending.cpsmarketsandvending.com/vending-repair-maintenance/#service",
            "name": "Vending Machine Repair & Maintenance",
            "provider": {
              "@id": "https://cpsmarketsandvending.com/#organization"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Utah"
            },
            "description": "Commercial vending machine repair, proactive maintenance, and technical service support for businesses across Utah.",
            "url": "https://vending.cpsmarketsandvending.com/vending-repair-maintenance/"
          }
        ]
      };
      jsonLdScript.textContent = JSON.stringify(repairJsonLd, null, 2);
    }

    // Cleanup on unmount or route change
    return () => {
      document.title = originalTitle;
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute("content", originalDescription);
      }
      if (canonicalLink && originalCanonical) {
        canonicalLink.setAttribute("href", originalCanonical);
      }
      if (jsonLdScript && originalJsonLd) {
        jsonLdScript.textContent = originalJsonLd;
      }
    };
  }, []);
}
