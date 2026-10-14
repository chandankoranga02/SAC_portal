import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, ArrowLeft, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black px-4 py-12 text-white">
      {/* Background subtle monochrome ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[150px]" />

      <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl border border-white/10 bg-neutral-950/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        {/* Brand & Logo Header - Free and Unencapsulated */}
        <div className="text-center">
          <Link to="/" className="inline-block transition-transform duration-200 hover:scale-105">
            <img
              src="/Logo/SacLogo.jpg"
              alt="SAC GBPIET Logo"
              className="mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </Link>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Welcome Back
          </h1>
          <p className="mt-1 text-xs text-white/50">
            Sign in to access your SAC GBPIET student portal
          </p>
        </div>

        {/* Clean, Simple Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-medium text-white/70">
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
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-white/40 focus:bg-white/[0.08]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-xs font-medium text-white/70">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative mt-1.5">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-white/40 focus:bg-white/[0.08]"
              />
            </div>
          </div>

          <div className="flex items-center text-xs text-white/60 pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/10 text-white focus:ring-0 focus:ring-offset-0"
              />
              <span className="text-white/70">Remember this device</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-black shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all hover:bg-neutral-200 active:scale-[0.99] disabled:opacity-70"
          >
            <span>{isLoading ? 'Signing in...' : 'Sign In'}</span>
            {!isLoading && <ArrowRight size={15} />}
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-8 text-center text-xs text-white/50">
          Don't have an account?{' '}
          <Link to="/registration" className="font-semibold text-white hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
