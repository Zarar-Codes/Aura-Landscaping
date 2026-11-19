import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Mail, RotateCcw } from 'lucide-react';
import { VERIFIED_CONTACT } from '../data/siteData';

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

const INITIAL_VALUES: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  message: '',
};

const PROJECT_TYPES = [
  'Custom Decks & Timber Structures',
  'Outdoor Patios & Stonework',
  'Backyard Transformation',
  'Outdoor Fireplace & Features',
  'Putting Green & Recreational Space',
  'Landscape Lighting & Softscaping',
  'Other Outdoor Project',
];

export const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoPrepared, setDemoPrepared] = useState(false);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (data.phone.trim()) {
      const digits = data.phone.replace(/\D/g, '');
      if (digits.length < 7) {
        nextErrors.phone = 'Please enter a valid phone number or leave blank.';
      }
    }

    if (!data.projectType) {
      nextErrors.projectType = 'Please select a project type.';
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
      nextErrors.message =
        'Please share a few details about your project (at least 10 characters).';
    }

    return nextErrors;
  };

  const handleChange = (
    field: keyof FormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  /**
   * Integration point: Replace this demo handler with a real API POST
   * (e.g. fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(values) }))
   * when connecting the site to a live backend or CRM.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setIsSubmitting(false);
    setDemoPrepared(true);
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `Outdoor Project Inquiry — ${values.projectType || 'Aura Landscaping'}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.fullName}`,
        `Email: ${values.email}`,
        values.phone ? `Phone: ${values.phone}` : null,
        `Project Type: ${values.projectType}`,
        values.location ? `Project Location: ${values.location}` : null,
        '',
        'Project Details:',
        values.message,
      ]
        .filter(Boolean)
        .join('\n')
    );
    return `${VERIFIED_CONTACT.emailHref}?subject=${subject}&body=${body}`;
  };

  if (demoPrepared) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border border-[#E9E9E5] p-8 sm:p-10"
      >
        <div className="flex items-center gap-3 text-[#354A36] mb-4">
          <CheckCircle2 className="w-5 h-5 shrink-0" strokeWidth={1.75} />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase">
            Concept Demo State · Validation Complete
          </span>
        </div>

        <h3 className="font-editorial text-3xl text-[#202020] leading-tight">
          Your project brief is ready.
        </h3>

        <p className="mt-3 text-sm text-[#777777] leading-relaxed">
          This website is a design concept without a live backend server
          connected, so your message has not been automatically transmitted. You
          can send this formatted inquiry directly to Aura Landscaping via your
          email application below.
        </p>

        <div className="mt-6 bg-[#F7F7F4] border border-[#E9E9E5] p-5 text-xs text-[#202020] space-y-2">
          <p>
            <span className="text-[#777777] uppercase tracking-wider mr-2">
              Name:
            </span>
            <span className="font-medium">{values.fullName}</span>
          </p>
          <p>
            <span className="text-[#777777] uppercase tracking-wider mr-2">
              Email:
            </span>
            <span className="font-medium">{values.email}</span>
          </p>
          <p>
            <span className="text-[#777777] uppercase tracking-wider mr-2">
              Project Type:
            </span>
            <span className="font-medium">{values.projectType}</span>
          </p>
          {values.location && (
            <p>
              <span className="text-[#777777] uppercase tracking-wider mr-2">
                Location:
              </span>
              <span className="font-medium">{values.location}</span>
            </p>
          )}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={buildMailtoHref()}
            className="inline-flex items-center gap-2.5 bg-[#D35400] hover:bg-[#C84B00] text-white px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase whitespace-nowrap shrink-0 transition-colors"
          >
            <Mail className="w-4 h-4" strokeWidth={1.75} />
            <span>Email info@auralandscaping.com</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setDemoPrepared(false);
              setValues(INITIAL_VALUES);
              setErrors({});
            }}
            className="inline-flex items-center gap-2 border border-[#E9E9E5] hover:border-[#202020] text-[#202020] px-5 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase whitespace-nowrap shrink-0 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.75} />
            <span>Reset Form</span>
          </button>
        </div>
      </div>
    );
  }

  const inputBase =
    'w-full bg-white border border-[#E9E9E5] px-4 py-3.5 text-sm text-[#202020] placeholder:text-[#777777]/70 transition-colors duration-200 focus:outline-none focus:border-[#D35400]';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#E9E9E5] p-7 sm:p-10 space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="contact-full-name"
            className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#202020] mb-2"
          >
            Full Name <span className="text-[#D35400]">*</span>
          </label>
          <input
            id="contact-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'error-full-name' : undefined}
            placeholder="Your full name"
            className={`${inputBase} ${
              errors.fullName ? 'border-[#C84B00]' : ''
            }`}
          />
          {errors.fullName && (
            <p
              id="error-full-name"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs text-[#C84B00]"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#202020] mb-2"
          >
            Email Address <span className="text-[#D35400]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? 'border-[#C84B00]' : ''}`}
          />
          {errors.email && (
            <p
              id="error-email"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs text-[#C84B00]"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#202020] mb-2"
          >
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            placeholder="(905) 555-0199"
            className={`${inputBase} ${errors.phone ? 'border-[#C84B00]' : ''}`}
          />
          {errors.phone && (
            <p
              id="error-phone"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs text-[#C84B00]"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="contact-project-type"
            className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#202020] mb-2"
          >
            Project Type <span className="text-[#D35400]">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            value={values.projectType}
            onChange={(e) => handleChange('projectType', e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? 'error-project-type' : undefined
            }
            className={`${inputBase} ${
              errors.projectType ? 'border-[#C84B00]' : ''
            }`}
          >
            <option value="">Select a project focus</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p
              id="error-project-type"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs text-[#C84B00]"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.projectType}</span>
            </p>
          )}
        </div>
      </div>

      {/* Project Location */}
      <div>
        <label
          htmlFor="contact-location"
          className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#202020] mb-2"
        >
          Project Location
        </label>
        <input
          id="contact-location"
          name="location"
          type="text"
          value={values.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="City or neighbourhood"
          className={inputBase}
        />
      </div>

      {/* Tell Us About Your Project */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#202020] mb-2"
        >
          Tell Us About Your Project <span className="text-[#D35400]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
          placeholder="Share your vision, key outdoor features, or questions..."
          className={`${inputBase} resize-y min-h-[120px] ${
            errors.message ? 'border-[#C84B00]' : ''
          }`}
        />
        {errors.message && (
          <p
            id="error-message"
            role="alert"
            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#C84B00]"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center justify-center gap-3 bg-[#D35400] hover:bg-[#C84B00] disabled:opacity-65 text-white px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap shrink-0 transition-all duration-200"
        >
          <span>{isSubmitting ? 'PREPARING INQUIRY...' : 'SEND INQUIRY'}</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={1.75}
          />
        </button>

        <p className="text-[11px] text-[#777777]">
          Interactive concept form · Validates &amp; prepares your inquiry
        </p>
      </div>
    </form>
  );
};
