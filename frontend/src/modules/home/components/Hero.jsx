
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=85",
];

const Hero = () => {
  return (
    <section className="sac-hero relative isolate flex min-h-[90svh] items-center justify-center overflow-hidden bg-black text-white lg:min-h-[calc(100svh-80px)]">

      {/* Background Image Slider */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
      >
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className="sac-slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${image}")`,
              animationDelay: `${index * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Darkness, fade and monochrome shading */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/45" />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.65) 75%, #000 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-12">

        {/* Small Label */}
        <div className="sac-reveal mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-white/60" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/80 sm:text-sm">
            GBPIET · Pauri Garhwal
          </span>
          <span className="h-px w-8 bg-white/60" />
        </div>

        {/* Sequential Word Animation */}
        <h1
          className="sac-title mx-auto flex min-h-[1.2em] flex-wrap items-center justify-center gap-x-3 text-5xl font-semibold tracking-tight sm:gap-x-4 sm:text-7xl lg:text-8xl xl:text-9xl"
          aria-label="Student Activity Cell"
        >
          <span className="sac-word" style={{ animationDelay: "0s" }}>
            Student
          </span>

          <span className="sac-word" style={{ animationDelay: "1s" }}>
            Activity
          </span>

          <span className="sac-word" style={{ animationDelay: "2s" }}>
            <span className="font-light italic text-white/70">Cell.</span>
          </span>
        </h1>

        {/* Description and Buttons */}
        <div className="sac-content mx-auto">
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 sm:mt-9 sm:text-lg sm:leading-8">
            Where ideas find a community, talents find a stage,
            and student life goes beyond the classroom.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Join Now */}
            <Link
              to="/registration"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.2)]"
            >
              Join Now
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Explore Now */}
            <a
              href="#upcoming-events"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/40 bg-black/20 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Explore Now
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom Caption */}
        <div className="sac-bottom mt-16 flex items-center justify-center gap-3 sm:mt-20">
          <span className="h-px w-8 bg-white/40" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 sm:text-xs">
            Discover · Participate · Create
          </span>
          <span className="h-px w-8 bg-white/40" />
        </div>
      </div>

      {/* Component Animations */}
      <style>{`
        .sac-slide {
          opacity: 0;
          transform: scale(1.08);
          animation: sac-background 25s ease-in-out infinite;
          animation-fill-mode: both;
          filter: grayscale(100%);
          will-change: opacity, transform;
        }

        @keyframes sac-background {
          0% {
            opacity: 0;
            transform: scale(1.08);
          }
          4% {
            opacity: 1;
          }
          17% {
            opacity: 1;
            transform: scale(1);
          }
          22% {
            opacity: 0;
            transform: scale(1.02);
          }
          100% {
            opacity: 0;
            transform: scale(1.08);
          }
        }

        .sac-word {
          display: inline-block;
          opacity: 0;
          filter: blur(10px);
          transform: translateY(24px);
          animation: sac-word-reveal 0.8s ease-out forwards;
        }

        @keyframes sac-word-reveal {
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        .sac-reveal,
        .sac-content,
        .sac-bottom {
          opacity: 0;
          animation: sac-content-reveal 1s ease-out 3s forwards;
        }

        .sac-content {
          animation-delay: 3.2s;
        }

        .sac-bottom {
          animation-delay: 3.5s;
        }

        @keyframes sac-content-reveal {
          from {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sac-slide {
            animation: none;
            opacity: 0;
          }

          .sac-slide:first-child {
            opacity: 1;
          }

          .sac-word,
          .sac-reveal,
          .sac-content,
          .sac-bottom {
            animation: none;
            opacity: 1;
            filter: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
