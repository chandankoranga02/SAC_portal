import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Users, Calendar } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00629b]/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
            <Sparkles size={14} className="text-[#0084d1]" />
            <span>Student Activity Center • GBPIET</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Innovate, Collaborate,{' '}
            <span className="bg-gradient-to-r from-[#0084d1] via-[#00a3ff] to-cyan-300 bg-clip-text text-transparent">
              Elevate
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Empowering students of GBPIET through vibrant societies, cultural fests,
            technical symposiums, sports meets, and hands-on community projects.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/registration"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00629b] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(0,98,155,0.4)] transition-all hover:bg-[#0084d1] hover:shadow-[0_0_35px_rgba(0,98,155,0.6)]"
            >
              <span>Join SAC Clubs</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/certificate"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              <Award size={16} className="text-[#00a3ff]" />
              <span>Verify Certificate</span>
            </Link>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[#00629b]/50 hover:bg-white/[0.06]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00629b]/20 text-[#00a3ff]">
              <Calendar size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Events & Workshops</h3>
            <p className="mt-2 text-sm text-white/60">
              Inter-college cultural fests, hackathons, robotics challenges, and guest lectures.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[#00629b]/50 hover:bg-white/[0.06]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00629b]/20 text-[#00a3ff]">
              <Users size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Clubs & Councils</h3>
            <p className="mt-2 text-sm text-white/60">
              Explore music, dance, dramatics, photography, coding, robotics, and literary societies.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-[#00629b]/50 hover:bg-white/[0.06]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00629b]/20 text-[#00a3ff]">
              <Award size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Certified Credentials</h3>
            <p className="mt-2 text-sm text-white/60">
              Receive verified participation and merit certificates authenticated by the SAC committee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
