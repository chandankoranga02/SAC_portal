import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#00a3ff]">
            <ShieldCheck size={14} />
            <span>Legal & Privacy</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Privacy <span className="text-[#0084d1]">Policy</span>
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Last updated: October 2026 • Student Activity Center (SAC), GBPIET
          </p>
        </div>

        <div className="mt-10 space-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-white/80 backdrop-blur-xl sm:p-10">
          <section>
            <h2 className="text-lg font-bold text-white">1. Information Collection</h2>
            <p className="mt-2 text-white/70">
              SAC GBPIET collects personal details such as student name, official college email, roll number, department branch, and participation records strictly for membership registration, event enrollments, and credential issuance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">2. Use of Information</h2>
            <p className="mt-2 text-white/70">
              Your details are used solely to facilitate student activities, workshops, competitions, certificate generation, and emergency communications regarding SAC events. We do not sell or lease student data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">3. Certificate Verification & Records</h2>
            <p className="mt-2 text-white/70">
              Verified digital certificate IDs issued through SAC GBPIET are archived to allow authentic credential verification by recruiters, institutions, and verifying authorities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">4. Contact Us</h2>
            <p className="mt-2 text-white/70">
              For privacy inquiries or data update requests, please email us at{' '}
              <a href="mailto:sac@gbpiet.ac.in" className="text-[#00a3ff] underline">
                sac@gbpiet.ac.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
