import { useState, ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { submitLead } from "../lib/submitLead";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "+1 ",
    subject: "",
    lookForNewService: "Yes",
    notes: "",
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.companyName.trim()) {
        newErrors.companyName = "Company name is required";
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
    } else if (currentStep === 3) {
      if (!formData.subject.trim()) {
        newErrors.subject = "Subject is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      handleNext();
      return;
    }
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitLead({
        companyName: formData.companyName,
        lookForNewService: formData.lookForNewService as "Yes" | "No",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.notes,
      });
      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Error submitting lead to Supabase:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to submit quote request. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="bg-white border border-line rounded-[18px] p-6 sm:p-[30px] shadow-[0_12px_40px_rgba(8,26,55,0.08)] relative max-w-lg w-full mx-auto flex flex-col justify-between min-h-[380px] scroll-mt-24"
      id="quote"
    >
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <div className="flex flex-col h-full justify-between">
            <div>
              {/* Header */}
              <div className="text-left mb-4">
                <h3 className="font-display font-bold text-[19px] sm:text-[21px] text-navy mb-1" id="quote-title">
                  Get a Free Quote
                </h3>
                <p className="text-[#5B6472] text-[13px]">
                  Tell us about your space — no obligation.
                </p>
              </div>

              {/* Progress Tracker */}
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange">Step {step} of 3</span>
                  <span className="text-[11.5px] font-semibold text-[#5B6472]">
                    {step === 1 && "Space Details"}
                    {step === 2 && "Contact Information"}
                    {step === 3 && "Special Requests"}
                  </span>
                </div>
                <div className="w-full bg-[#EAF0F8] h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-orange h-full"
                    initial={{ width: "33%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-[16px]"
                    >
                      {/* Company Name */}
                      <div className="form-group text-left">
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          placeholder="Company Name"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.companyName ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                        )}
                      </div>

                      {/* Look For New Service */}
                      <div className="form-group text-left pt-2 pb-1">
                        <label className="block text-[13px] font-bold text-navy mb-2.5 uppercase tracking-[0.03em]">
                          LOOK FOR A NEW SERVICE
                        </label>
                        <div className="flex gap-[28px]">
                          <label className="flex items-center gap-[8px] cursor-pointer text-[14.5px] text-navy font-semibold select-none group">
                            <input
                              type="radio"
                              name="lookForNewService"
                              value="Yes"
                              checked={formData.lookForNewService === "Yes"}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`relative w-[18px] h-[18px] rounded-full border-[1.5px] transition-all duration-200 ${
                              formData.lookForNewService === "Yes"
                                ? "border-[#E05A10] bg-white"
                                : "border-slate-300 bg-white group-hover:border-slate-400"
                            }`}>
                              {formData.lookForNewService === "Yes" && (
                                <div className="absolute inset-0 m-auto w-[10px] h-[10px] rounded-full bg-[#E05A10]" />
                              )}
                            </div>
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-[8px] cursor-pointer text-[14.5px] text-navy font-semibold select-none group">
                            <input
                              type="radio"
                              name="lookForNewService"
                              value="No"
                              checked={formData.lookForNewService === "No"}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`relative w-[18px] h-[18px] rounded-full border-[1.5px] transition-all duration-200 ${
                              formData.lookForNewService === "No"
                                ? "border-[#E05A10] bg-white"
                                : "border-slate-300 bg-white group-hover:border-slate-400"
                            }`}>
                              {formData.lookForNewService === "No" && (
                                <div className="absolute inset-0 m-auto w-[10px] h-[10px] rounded-full bg-[#E05A10]" />
                              )}
                            </div>
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-[14px]"
                    >
                      {/* Name */}
                      <div className="form-group text-left">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Name"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.name ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="form-group text-left">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Email"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.email ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="form-group text-left">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Phone"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.phone ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-[16px]"
                    >
                      {/* Subject */}
                      <div className="form-group text-left">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="Subject"
                          className={`w-full border-[1.5px] rounded-[10px] px-[12px] py-[10.5px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 ${
                            errors.subject ? "border-red-500" : "border-line"
                          }`}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                        )}
                      </div>

                      {/* Comment/Message */}
                      <div className="form-group text-left">
                        <textarea
                          id="notes"
                          name="notes"
                          rows={4}
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="Comment/Message"
                          className="w-full border-[1.5px] border-line rounded-[10px] px-[12px] py-[11px] text-[14.5px] font-sans text-navy outline-none bg-white transition duration-150 focus:border-orange focus:ring-3 focus:ring-orange/12 resize-none h-[120px]"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {submitError && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[10px] text-red-600 text-[13px] text-left">
                    {submitError}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-6">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-[12px] text-[14px] font-display font-bold text-navy border border-line hover:bg-slate-50 rounded-[10px] transition-all cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none"
                    >
                      ← Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-[12px] text-[14px] font-display font-bold text-white bg-orange hover:bg-orange-dark rounded-[10px] shadow-sm shadow-orange/12 transition-all cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-[12px] text-[14px] font-display font-bold text-white bg-orange hover:bg-orange-dark rounded-[10px] shadow-sm shadow-orange/12 transition-all cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-85 focus:outline-none"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <span>Get Free Quote ✓</span>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>

            <p className="text-[10px] text-[#5B6472] text-center mt-4 leading-normal">
              By submitting, you agree to be contacted about your request. We never share your data.
            </p>
          </div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="text-center py-4 flex flex-col justify-center items-center h-full min-h-[320px]"
          >
            <div className="w-[44px] h-[44px] rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-100 font-bold text-[18px]">
              ✓
            </div>
            <h4 className="font-display font-bold text-[19px] text-navy mb-1.5">
              Thanks — we've got it!
            </h4>
            <p className="text-[#5B6472] text-[13.5px] max-w-xs mx-auto leading-relaxed mb-5">
              A member of our local Utah team will reach out shortly to discuss your custom vending solution.
            </p>
            <p className="font-bold text-[14px] text-navy mb-2">
              Prefer to talk now?
            </p>
            <a 
              href="tel:+13852084074" 
              className="inline-flex items-center justify-center gap-2 font-display font-bold text-[14px] text-navy border border-line bg-white hover:border-navy px-5 py-3 rounded-[10px] transition-colors shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call (385) 208-4074</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
