import { supabase } from "./supabaseClient";
import { getStoredAttribution } from "./attribution";

export interface LeadFormData {
  companyName: string;
  lookForNewService: "Yes" | "No";
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function submitLead(formData: LeadFormData) {
  const attribution = getStoredAttribution();

  const { error } = await supabase.from("leads").insert({
    // Step 1: Space Details
    company_name: formData.companyName,
    look_for_new_service: formData.lookForNewService,
    // Step 2: Contact Information
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    // Step 3: Special Requests
    subject: formData.subject,
    message: formData.message,
    // Attribution (captured first-touch, on first page load)
    landing_url: attribution?.landing_url ?? null,
    referrer: attribution?.referrer ?? null,
    utm_source: attribution?.utm_source ?? null,
    utm_medium: attribution?.utm_medium ?? null,
    utm_campaign: attribution?.utm_campaign ?? null,
    utm_term: attribution?.utm_term ?? null,
    utm_content: attribution?.utm_content ?? null,
    gclid: attribution?.gclid ?? null,
    fbclid: attribution?.fbclid ?? null,
    first_visit_at: attribution?.first_visit_at ?? null,
    // Request metadata
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { ok: true };
}
