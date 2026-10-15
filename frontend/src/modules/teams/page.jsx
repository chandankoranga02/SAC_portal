import React from "react";
import teamsData from "./data/teamsData";

const TeamsPage = () => {
  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white sm:px-8">
      <header className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-400">
          Student Activity Cell · GBPIET
        </p>

        <h1 className="mt-4 text-4xl font-extrabold sm:text-6xl">
          Meet Our Clubs
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
          Discover the student clubs and communities featured on the SAC
          website. Member profiles will be added as verified information
          becomes available.
        </p>

        <p className="mt-5 text-sm text-slate-400">
          {teamsData.length} clubs
        </p>
      </header>

      <section className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamsData.map((team) => (
          <article
            key={team.id}
            className="flex min-h-52 flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-sky-400/50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-xl text-sky-400">
              ✦
            </div>

            <h2 className="mt-5 text-xl font-bold">{team.name}</h2>

            {team.description ? (
              <p className="mt-2 leading-6 text-slate-300">
                {team.description}
              </p>
            ) : (
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Club information and member profiles will be added after
                verification.
              </p>
            )}

            {team.members.length > 0 && (
              <p className="mt-4 text-sm text-sky-400">
                {team.members.length} listed members
              </p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
};

export default TeamsPage;
