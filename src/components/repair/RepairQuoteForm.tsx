import { useState, ChangeEvent, FormEvent, KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { submitRepairLead } from "../../lib/submitRepairLead";
import { trackLeadSubmission, trackPhoneClick } from "../../lib/gtm";

export default function RepairQuoteForm() {
  const [formData, setFormData] = useState({
    serviceType: "Vending machine repair",
    issueDescription: "",
    name: "",
    companyName: "",
    email: "",
    phone: "+1 ",
    zipCode: "",
    machineCount: "1",
    machineBrandModel: "",
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.serviceType) {
        newErrors.serviceType = "Please select what you need help with";
      }
    } else if (currentStep === 2) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.phone.trim() || formData.phone.trim() === "+1") {
        newErrors.phone = "Phone number is required";
      } else if (!/^[+]?[0-9\s\-()]{7,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    if (name === "phone") {
      value = value.replace(/[^0-9+\s\-()]/g, "");
    } else if (name === "zipCode") {
      value = value.replace(/[^0-9-]/g, "");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      ) {
        e.preventDefault();
        if (step < 3) {
          handleNext();
        } else {
          handleFinalSubmit();
        }
      }
    }
  };

  const handleFinalSubmit = async () => {
    if (step < 3) {
      handleNext();
      return;
    }

    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitRepairLead({
        serviceType: formData.serviceType,
        issueDescription: formData.issueDescription,
        name: formData.name,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        zipCode: formData.zipCode,
        machineCount: formData.machineCount,
        machineBrandModel: formData.machineBrandModel,
      });

      // Fire GTM Data Layer event with conversion payload
      trackLeadSubmission({
        companyName: formData.companyName || "",
        lookForNewService: "Repair Request",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.serviceType,
        notes: formData.issueDescription,
      });

      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Error submitting repair lead to Supabase:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to submit service request. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Vending machine repair",
    "Machine maintenance",
    "Machine not working",
    "Payment / card issue",
    "Stocking / service issue",
    "Other",
  ];

  return (
    <div
      className="bg-white border border-line rounded-[18px] p-6 sm:p-[30px] shadow-[0_12px_40px_rgba(8,26,55,0.08)] relative max-w-lg w-full mx-auto flex flex-col justify-between min-h-[380px] scroll-mt-24"
      id="quote"
    >
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <div className="flex flex-col h-full justify-between" id="repair-quote-form-wrap">
            <div id="repair-quote-form-body">
              {/* Header */}
              <div className="text-left mb-4" id="repair-quote-header">
                <h3 className="font-display font-bold text-[19px] sm:text-[21px] text-navy mb-1" id="repair-quote-title">
                  {step === 1 && "Request Vending Machine Service"}
                  {step === 2 && "How can we reach you?"}
                  {step === 3 && "Tell us about the machine"}
                </h3>
                <p className="text-[#5B6472] text-[13px]" id="repair-quote-subtitle">
                  {step === 1 && "Tell us a little about the machine and the issue. We'll help with the next step."}
                  {step === 2 && "Please provide your contact details so we can assist you."}
                  {step === 3 && "Additional machine details help us prepare for your service."}
                </p>
              </div>

              {/* Progress Tracker */}
              <div className="mb-5" id="repair-quote-progress-wrap">
                <div className="flex justify-between items-center mb-2" id="repair-quote-progress-header">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange" id="repair-quote-progress-label">Step {step} of 3</span>
                  <span className="text-[11.5px] font-semibold text-[#5B6472]" id="repair-quote-progress-step-name">
                    {step === 1 && "Request Type"}
                    {step === 2 && "Contact Info"}
                    {step === 3 && "Machine Details"}
                  </span>
                </div>
                <div className="w-full bg-[#EAF0F8] h-1.5 rounded-full overflow-hidden" id="repair-quote-progress-bar-track">
                  <motion.div
                    id="repair-quote-progress-bar-fill"
                    className="bg-orange h-full"
                    initial={{ width: "33%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form id="repair-quote-form" onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown} noValidate>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      id="repair-quote-step-1"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-[14px]"
                    >
                      {/* What do you need help with? */}
                      <div className="form-group text-left" id="repair-quote-service-type-group">
                        <label className="block text-[13px] font-bold text-navy mb-2.5 uppercase tracking-[0.03em]" id="repair-quote-service-type-label">
                          What do you need help with?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3" id="repair-quote-service-options-grid">
                          {serviceOptions.map((option, idx) => (
                            <label
                              key={option}
                              id={`repair-quote-service-option-label-${idx + 1}`}
                              className={`flex items-center gap-2 p-2.5 rounded-[10px] border text-[13.5px] font-semibold cursor-pointer transition-all ${
                                formData.serviceType === option
                                  ? "border-orange bg-[#FFF3E9] text-orange-dark shadow-sm"
                                  : "border-line bg-white text-navy hover:border-slate-300"
                              }`}
                            >
                              <input
                                type="radio"
                                id={`repair-quote-service-radio-${idx + 1}`}
                                name="serviceType"
                                value={option}
                                checked={formData.serviceType === option}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div
                                id={`repair-quote-service-indicator-${idx + 1}`}
                                className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                                  formData.serviceType === option
                                    ? "border-orange bg-orange"
                                    : "border-slate-300"
                                }`}
                              >
                                {formData.serviceType === option && (
                                  <div className="w-1.5 h-1.5 rounded-full bg-white" id={`repair-quote-service-indicator-dot-${idx + 1}`} />
                                )}
                              </div>
                              <span className="leading-tight" id={`repair-quote-service-text-${idx + 1}`}>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Briefly describe the issue */}
                      <div className="form-group text-left" id="repair-quote-issue-desc-group">
                        <label className="block text-[12.5px] font-bold text-navy mb-1.5 uppercase tracking-[0.03em]" id="repair-quote-issue-desc-label">
                          Briefly describe the issue <span className="text-slate-400 font-normal lowercase" id="repair-quote-issue-desc-optional">(optional)</span>
                        </label>
                        <textarea
                          id="repair-quote-issueDescription"
                          name="issueDescription"
                          rows={3}
                          value={formData.issueDescription}
                          onChange={handleInputChange}
                          placeholder="What's happening with the machine?"
                          className="w-full border-[1.5px] border-line rounded-[10px] px-[12px] py-[10px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 resize-none h-[80px]"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      id="repair-quote-step-2"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-[13px]"
                    >
                      {/* Name */}
                      <div className="form-group text-left" id="repair-quote-name-group">
                        <input
                          type="text"
                          id="repair-quote-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Name *"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.name ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1" id="repair-quote-name-error">{errors.name}</p>}
                      </div>

                      {/* Company */}
                      <div className="form-group text-left" id="repair-quote-company-group">
                        <input
                          type="text"
                          id="repair-quote-companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Company (optional)"
                          className="w-full border-[1.5px] border-line rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12"
                        />
                      </div>

                      {/* Phone */}
                      <div className="form-group text-left" id="repair-quote-phone-group">
                        <input
                          type="tel"
                          inputMode="tel"
                          id="repair-quote-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Phone *"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.phone ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1" id="repair-quote-phone-error">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div className="form-group text-left" id="repair-quote-email-group">
                        <input
                          type="email"
                          id="repair-quote-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Email *"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.email ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1" id="repair-quote-email-error">{errors.email}</p>}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      id="repair-quote-step-3"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-[14px]"
                    >
                      {/* ZIP Code */}
                      <div className="form-group text-left" id="repair-quote-zip-group">
                        <label className="block text-[12.5px] font-bold text-navy mb-1.5 uppercase tracking-[0.03em]" id="repair-quote-zip-label">
                          ZIP Code <span className="text-slate-400 font-normal lowercase" id="repair-quote-zip-optional">(optional)</span>
                        </label>
                        <input
                          type="text"
                          inputMode="numeric"
                          id="repair-quote-zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="ZIP Code"
                          className="w-full border-[1.5px] border-line rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12"
                        />
                      </div>

                      {/* Number of machines */}
                      <div className="form-group text-left" id="repair-quote-machine-count-group">
                        <label className="block text-[12.5px] font-bold text-navy mb-1.5 uppercase tracking-[0.03em]" id="repair-quote-machine-count-label">
                          Number of Machines
                        </label>
                        <div className="flex gap-3" id="repair-quote-machine-count-options">
                          {["1", "2–5", "6+"].map((countOption, idx) => (
                            <label
                              key={countOption}
                              id={`repair-quote-machine-count-label-${idx + 1}`}
                              className={`flex-1 text-center py-2.5 px-3 rounded-[10px] border text-[14px] font-bold cursor-pointer transition-all ${
                                formData.machineCount === countOption
                                  ? "border-orange bg-[#FFF3E9] text-orange-dark shadow-sm"
                                  : "border-line bg-white text-navy hover:border-slate-300"
                              }`}
                            >
                              <input
                                type="radio"
                                id={`repair-quote-machine-count-radio-${idx + 1}`}
                                name="machineCount"
                                value={countOption}
                                checked={formData.machineCount === countOption}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <span id={`repair-quote-machine-count-text-${idx + 1}`}>{countOption}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Machine brand / model */}
                      <div className="form-group text-left" id="repair-quote-brand-model-group">
                        <label className="block text-[12.5px] font-bold text-navy mb-1.5 uppercase tracking-[0.03em]" id="repair-quote-brand-model-label">
                          Machine Brand / Model <span className="text-slate-400 font-normal lowercase" id="repair-quote-brand-model-optional">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="repair-quote-machineBrandModel"
                          name="machineBrandModel"
                          value={formData.machineBrandModel}
                          onChange={handleInputChange}
                          placeholder="e.g. Crane, Dixie Narco, AMS, etc."
                          className="w-full border-[1.5px] border-line rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {submitError && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[10px] text-red-600 text-[13px] text-left" id="repair-quote-submit-error">
                    {submitError}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-6 items-center" id="repair-quote-nav-buttons">
                  {step > 1 && (
                    <button
                      key="btn-back"
                      type="button"
                      id="repair-quote-back-btn"
                      onClick={handleBack}
                      className="px-6 py-[12px] text-[14px] font-display font-bold text-navy border border-line hover:bg-slate-50 rounded-[10px] transition-all cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none whitespace-nowrap flex-none"
                    >
                      ← Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      key="btn-continue"
                      type="button"
                      id="repair-quote-continue-btn"
                      onClick={handleNext}
                      className="flex-1 py-[12px] px-4 text-[14px] font-display font-bold text-white bg-orange hover:bg-orange-dark rounded-[10px] shadow-sm shadow-orange/12 transition-all cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none whitespace-nowrap"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      key="btn-submit"
                      type="button"
                      id="repair-quote-submit-btn"
                      onClick={handleFinalSubmit}
                      disabled={isSubmitting}
                      className="flex-1 py-[12px] px-4 text-[13px] sm:text-[14px] font-display font-bold text-white bg-orange hover:bg-orange-dark rounded-[10px] shadow-sm shadow-orange/12 transition-all cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-85 focus:outline-none whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <span id="repair-quote-submitting-text">Submitting...</span>
                      ) : (
                        <span id="repair-quote-submit-text">Request Vending Service →</span>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>

            <p className="text-[10px] text-[#5B6472] text-center mt-4 leading-normal" id="repair-quote-disclaimer">
              By submitting, you agree to be contacted about your service request. We never share your data.
            </p>
          </div>
        ) : (
          <motion.div
            key="success"
            id="repair-quote-success-card"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="text-center py-4 flex flex-col justify-center items-center h-full min-h-[320px]"
          >
            <div className="w-[44px] h-[44px] rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-100 font-bold text-[18px]" id="repair-quote-success-icon">
              ✓
            </div>
            <h4 className="font-display font-bold text-[19px] text-navy mb-1.5" id="repair-quote-success-title">
              Request Received!
            </h4>
            <p className="text-[#5B6472] text-[13.5px] max-w-xs mx-auto leading-relaxed mb-5" id="repair-quote-success-desc">
              Thanks! Your service request has been received. We'll be in touch soon.
            </p>
            <p className="font-bold text-[14px] text-navy mb-2" id="repair-quote-success-subheading">
              Need immediate assistance?
            </p>
            <a
              href="tel:+13852084074"
              id="repair-quote-success-phone-btn"
              onClick={() => trackPhoneClick("RepairSuccess", "(385) 208-4074")}
              className="inline-flex items-center justify-center gap-2 font-display font-bold text-[14px] text-navy border border-line bg-white hover:border-navy px-5 py-3 rounded-[10px] transition-colors shadow-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange"
                id="repair-quote-success-phone-icon"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span id="repair-quote-success-phone-text">Call CPS: (385) 208-4074</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
