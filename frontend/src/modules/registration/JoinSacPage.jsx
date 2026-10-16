import React from 'react';
import JoinSacForm from './components/JoinSacForm';

export const JoinSacPage = () => {
  return (
    <main className="min-h-screen bg-black px-4 py-14 text-white sm:px-6 lg:px-8">
      {/* Hero Header */}
      <section className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00a3ff]">
          Student Activity Cell • GBPIET
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Join <span className="text-[#0084d1]">SAC GBPIET</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Become part of the central student body driving culture, technology, sports,
          publications, and leadership across campus.
        </p>
        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#0084d1]" />
      </section>

      {/* Validated Application Form */}
      <section className="mx-auto max-w-7xl">
        <JoinSacForm />
      </section>
    </main>
  );
};

export default JoinSacPage;
