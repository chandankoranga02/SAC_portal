
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const clubs = [
  {
    id: "acm",
    name: "Mangement Club",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "rads",
    name: "Devign",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "echo",
    name: "Abhiyakti",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "nrityaangana",
    name: "X-Bands",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "literary",
    name: "Literary",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pixel",
    name: "Aperture",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "alpine",
    name: "Dhristikon",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "ecell",
    name: "E-Cell GBPIET",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "innovation",
    name: "UHV",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "community",
    name: "Rama Community",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
];

export const ExploreClubs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const cards = section.querySelectorAll(".club-card");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    let previousScrollY = window.scrollY;
    let scrollDirection = "down";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - previousScrollY) > 2) {
        scrollDirection =
          currentScrollY > previousScrollY ? "down" : "up";
        previousScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;

          if (entry.isIntersecting) {
            const index = Number(card.dataset.index);
            const fromLeft = index % 2 === 0;

            const direction =
              scrollDirection === "down"
                ? fromLeft
                  ? "left"
                  : "right"
                : fromLeft
                  ? "right"
                  : "left";

            card.dataset.direction = direction;
            card.classList.add("is-visible");
          } else {
            card.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="clubs"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-white/10 bg-black px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Minimal section heading */}
        <div className="mb-9 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 sm:text-xs">
              Discover your community
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Find your <span className="text-white/45">people.</span>
            </h2>
          </div>

          <span className="shrink-0 pb-1 text-xs text-white/45 sm:text-sm">
            10 Clubs
          </span>
        </div>

        {/* Responsive club grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {clubs.map((club, index) => (
            <article
              key={club.id}
              data-index={index}
              className={`club-card group relative overflow-hidden rounded-2xl bg-neutral-900 ${
                index % 2 === 0 ? "club-left" : "club-right"
              }`}
            >
              {/* Club photograph */}
              <div className="relative aspect-[4/4.4] overflow-hidden sm:aspect-[4/4.5]">
                <img
                  src={club.image}
                  alt={club.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />

                {/* Image shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Club name + button */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-4 xl:p-5">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl lg:text-lg xl:text-xl">
                    {club.name}
                  </h3>

                  <Link
                    to="/registration"
                    aria-label={`Join ${club.name}`}
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    Join Now
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .club-card {
          opacity: 0;
          transform: translateX(0);
          transition:
            opacity 650ms ease,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .club-card.club-left:not(.is-visible),
        .club-card[data-direction="left"]:not(.is-visible) {
          transform: translateX(-45px);
        }

        .club-card.club-right:not(.is-visible),
        .club-card[data-direction="right"]:not(.is-visible) {
          transform: translateX(45px);
        }

        .club-card.is-visible {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 640px) {
          .club-card.club-left:not(.is-visible),
          .club-card.club-right:not(.is-visible),
          .club-card[data-direction="left"]:not(.is-visible),
          .club-card[data-direction="right"]:not(.is-visible) {
            transform: translateX(24px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .club-card {
            opacity: 1;
            transform: none;
            transition: none;
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default ExploreClubs;
