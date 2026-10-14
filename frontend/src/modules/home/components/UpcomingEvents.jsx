
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const EVENTS = [
  {
    id: "goonj",
    title: "Goonj '26",
    description:
      "Music, dance and culture come together in one unforgettable celebration.",
    poster:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=85",
    deadline: "25 October 2026",
  },
  {
    id: "technovation",
    title: "RoboFest & TechnoVation",
    description:
      "Build bold ideas through robotics, code and hands-on innovation.",
    poster:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=85",
    deadline: "15 October 2026",
  },
  {
    id: "spandan",
    title: "Spandan 2026",
    description:
      "Compete, push your limits and represent your branch on the field.",
    poster:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
    deadline: "31 October 2026",
  },
  {
    id: "genesis",
    title: "Genesis",
    description:
      "A platform for sharp arguments, fresh perspectives and powerful ideas.",
    poster:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85",
    deadline: "08 November 2026",
  },
  {
    id: "echo",
    title: "Echo — Acoustic Evening",
    description:
      "An evening of live music, original compositions and student talent.",
    poster:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85",
    deadline: "18 November 2026",
  },
];

export const UpcomingEvents = () => {
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToCard = (index, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("[data-event-card]");
    if (!card) return;

    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap) || 0;
    const cardWidth = card.getBoundingClientRect().width;
    const maxScroll = track.scrollWidth - track.clientWidth;

    let nextIndex = index;

    if (nextIndex < 0) nextIndex = EVENTS.length - 1;
    if (nextIndex >= EVENTS.length) nextIndex = 0;

    const target = Math.min(nextIndex * (cardWidth + gap), maxScroll);

    track.scrollTo({ left: target, behavior });
    setActiveIndex(nextIndex);
  };

  const move = (direction) => {
    scrollToCard(activeIndex + direction);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateIndex = () => {
      const card = track.querySelector("[data-event-card]");
      if (!card) return;

      const gap = parseFloat(
        window.getComputedStyle(track).columnGap
      ) || 0;

      const step = card.getBoundingClientRect().width + gap;
      if (step > 0) {
        setActiveIndex(
          Math.min(
            EVENTS.length - 1,
            Math.max(0, Math.round(track.scrollLeft / step))
          )
        );
      }
    };

    track.addEventListener("scroll", updateIndex, { passive: true });

    return () => {
      track.removeEventListener("scroll", updateIndex);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    timerRef.current = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      if (
        track.scrollLeft + track.clientWidth >=
        track.scrollWidth - 10
      ) {
        scrollToCard(0);
      } else {
        scrollToCard(activeIndex + 1);
      }
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused]);

  return (
    <section
      id="upcoming-events"
      className="relative overflow-hidden border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-9 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              What's happening
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Upcoming <span className="text-white/45">events.</span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous events"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:h-12 sm:w-12"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next events"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:bg-neutral-300 sm:h-12 sm:w-12"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal carousel */}
        <div
          ref={trackRef}
          className="events-track flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 sm:gap-6"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          aria-label="Upcoming events carousel"
        >
          {EVENTS.map((event) => (
            <article
              key={event.id}
              data-event-card
              className="event-card group relative w-[88%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            >
              {/* Event image */}
              <div className="relative aspect-[5/4] overflow-hidden bg-neutral-900">
                <img
                  src={event.poster}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  SAC Events
                </span>
              </div>

              {/* Minimal card content */}
              <div className="flex min-h-[210px] flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {event.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/55">
                  {event.description}
                </p>

                <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
                      Last date to register
                    </p>
                    <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">
                      {event.deadline}
                    </p>
                  </div>

                  <Link
                    to="/registration"
                    aria-label={`Register for ${event.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:rotate-45"
                  >
                    <ArrowUpRight size={19} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-7 flex items-center justify-between gap-4">
          <div className="h-px flex-1 overflow-hidden bg-white/10">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{
                width: `${100 / EVENTS.length}%`,
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            />
          </div>

          <span className="shrink-0 font-mono text-xs text-white/50">
            {String(activeIndex + 1).padStart(2, "0")}{" "}
            <span className="text-white/25">/</span>{" "}
            {String(EVENTS.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <style>{`
        .events-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .events-track::-webkit-scrollbar {
          display: none;
        }

        .event-card {
          transition: border-color 300ms ease;
        }

        .event-card:hover {
          border-color: rgba(255, 255, 255, 0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .event-card,
          .event-card img {
            transition: none;
          }

          .events-track {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default UpcomingEvents;
