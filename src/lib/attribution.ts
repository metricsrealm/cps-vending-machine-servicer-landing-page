const STORAGE_KEY = "lead_attribution";

export interface Attribution {
  landing_url: string;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  gclid: string | null;
  fbclid: string | null;
  first_visit_at: string;
}

export function captureAttribution(): Attribution {
  if (typeof window === "undefined") {
    return {
      landing_url: "",
      referrer: null,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
      gclid: null,
      fbclid: null,
      first_visit_at: new Date().toISOString(),
    };
  }

  const existing = localStorage.getItem(STORAGE_KEY);
  if (existing) {
    try {
      return JSON.parse(existing) as Attribution;
    } catch {
      // Ignore parse error and re-capture
    }
  }

  const params = new URLSearchParams(window.location.search);

  const attribution: Attribution = {
    landing_url: window.location.href,
    referrer: document.referrer || null,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
    gclid: params.get("gclid"),
    fbclid: params.get("fbclid"),
    first_visit_at: new Date().toISOString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // localStorage might be unavailable in restricted contexts
  }
  return attribution;
}

export function getStoredAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) return captureAttribution();
  try {
    return JSON.parse(existing) as Attribution;
  } catch {
    return captureAttribution();
  }
}
