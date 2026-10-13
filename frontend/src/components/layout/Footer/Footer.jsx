import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Registration', href: '/registration' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const utilityLinks = [
    { name: 'Complain', href: '/complain' },
    { name: 'Feedback', href: '/feedback' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#00629b]/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* =========================
              COL 1: BRAND & ABOUT
              ========================= */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-12 sm:w-12">
                <img
                  src="/images/IeeeLogo.webp"
                  alt="SAC Logo"
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                  <span className="text-[#0084d1]">SAC</span>{' '}
                  <span className="text-white">GBPIET</span>
                </h2>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Student Activity Cell
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Student Activity Cell (SAC) at Govind Ballabh Pant Institute of Engineering & Technology,
              Pauri Garhwal. Driving campus life through technical clubs, cultural events, sports meets,
              and collaborative workshops.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-[#0084d1] hover:bg-[#00629b] hover:text-white"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-[#0084d1] hover:bg-[#00629b] hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="mailto:sac@gbpiet.ac.in"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-[#0084d1] hover:bg-[#00629b] hover:text-white"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* =========================
              COL 2: QUICK LINKS
              ========================= */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0084d1]">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-all hover:text-white"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-[#0084d1]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              COL 3: SUPPORT & POLICIES
              ========================= */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0084d1]">
              Support & Policies
            </p>
            <ul className="mt-4 space-y-2.5">
              {utilityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-all hover:text-white"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-[#0084d1]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================
            BOTTOM COPYRIGHT BAR
            ========================= */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {currentYear} SAC GBPIET (Student Activity Cell). All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-xs text-white/40">
            <span>Built for the students of</span>
            <span className="font-semibold text-white/70">GBPIET</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
