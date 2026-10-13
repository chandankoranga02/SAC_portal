import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { navLinks } from './navLinks';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Client-side portal mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const isLinkActive = (href) => {
    if (!href) return false;
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 h-16 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl transition-all sm:h-20">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* =========================
              LEFT: LOGO + SAC GBPIET
              ========================= */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex shrink-0 items-center gap-3 focus:outline-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-12">
              <img
                src="/images/IeeeLogo.webp"
                alt="SAC Logo"
                className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="leading-tight">
              <div className="text-lg font-black tracking-tight sm:text-xl lg:text-2xl">
                <span className="text-[#0084d1]">SAC</span>{' '}
                <span className="text-white">GBPIET</span>
              </div>
              <p className="hidden text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:block">
                Student Activity Cell
              </p>
            </div>
          </Link>

          {/* =========================
              MIDDLE: NAVIGATION LINKS (Desktop & Laptop)
              ========================= */}
          <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href || '/'}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 lg:px-3.5 ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#0084d1] shadow-[0_0_10px_#0084d1]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =========================
              RIGHT: LOGIN BUTTON + MOBILE TOGGLE
              ========================= */}
          <div className="flex items-center gap-3">
            {/* Login Button (Visible on desktop and tablet) */}
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#00629b] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(0,98,155,0.35)] transition-all hover:bg-[#0084d1] hover:shadow-[0_0_20px_rgba(0,98,155,0.55)] active:scale-95 lg:px-5 lg:text-sm"
            >
              <LogIn size={15} />
              <span>Login</span>
            </Link>

            {/* Mobile/Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================
          FULL-SCREEN MOBILE & TABLET PORTAL DRAWER
          ========================= */}
      {isMounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[99999] flex flex-col bg-[#050505] text-white md:hidden">
            {/* Top Bar matching header */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:h-20 sm:px-6">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <img
                    src="/images/IeeeLogo.webp"
                    alt="SAC Logo"
                    className="h-7 w-7 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="text-lg font-black tracking-tight">
                    <span className="text-[#0084d1]">SAC</span>{' '}
                    <span className="text-white">GBPIET</span>
                  </div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    Student Activity Cell
                  </p>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
              >
                <X size={22} />
              </button>
            </div>

            {/* Scrollable Navigation Links */}
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      to={link.href || '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                        active
                          ? 'border border-[#0084d1]/50 bg-[#00629b]/25 text-[#00a3ff]'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Pinned Bottom Login Action */}
            <div className="border-t border-white/10 bg-[#0a0a0a] px-5 py-5 pb-8">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00629b] py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,98,155,0.4)] transition-all hover:bg-[#0084d1] active:scale-95"
              >
                <LogIn size={18} />
                <span>Login to SAC Portal</span>
              </Link>
              <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-white/40">
                Student Activity Cell • GBPIET
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
