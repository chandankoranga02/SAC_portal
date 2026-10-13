import React from 'react';
import { Users, Award, Mail } from 'lucide-react';

export default function TeamsPage() {
  const teamMembers = [
    {
      name: 'SAC Convener',
      role: 'Faculty Advisory Board',
      department: 'GBPIET Faculty',
    },
    {
      name: 'Student President',
      role: 'Student Activity Cell Executive',
      department: 'Final Year Representative',
    },
    {
      name: 'General Secretary',
      role: 'Council Lead & Events',
      department: 'Student Affairs',
    },
    {
      name: 'Technical Head',
      role: 'Coding & Robotics Coordinator',
      department: 'Engineering Societies',
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0084d1]/20 bg-[#00629b]/10 px-3.5 py-1 text-xs font-semibold text-[#00a3ff]">
          <Users size={14} />
          <span>Student Activity Cell Leadership</span>
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Meet Our <span className="text-[#0084d1]">Team</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          The dedicated student coordinators and faculty council leading co-curricular activities,
          annual fests, and student welfare at GBPIET.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all hover:border-[#0084d1]/40 hover:bg-white/[0.06]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00629b]/20 text-[#00a3ff] group-hover:scale-105 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">{member.name}</h3>
              <p className="mt-1 text-xs font-medium text-[#0084d1]">{member.role}</p>
              <p className="mt-2 text-xs text-white/50">{member.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
