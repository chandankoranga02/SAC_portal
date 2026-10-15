import React from "react";
import aboutUsData from "./data/aboutUsData";

const AboutUsPage = () => {
  const { introduction, mission, objectives, engagement, activities, participation } =
    aboutUsData;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero section */}
      <section className="px-5 py-20 text-center sm:py-28">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sky-400">
          Student Activity Center
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          {introduction.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {introduction.description}
        </p>

        <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-sky-400" />
      </section>

      {/* Mission */}
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
            Our Purpose
          </p>
          <h2 className="mt-3 text-2xl font-bold">{mission.title}</h2>
          <p className="mt-4 leading-7 text-slate-300">
            {mission.description}
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
            Our Objectives
          </p>
          <h2 className="mt-3 text-2xl font-bold">What We Aim For</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {objectives.map((objective, index) => (
              <li key={index} className="flex gap-3 leading-6">
                <span className="text-sky-400">✓</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Student engagement */}
      <section className="bg-slate-900 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
            Beyond the Classroom
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            {engagement.title}
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            {engagement.description}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-400/60"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-xl text-sky-400">
                  ✦
                </div>
                <h3 className="text-xl font-bold">{activity.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Participation */}
      <section className="px-5 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-sky-400/20 bg-sky-400/5 p-8 sm:p-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {participation.title}
          </h2>
          <p className="mt-5 leading-7 text-slate-300">
            {participation.description}
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
