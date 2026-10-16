import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Send,
  Loader2,
} from 'lucide-react';
import { BRANCHES, YEARS, TEAM_PREFERENCES, PERKS } from '../data/registrationData';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  branch: '',
  year: '',
  teamPreference: '',
  motivation: '',
};

export const JoinSacForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Validate a single field
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        if (!/^[a-zA-Z\s.'-]+$/.test(value)) return 'Name should contain letters only.';
        return '';

      case 'email': {
        if (!value.trim()) return 'Institutional email is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address.';
        // Optional hint if not institutional, but still allow valid emails with educational domain
        return '';
      }

      case 'phone': {
        if (!value.trim()) return 'Phone number is required.';
        // Clean digits
        const digits = value.replace(/\D/g, '');
        if (digits.length !== 10) return 'Phone number must be exactly 10 digits.';
        if (!/^[6-9]\d{9}$/.test(digits)) return 'Must be a valid 10-digit Indian mobile number.';
        return '';
      }

      case 'branch':
        if (!value) return 'Please select your academic branch.';
        return '';

      case 'year':
        if (!value) return 'Please select your current year of study.';
        return '';

      case 'teamPreference':
        if (!value) return 'Please select your preferred SAC team / council.';
        return '';

      case 'motivation':
        if (!value.trim()) return 'Please explain why you want to join SAC.';
        if (value.trim().length < 30)
          return `Please write at least 30 characters (${30 - value.trim().length} more needed).`;
        return '';

      default:
        return '';
    }
  };

  // Full validation check
  const validateForm = () => {
    const newErrors = {};
    Object.keys(INITIAL_FORM_STATE).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If field was already touched, validate in real time
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = Object.keys(INITIAL_FORM_STATE).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      const applicationId = `SAC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const submissionRecord = {
        ...formData,
        applicationId,
        submittedAt: new Date().toISOString(),
      };

      // Save to localStorage for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('sac_applications') || '[]');
        localStorage.setItem(
          'sac_applications',
          JSON.stringify([submissionRecord, ...existing])
        );
      } catch (err) {
        // localStorage might be blocked or full
        console.warn('LocalStorage save error:', err);
      }

      setIsSubmitting(false);
      setSubmittedData(submissionRecord);
    }, 1200);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setTouched({});
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div className="w-full">
      {/* SUCCESS CONFIRMATION VIEW */}
      {submittedData ? (
        <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-500/30 bg-neutral-950 p-6 sm:p-10 text-white shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 size={36} />
          </div>

          <div className="mt-5 text-center">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              Application Submitted Successfully
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              Welcome to the SAC Selection Pipeline!
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-white/70">
              Your application has been received by the SAC Directorate. You will
              receive an interview call on your institutional email.
            </p>
          </div>

          {/* Application Receipt Details */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Application ID
                </span>
                <div className="font-mono text-base font-bold text-[#00a3ff]">
                  {submittedData.applicationId}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Status
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <ShieldCheck size={14} /> Under Review
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
              <div>
                <span className="text-white/40">Applicant Name:</span>
                <div className="font-semibold text-white mt-0.5">{submittedData.name}</div>
              </div>
              <div>
                <span className="text-white/40">Institutional Email:</span>
                <div className="font-semibold text-white mt-0.5">{submittedData.email}</div>
              </div>
              <div>
                <span className="text-white/40">Contact Phone:</span>
                <div className="font-semibold text-white mt-0.5">+91 {submittedData.phone}</div>
              </div>
              <div>
                <span className="text-white/40">Branch & Year:</span>
                <div className="font-semibold text-white mt-0.5">
                  {submittedData.branch} • {submittedData.year}
                </div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-white/40">Team Preference:</span>
                <div className="font-semibold text-[#00a3ff] mt-0.5">
                  {TEAM_PREFERENCES.find((t) => t.id === submittedData.teamPreference)?.name ||
                    submittedData.teamPreference}
                </div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-white/40">Motivation Statement:</span>
                <p className="mt-1 rounded-lg bg-black/40 p-3 italic text-white/80 leading-relaxed">
                  "{submittedData.motivation}"
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-white/10"
            >
              <RotateCcw size={14} />
              <span>Submit Another Application</span>
            </button>
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-black transition-all hover:bg-neutral-200"
            >
              <span>Explore SAC Blogs</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      ) : (
        /* APPLICATION FORM VIEW */
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Form Details & Instructions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00a3ff]">
                <Sparkles size={14} />
                Recruitment 2026-27
              </span>
              <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Become a Pillar of Student Life
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-white/65">
                The Student Activity Cell represents over 2,000 students at GBPIET.
                We design campus fests, drive technical innovation, promote cultural
                heritage, and empower student initiatives.
              </p>

              {/* Perks list */}
              <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                {PERKS.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0084d1]/20 text-[#00a3ff] text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{perk.title}</h4>
                      <p className="text-[11px] text-white/50 leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support / Help Card */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 text-xs text-white/60">
              <div className="font-bold text-white">Have questions about teams?</div>
              <p className="mt-1">
                Reach out to the SAC helpdesk at{' '}
                <a
                  href="mailto:sac@gbpiet.ac.in"
                  className="text-[#0084d1] underline hover:text-[#00a3ff]"
                >
                  sac@gbpiet.ac.in
                </a>{' '}
                or visit the SAC office in the Old Admin Block.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Validated Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md"
            >
              <div className="border-b border-white/10 pb-5">
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  SAC Member Application Form
                </h3>
                <p className="mt-1 text-xs text-white/60">
                  Please fill all required fields carefully. Your responses will be reviewed
                  by the student council and faculty convenors.
                </p>
              </div>

              <div className="mt-6 space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="sac-name"
                    className="block text-xs font-bold uppercase tracking-wider text-white/80"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative mt-2">
                    <User
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      id="sac-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full rounded-xl border bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 transition-all focus:outline-none focus:ring-1 ${
                        touched.name && errors.name
                          ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                          : touched.name && !errors.name
                          ? 'border-emerald-500/70 focus:border-emerald-500 focus:ring-emerald-500'
                          : 'border-white/15 focus:border-[#0084d1] focus:ring-[#0084d1]'
                      }`}
                      aria-invalid={!!(touched.name && errors.name)}
                      aria-describedby={errors.name ? 'sac-name-error' : undefined}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p id="sac-name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Grid: Email & Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Institutional Email */}
                  <div>
                    <label
                      htmlFor="sac-email"
                      className="block text-xs font-bold uppercase tracking-wider text-white/80"
                    >
                      Institutional Email <span className="text-red-400">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Mail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <input
                        id="sac-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="student@gbpiet.ac.in"
                        className={`w-full rounded-xl border bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 transition-all focus:outline-none focus:ring-1 ${
                          touched.email && errors.email
                            ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                            : touched.email && !errors.email
                            ? 'border-emerald-500/70 focus:border-emerald-500 focus:ring-emerald-500'
                            : 'border-white/15 focus:border-[#0084d1] focus:ring-[#0084d1]'
                        }`}
                        aria-invalid={!!(touched.email && errors.email)}
                        aria-describedby={errors.email ? 'sac-email-error' : undefined}
                      />
                    </div>
                    {touched.email && errors.email ? (
                      <p id="sac-email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-white/40">
                        College or academic email preferred.
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="sac-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-white/80"
                    >
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Phone
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <input
                        id="sac-phone"
                        type="tel"
                        name="phone"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="10-digit mobile number"
                        className={`w-full rounded-xl border bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 transition-all focus:outline-none focus:ring-1 ${
                          touched.phone && errors.phone
                            ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                            : touched.phone && !errors.phone
                            ? 'border-emerald-500/70 focus:border-emerald-500 focus:ring-emerald-500'
                            : 'border-white/15 focus:border-[#0084d1] focus:ring-[#0084d1]'
                        }`}
                        aria-invalid={!!(touched.phone && errors.phone)}
                        aria-describedby={errors.phone ? 'sac-phone-error' : undefined}
                      />
                    </div>
                    {touched.phone && errors.phone ? (
                      <p id="sac-phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.phone}
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-white/40">
                        For WhatsApp updates and interview notifications.
                      </p>
                    )}
                  </div>
                </div>

                {/* Grid: Branch & Year */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Branch Selection */}
                  <div>
                    <label
                      htmlFor="sac-branch"
                      className="block text-xs font-bold uppercase tracking-wider text-white/80"
                    >
                      Engineering Branch <span className="text-red-400">*</span>
                    </label>
                    <div className="relative mt-2">
                      <GraduationCap
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <select
                        id="sac-branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full rounded-xl border bg-neutral-900 py-3 pl-10 pr-4 text-sm text-white transition-all focus:outline-none focus:ring-1 ${
                          touched.branch && errors.branch
                            ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                            : touched.branch && !errors.branch
                            ? 'border-emerald-500/70 focus:border-emerald-500 focus:ring-emerald-500'
                            : 'border-white/15 focus:border-[#0084d1] focus:ring-[#0084d1]'
                        }`}
                        aria-invalid={!!(touched.branch && errors.branch)}
                        aria-describedby={errors.branch ? 'sac-branch-error' : undefined}
                      >
                        <option value="">Select your branch</option>
                        {BRANCHES.map((b) => (
                          <option key={b.value} value={b.value}>
                            {b.label} ({b.value})
                          </option>
                        ))}
                      </select>
                    </div>
                    {touched.branch && errors.branch && (
                      <p id="sac-branch-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.branch}
                      </p>
                    )}
                  </div>

                  {/* Year Selection */}
                  <div>
                    <label
                      htmlFor="sac-year"
                      className="block text-xs font-bold uppercase tracking-wider text-white/80"
                    >
                      Year of Study <span className="text-red-400">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Calendar
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                      />
                      <select
                        id="sac-year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full rounded-xl border bg-neutral-900 py-3 pl-10 pr-4 text-sm text-white transition-all focus:outline-none focus:ring-1 ${
                          touched.year && errors.year
                            ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                            : touched.year && !errors.year
                            ? 'border-emerald-500/70 focus:border-emerald-500 focus:ring-emerald-500'
                            : 'border-white/15 focus:border-[#0084d1] focus:ring-[#0084d1]'
                        }`}
                        aria-invalid={!!(touched.year && errors.year)}
                        aria-describedby={errors.year ? 'sac-year-error' : undefined}
                      >
                        <option value="">Select current year</option>
                        {YEARS.map((y) => (
                          <option key={y.value} value={y.value}>
                            {y.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {touched.year && errors.year && (
                      <p id="sac-year-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} />
                        {errors.year}
                      </p>
                    )}
                  </div>
                </div>

                {/* Team Preference Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80">
                    Team Preference <span className="text-red-400">*</span>
                  </label>
                  <p className="mt-1 text-xs text-white/50">
                    Choose the primary council or domain you are excited to contribute to.
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {TEAM_PREFERENCES.map((team) => {
                      const isSelected = formData.teamPreference === team.id;
                      return (
                        <label
                          key={team.id}
                          className={`relative flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all duration-200 ${
                            isSelected
                              ? 'border-[#0084d1] bg-[#0084d1]/10 shadow-[0_0_15px_rgba(0,132,209,0.2)]'
                              : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="teamPreference"
                            value={team.id}
                            checked={isSelected}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="mt-1 h-4 w-4 text-[#0084d1] focus:ring-[#0084d1]"
                          />
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-white">
                              {team.name}
                            </div>
                            <div className="mt-1 text-[11px] leading-relaxed text-white/55">
                              {team.description}
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  {touched.teamPreference && errors.teamPreference && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.teamPreference}
                    </p>
                  )}
                </div>

                {/* Motivation Statement */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="sac-motivation"
                      className="block text-xs font-bold uppercase tracking-wider text-white/80"
                    >
                      Motivation & Why SAC? <span className="text-red-400">*</span>
                    </label>
                    <span
                      className={`text-[11px] font-mono ${
                        formData.motivation.trim().length >= 30
                          ? 'text-emerald-400'
                          : 'text-amber-400/80'
                      }`}
                    >
                      {formData.motivation.trim().length} / 30 min chars
                    </span>
                  </div>

                  <div className="relative mt-2">
                    <textarea
                      id="sac-motivation"
                      name="motivation"
                      rows={4}
                      value={formData.motivation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Share your background, relevant skills, past society experiences, and what you hope to achieve as a member of SAC..."
                      className={`w-full rounded-xl border bg-white/[0.04] p-4 text-sm text-white placeholder-white/30 transition-all focus:outline-none focus:ring-1 ${
                        touched.motivation && errors.motivation
                          ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                          : touched.motivation && !errors.motivation
                          ? 'border-emerald-500/70 focus:border-emerald-500 focus:ring-emerald-500'
                          : 'border-white/15 focus:border-[#0084d1] focus:ring-[#0084d1]'
                      }`}
                      aria-invalid={!!(touched.motivation && errors.motivation)}
                      aria-describedby={errors.motivation ? 'sac-motivation-error' : undefined}
                    />
                  </div>
                  {touched.motivation && errors.motivation && (
                    <p id="sac-motivation-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.motivation}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0084d1] to-[#00a3ff] py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-900/30 transition-all duration-200 hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Verifying & Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                  <p className="mt-2.5 text-center text-[11px] text-white/40">
                    By submitting, you agree to uphold the SAC Code of Conduct and represent GBPIET with integrity.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinSacForm;
