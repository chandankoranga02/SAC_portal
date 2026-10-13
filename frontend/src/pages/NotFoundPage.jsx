import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center text-white">
      <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#00629b]/15 blur-[100px]" />
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#00a3ff]">
        Error 404
      </span>
      <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-white/60 sm:text-base">
        The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#00629b] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,98,155,0.4)] transition-all hover:bg-[#0084d1]"
        >
          <Home size={16} />
          <span>Back to Home</span>
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
