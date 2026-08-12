import { supabase } from "./supabaseClient";
import { getStoredAttribution } from "./attribution";

export interface RepairLeadFormData {
  serviceType: string;
  issueDescription?: string;
  name: string;
  companyName?: string;
  email: string;
  phone: string;
  zipCode?: string;
  machineCount?: string;
  machineBrandModel?: string;
}

export async function submitRepairLead(formData: RepairLeadFormData) {
  const attribution = getStoredAttribution();

  const { error } = await supabase.from("vending_repair_leads").insert({
    // Step 1: Repair request
    service_type: formData.serviceType,
    issue_description: formData.issueDescription?.trim() || null,

    // Step 2: Contact information
    name: formData.name.trim(),
    company_name: formData.companyName?.trim() || null,
    email: formData.email.trim(),
    phone: formData.phone.trim(),

    // Step 3: Machine / location details
    zip_code: formData.zipCode?.trim() || null,
    machine_count: formData.machineCount?.trim() || null,
    machine_brand_model: formData.machineBrandModel?.trim() || null,

    // Attribution
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
