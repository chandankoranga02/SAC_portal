import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#00a3ff]">
            <FileText size={14} />
            <span>Guidelines & Terms</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Terms & <span className="text-[#0084d1]">Conditions</span>
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Student Code of Conduct & Activity Center Portal Guidelines
          </p>
        </div>

        <div className="mt-10 space-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/80 backdrop-blur-xl sm:p-10">
          <section>
            <h2 className="text-lg font-bold text-white">1. Eligibility & Representation</h2>
            <p className="mt-2 text-white/70">
              Only bonafide students, faculty advisors, and authorized staff of Govind Ballabh Pant Institute of Engineering & Technology are eligible to participate in registered SAC clubs, councils, and intra-college fests.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">2. Code of Conduct</h2>
            <p className="mt-2 text-white/70">
              All students must uphold mutual respect, discipline, and anti-ragging policies both within the SAC premises and across all digital communication forums, workshops, and team initiatives.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">3. Certificate Credential Integrity</h2>
            <p className="mt-2 text-white/70">
              Certificates issued by SAC GBPIET are non-transferable and subject to revocation if forged or claimed through illegitimate registrations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
