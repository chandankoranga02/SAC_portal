import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Lock, Mail, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication placeholder
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black px-4 py-12 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00629b]/20 blur-[130px]" />

      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#00629b]/25 text-[#00a3ff]">
            <LogIn size={24} />
          </div>
          <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
            SAC <span className="text-[#0084d1]">GBPIET</span>
          </h1>
          <p className="mt-1.5 text-xs uppercase tracking-widest text-white/40">
            Student Activity Center Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-white/70">
              Email Address
            </label>
            <div className="relative mt-1.5">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@gbpiet.ac.in"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#0084d1]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-white/70">
              Password
            </label>
            <div className="relative mt-1.5">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#0084d1]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-white/60">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-white/20 bg-white/5" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="hover:text-white transition-colors">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00629b] py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,98,155,0.4)] transition-all hover:bg-[#0084d1]"
          >
            <LogIn size={16} />
            <span>Sign In</span>
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/50">
          Don't have an account?{' '}
          <Link to="/registration" className="font-medium text-[#00a3ff] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
