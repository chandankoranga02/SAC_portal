import React, { useState } from 'react';
import { AlertCircle, Send, CheckCircle2 } from 'lucide-react';

export default function ComplainPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    email: '',
    category: 'Facility',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3.5 py-1 text-xs font-semibold text-red-400">
            <AlertCircle size={14} />
            <span>SAC Grievance Redressal</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Lodge a <span className="text-[#0084d1]">Complaint</span>
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Encountering issues with activity center resources, clubs, or events? Submit your concern directly to the SAC committee.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center backdrop-blur-md">
            <CheckCircle2 size={40} className="mx-auto text-emerald-400" />
            <h3 className="mt-4 text-xl font-bold text-white">Complaint Lodged Successfully</h3>
            <p className="mt-2 text-sm text-white/70">
              Your grievance has been forwarded to the SAC GBPIET disciplinary and grievance committee. We will review it shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-xl bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              Submit Another Concern
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#0084d1]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Student Roll / Reg No.</label>
                <input
                  type="text"
                  required
                  value={formData.rollNo}
                  onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                  placeholder="e.g. 21001015001"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#0084d1]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Official Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@gbpiet.ac.in"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#0084d1]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#0084d1]"
                >
                  <option value="Facility" className="bg-black text-white">Facility / Equipment</option>
                  <option value="Event" className="bg-black text-white">Event / Competition Issue</option>
                  <option value="Club" className="bg-black text-white">Club / Society Conduct</option>
                  <option value="Certificate" className="bg-black text-white">Certificate Discrepancy</option>
                  <option value="Other" className="bg-black text-white">Other Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-white/70">Complaint Details</label>
              <textarea
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your issue in detail..."
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#0084d1]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00629b] py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,98,155,0.4)] transition-all hover:bg-[#0084d1]"
            >
              <Send size={16} />
              <span>Submit Complaint</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
