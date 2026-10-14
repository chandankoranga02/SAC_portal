import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  X,
  ChevronRight,
} from 'lucide-react';

const DISPATCHES_DATA = [
  {
    id: 'sac-budget-2026-27',
    referenceNo: 'CIRCULAR NO. SAC/ADM/2026/089',
    title: 'Sanction of Annual Activity Grants & Capital Equipment Procurement for FY 2026-27',
    date: 'October 12, 2026',
    category: 'circular',
    categoryLabel: 'Official Circular',
    readTime: '3 min read',
    isLead: true,
    priority: 'Mandatory',
    summary:
      'The competent authority has approved an aggregate sum of ₹15.80 Lakhs for council operations, including high-torque servo motors for RADS, digital audio mixers for the amphitheatre, and travel sponsorships for inter-collegiate fests.',
    fullContent: [
      'Pursuant to the Finance & Audit Committee meeting convened under the chairmanship of Dean (Student Welfare) on 10th October 2026, the Student Activity Cell hereby notifies the budgetary sanctions for the Financial Year 2026-27.',
      'A grant of ₹15,80,000/- has been officially designated across the five operational councils. The Technical Council receives ₹5,20,000 for server infrastructure, cloud compute credits, and rover components; Cultural Council receives ₹4,80,000 for Goonj acoustic setup; Sports Council receives ₹3,40,000 for ground modernization; and Literary & Innovation cells receive ₹2,40,000.',
      'All society conveners are instructed to present itemized expenditure bills certified by their respective Faculty Mentors within 14 working days of event completion.',
    ],
    signatory: {
      name: 'Prof. (Dr.) Sanjeev Naithani',
      designation: 'Dean, Student Welfare & Chairman SAC',
      office: 'Office of Student Affairs, GBPIET Pauri Garhwal',
    },
  },
  {
    id: 'sac-elections-2026',
    referenceNo: 'NOTIFICATION NO. SAC/ELEC/2026/014',
    title: 'Student Senate & Council Leadership Elections: Nomination Schedule & Model Code',
    date: 'October 10, 2026',
    category: 'circular',
    categoryLabel: 'Governance & Senate',
    readTime: '4 min read',
    priority: 'High Priority',
    summary:
      'Nomination windows open for Student President, Vice-President, Cultural Secretary, Technical Secretary, and Branch Representatives.',
    fullContent: [
      'The Election Commission of SAC announces the commencement of the election process for the Student Senate for the 2026-27 session.',
      'Filing of nominations begins on October 16 at the SAC Administrative Wing. Candidates must maintain a minimum CGPA of 7.5 with zero active backlogs and demonstrated leadership tenure in recognized societies.',
      'The presidential debate and general hustings are slated for October 24 at the Central Amphitheatre under strict adherence to the Lyngdoh Committee recommendations.',
    ],
    signatory: {
      name: 'Dr. Yatindra Kumar',
      designation: 'Chief Returning Officer & Faculty In-Charge',
      office: 'Student Activity Cell, GBPIET',
    },
  },
  {
    id: 'goonj-core-recruitment',
    referenceNo: 'CALL FOR TEAMS NO. SAC/FEST/2026/04',
    title: 'Recruitment of Core Student Organizing Committee for National Fest Goonj 2026',
    date: 'October 07, 2026',
    category: 'opportunity',
    categoryLabel: 'Campus Opportunity',
    readTime: '2 min read',
    priority: 'Campus News',
    summary:
      'Applications invited from 2nd, 3rd, and 4th-year students to lead Sponsorships, Artist Management, Web Operations, and Media Relations.',
    fullContent: [
      'The central organizing committee for Goonj 2026 is assembling its leadership verticals. Roles are open across Corporate Outreach, Stage Engineering, Live Sound, Hospitality, and Design & Branding.',
      'Shortlisted applicants will participate in panel interviews with former festival conveners and faculty mentors. Selected members will receive official organizing credentials and letters of commendation.',
    ],
    signatory: {
      name: 'Ayush Bisht & SAC Core Executives',
      designation: 'Lead Student Conveners, Goonj 2026',
      office: 'Fest Directorate, Student Activity Cell',
    },
  },
  {
    id: 'rads-national-rover-win',
    referenceNo: 'COMMENDATION NO. SAC/ACHV/2026/19',
    title: 'RADS Robotics Society Secures 2nd Position at National Himalayan Rover Conclave',
    date: 'October 03, 2026',
    category: 'achievement',
    categoryLabel: 'Excellence & Honors',
    readTime: '2 min read',
    priority: 'Campus News',
    summary:
      'The 8-member multidisciplinary engineering team engineered an autonomous alpine traverse rover capable of mapping 45-degree slope gradients.',
    fullContent: [
      'The SAC proudly commends the team from the Robotics & Aero-Design Society (RADS) for securing the 1st Runner-Up trophy and a cash prize of ₹50,000 at the Inter-NIT/IIT Himalayan Tech Summit.',
      'The vehicle featured stereoscopic SLAM navigation, a custom 4-DOF robotic arm, and telemetry links operating over a 3-kilometer line of sight. The prototype was developed entirely inside the SAC Innovation Lab.',
    ],
    signatory: {
      name: 'Er. Sandeep Kumar',
      designation: 'Faculty Mentor, RADS Robotics',
      office: 'Department of Electronics & Communication Engineering',
    },
  },
  {
    id: 'winter-trek-advisory',
    referenceNo: 'SAFETY ADVISORY NO. SAC/ADV/2026/02',
    title: 'Winter Alpine Trek 2026: Mandatory Medical Fitness & Safety Protocols',
    date: 'September 29, 2026',
    category: 'advisory',
    categoryLabel: 'Safety & Advisory',
    readTime: '3 min read',
    priority: 'Mandatory',
    summary:
      'The Himalayan Mountaineering Club issues mandatory acclimatization drills and cold-weather clothing checklist for the Chandrashila Winter Expedition.',
    fullContent: [
      'Participants confirmed for the high-altitude winter expedition to Tungnath & Chandrashila (13,100 ft) must undergo physical fitness screening at the Institute Health Center between Nov 10 and Nov 15.',
      'All participants are required to furnish parental consent forms and adhere strictly to zero-waste leave-no-trace protocols in protected reserve forests.',
    ],
    signatory: {
      name: 'Capt. R. S. Bhandari',
      designation: 'Adventure Sports Officer',
      office: 'Sports & Adventure Wing, SAC GBPIET',
    },
  },
];

