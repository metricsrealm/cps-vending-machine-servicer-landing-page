declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export interface LeadSubmissionData {
  companyName: string;
  lookForNewService: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  notes?: string;
}

/**
 * Fires dataLayer event upon lead form submission with Google Ads Enhanced Conversion payload.
 */
export function trackLeadSubmission(formData: LeadSubmissionData) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const nameTrimmed = formData.name ? formData.name.trim() : "";
  const nameParts = nameTrimmed.split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  const cleanPhone = formData.phone ? formData.phone.trim() : "";
  const cleanEmail = formData.email ? formData.email.trim() : "";

  // Enhanced conversion data payload (unhashed - GTM auto-hashes if configured in tag settings)
  const enhancedData = {
    email: cleanEmail,
    phone_number: cleanPhone,
    first_name: firstName,
    last_name: lastName,
    company_name: formData.companyName ? formData.companyName.trim() : "",
  };

  // 1. Primary GA4 & Google Ads Conversion event with enhanced_conversion_data & user_data
  window.dataLayer.push({
    event: "generate_lead",
    event_category: "lead_generation",
    event_action: "quote_form_submit",
    event_label: "Quote Form",
    value: 1.0,
    currency: "USD",
    enhanced_conversion_data: enhancedData,
    user_data: {
      email: cleanEmail,
      phone_number: cleanPhone,
      address: {
        first_name: firstName,
        last_name: lastName,
      },
    },
    lead_details: {
      company_name: formData.companyName,
      look_for_new_service: formData.lookForNewService,
      subject: formData.subject,
    },
  });

  // 2. Secondary explicit event for GTM custom trigger flexibility
  window.dataLayer.push({
    event: "lead_form_submitted",
    email: cleanEmail,
    phone: cleanPhone,
    name: nameTrimmed,
    company_name: formData.companyName,
    look_for_new_service: formData.lookForNewService,
  });
}

/**
 * Fires dataLayer event when user clicks any phone call button/link.
 */
export function trackPhoneClick(location: string, phoneNumber: string = "(385) 208-4074") {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "phone_call_click",
    event_category: "contact",
    event_action: "click_phone",
    event_label: `${location} - ${phoneNumber}`,
    phone_number: phoneNumber,
    click_location: location,
  });
}