export const LatestFromSAC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMemo, setActiveMemo] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All' },
    { key: 'circular', label: 'Circulars' },
    { key: 'opportunity', label: 'Opportunities' },
    { key: 'achievement', label: 'Achievements' },
    { key: 'advisory', label: 'Advisories' },
  ];

  const filteredDispatches = useMemo(() => {
    if (activeCategory === 'all') return DISPATCHES_DATA;
    return DISPATCHES_DATA.filter((d) => d.category === activeCategory);
  }, [activeCategory]);

  const leadDispatch = useMemo(() => {
    return filteredDispatches.find((d) => d.isLead) || filteredDispatches[0];
  }, [filteredDispatches]);

  const secondaryDispatches = useMemo(() => {
    if (!leadDispatch) return filteredDispatches;
    return filteredDispatches.filter((d) => d.id !== leadDispatch.id);
  }, [filteredDispatches, leadDispatch]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeMemo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMemo]);

  // Keyboard: Escape closes modal
  useEffect(() => {
    if (!activeMemo) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveMemo(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeMemo]);

  return (
    <section id="dispatches" className="relative bg-black py-14 sm:py-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 sm:text-xs">
              03 / Notices
            </p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              Latest from SAC
            </h2>
          </div>

          <Link
            to="/blogs"
            className="group inline-flex items-center gap-1 text-xs font-semibold text-white/50 transition-colors hover:text-white sm:text-sm"
          >
            <span>View all</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Category Filter Pills — horizontally scrollable on mobile */}
        <div className="-mx-4 mt-5 overflow-x-auto px-4 sm:-mx-0 sm:mt-6 sm:overflow-visible sm:px-0">
          <div className="flex items-center gap-1.5 pb-1 sm:flex-wrap sm:gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-200 sm:px-3.5 sm:py-1.5 sm:text-xs ${
                    isActive
                      ? 'bg-white text-black font-bold'
                      : 'text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-label={`Filter by ${tab.label}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Layout: Featured + Secondary */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 lg:grid-cols-12 lg:gap-6">
          {/* =========================================
              FEATURED NOTICE (Left column)
              ========================================= */}
          {leadDispatch && (
            <div className="lg:col-span-7">
              <div
                className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 sm:rounded-2xl sm:p-6 lg:p-7"
              >
                {/* Category + Date */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
                  <span className="rounded bg-[#00a3ff]/10 px-2 py-0.5 text-[10px] font-bold text-[#00a3ff] sm:text-[11px]">
                    {leadDispatch.categoryLabel}
                  </span>
                  {leadDispatch.priority && (
                    <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-400 sm:text-[11px]">
                      {leadDispatch.priority}
                    </span>
                  )}
                  <span className="text-white/40">•</span>
                  <span className="text-white/50">{leadDispatch.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-white sm:text-xl lg:text-2xl line-clamp-3">
                  {leadDispatch.title}
                </h3>

                {/* Summary — 1-2 lines max */}
                <p className="mt-2.5 text-sm leading-relaxed text-white/60 line-clamp-2">
                  {leadDispatch.summary}
                </p>

                {/* Spacer to push CTA to bottom */}
                <div className="flex-1" />

                {/* CTA */}
                <button
                  onClick={() => setActiveMemo(leadDispatch)}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-[11px] font-bold text-black transition-all hover:bg-neutral-200 sm:text-xs"
                >
                  <span>Read notice</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          )}

          {/* =========================================
              SECONDARY NOTICES (Right column)
              ========================================= */}
          <div className="flex flex-col gap-2 lg:col-span-5 sm:gap-3">
            {secondaryDispatches.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMemo(item)}
                className="group flex w-full items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 text-left transition-all duration-200 hover:border-white/15 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:gap-4 sm:p-5"
              >
                <div className="min-w-0 flex-1">
                  {/* Category + Date row */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px]">
                    <span className="rounded bg-white/[0.08] px-1.5 py-0.5 font-medium text-white/60">
                      {item.categoryLabel}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/40">{item.date}</span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-1.5 text-sm font-semibold leading-snug text-white/90 line-clamp-2 transition-colors group-hover:text-white">
                    {item.title}
                  </h4>
                </div>

                {/* Arrow */}
                <div className="mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/30 transition-all group-hover:bg-white/10 group-hover:text-white/70">
                  <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          NOTICE MODAL
          ========================================================= */}
      {activeMemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 backdrop-blur-md bg-black/85 sm:p-4"
          onClick={() => setActiveMemo(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-white/15 bg-neutral-950 text-white shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveMemo(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-neutral-900/80 text-white/60 transition-colors hover:border-white/30 hover:text-white sm:top-4 sm:right-4 sm:h-9 sm:w-9"
              aria-label="Close notice"
            >
              <X size={16} />
            </button>

            {/* Modal content */}
            <div className="p-5 sm:p-6 lg:p-8">
              {/* Letterhead */}
              <div className="border-b border-white/10 pb-4 text-center">
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/35 sm:text-[11px]">
                  Govind Ballabh Pant Institute of Engineering & Technology
                </div>
                <h3 className="mt-1 text-sm font-bold tracking-tight text-white sm:text-base">
                  Student Activity Cell (SAC)
                </h3>
                <p className="text-[10px] text-white/40 sm:text-[11px]">
                  Pauri Garhwal, Uttarakhand 246194
                </p>
              </div>

              {/* Reference & Date */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
                <div>
                  <span className="text-white/40">Ref: </span>
                  <span className="font-mono font-bold text-[#00a3ff]">{activeMemo.referenceNo}</span>
                </div>
                <div>
                  <span className="text-white/40">Date: </span>
                  <span className="font-medium text-white/80">{activeMemo.date}</span>
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 sm:text-[11px]">
                  Subject
                </div>
                <h4 className="mt-1 text-base font-bold leading-snug text-white sm:text-lg">
                  {activeMemo.title}
                </h4>
              </div>

              {/* Body */}
              <div className="mt-5 space-y-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                {activeMemo.fullContent.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Signatory */}
              <div className="mt-7 border-t border-white/10 pt-4">
                <div className="text-[9px] uppercase tracking-wider text-white/30 sm:text-[10px]">
                  By Order of the Competent Authority
                </div>
                <div className="mt-2 text-sm font-bold text-white">
                  {activeMemo.signatory.name}
                </div>
                <div className="text-xs text-white/55">
                  {activeMemo.signatory.designation}
                </div>
                <div className="text-[11px] text-white/35">
                  {activeMemo.signatory.office}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] text-white/30 sm:text-[11px]">
                  {activeMemo.categoryLabel}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveMemo(null)}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-[11px] font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white/80 sm:text-xs"
                  >
                    Close
                  </button>
                  <Link
                    to="/blogs"
                    className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-[11px] font-bold text-black transition-colors hover:bg-neutral-200 sm:text-xs"
                  >
                    <span>Archives</span>
                    <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestFromSAC;
