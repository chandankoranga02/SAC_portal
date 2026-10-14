import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const GALLERY_PHOTOS = [
  {
    id: 'photo-1',
    title: 'Amphitheatre Rock Night — Goonj',
    event: "Goonj '25 Cultural Carnival",
    category: 'cultural',
    categoryLabel: 'Cultural Fest',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    fallbackSrc: '/images/images/img1.jpg.jpeg',
    description:
      'Over 2,000 students gathered at the Central Amphitheatre for the headlining rock band performance under the starry Garhwal sky.',
    gridClass: 'col-span-2 row-span-2',
  },
  {
    id: 'photo-2',
    title: '36h Sprint: Code Under Starlight',
    event: 'TechnoVation National Hackathon',
    category: 'tech',
    categoryLabel: 'Tech & Code',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    fallbackSrc: '/images/images/img2.jpg.jpeg',
    description:
      'Engineers coding deep into the 28th hour inside the SAC Computing Center developing emergency response AI systems.',
    gridClass: 'col-span-1 row-span-1',
  },
  {
    id: 'photo-3',
    title: 'Classical Kathak Recital',
    event: 'Mudras Classical Showcase',
    category: 'cultural',
    categoryLabel: 'Performing Arts',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    fallbackSrc: '/images/images/img3.jpg.jpeg',
    description:
      'Solo Kathak performance by Nrityaangana artists celebrating the rich traditional rhythm and heritage of Northern India.',
    gridClass: 'col-span-1 row-span-2',
  },
  {
    id: 'photo-4',
    title: 'Alpine Cross-Country Sprint',
    event: 'Spardha Athletics Meet',
    category: 'sports',
    categoryLabel: 'Athletics & Sports',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    fallbackSrc: '/images/images/img2.jpg.jpeg',
    description:
      'High-altitude 400m sprint finals at the GBPIET sports arena with the Himalayan mountain peaks looming in the backdrop.',
    gridClass: 'col-span-1 row-span-1',
  },
  {
    id: 'photo-5',
    title: 'Campus Sunset Over Pine Valleys',
    event: 'GBPIET Campus Panorama',
    category: 'campus',
    categoryLabel: 'Himalayan Campus',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    fallbackSrc: '/images/images/img1.jpg.jpeg',
    description:
      'Golden hour reflection across the academic blocks and mountain terraces at Pauri Garhwal (1,800m elevation).',
    gridClass: 'col-span-2 row-span-1',
  },
  {
    id: 'photo-6',
    title: 'Autonomous Rover Field Trials',
    event: 'RADS Robotics Workshop',
    category: 'tech',
    categoryLabel: 'Hardware & Robotics',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    fallbackSrc: '/images/images/img3.jpg.jpeg',
    description:
      'Testing obstacle detection sensors and planetary suspension of the prototype rover outside the SAC mechanical bay.',
    gridClass: 'col-span-1 row-span-1',
  },
  {
    id: 'photo-7',
    title: 'Youth Parliamentary Oratory',
    event: 'Vimarsh Debate Conclave',
    category: 'cultural',
    categoryLabel: 'Literary & Speech',
    year: '2025',
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    fallbackSrc: '/images/images/img1.jpg.jpeg',
    description:
      'Students addressing the assembly during the bilingual parliamentary debate tournament in the institute auditorium.',
    gridClass: 'col-span-1 row-span-1',
  },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'cultural', label: 'Cultural' },
    { key: 'tech', label: 'Tech' },
    { key: 'sports', label: 'Sports' },
    { key: 'campus', label: 'Campus' },
  ];

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = useCallback(
    (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      if (lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    },
    [lightboxIndex, filteredPhotos.length]
  );

  const handleNext = useCallback(
    (e) => {
      if (e && e.stopPropagation) e.stopPropagation();
      if (lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
      }
    },
    [lightboxIndex, filteredPhotos.length]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="relative bg-black py-14 sm:py-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header — compact */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 sm:text-xs">
              04 / Gallery
            </p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              Moments at GBPIET
            </h2>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex items-center gap-1.5 self-start rounded-lg bg-white px-4 py-2 text-[11px] font-bold text-black transition-all hover:bg-neutral-200 sm:self-auto sm:px-5 sm:py-2.5 sm:text-xs"
          >
            <span>Full Gallery</span>
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Category Filters — compact pills */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5 sm:mt-6 sm:gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setLightboxIndex(null);
                }}
                className={`rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-200 sm:px-3.5 sm:py-1.5 sm:text-xs ${
                  isActive
                    ? 'bg-white text-black font-bold'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                }`}
                aria-label={`Filter by ${cat.label}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            ASYMMETRICAL BENTO IMAGE GRID
            ========================================================= */}
        <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3 lg:grid-cols-3 lg:gap-4 auto-rows-[140px] sm:auto-rows-[200px] lg:auto-rows-[240px]">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${photo.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:rounded-2xl ${
                activeCategory === 'all' ? photo.gridClass : 'col-span-1 row-span-1'
              }`}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = photo.fallbackSrc;
                }}
              />

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Maximize icon — top right, visible on hover */}
              <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white/70 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 sm:top-3 sm:right-3 sm:h-7 sm:w-7">
                <Maximize2 size={12} />
              </div>

              {/* Bottom caption — minimal: category tag + title + year */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                <span className="inline-block rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-semibold tracking-wide uppercase text-white/80 backdrop-blur-sm sm:text-[10px]">
                  {photo.categoryLabel}
                </span>
                <h3 className="mt-1 text-xs font-bold leading-tight text-white line-clamp-2 sm:text-sm sm:leading-snug">
                  {photo.title}
                </h3>
                <p className="mt-0.5 text-[9px] text-white/50 sm:text-[10px]">
                  {photo.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          LIGHTBOX MODAL
          ========================================================= */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:bg-white/10 sm:top-5 sm:right-5 sm:h-10 sm:w-10"
            aria-label="Close image viewer"
          >
            <X size={16} className="sm:hidden" />
            <X size={20} className="hidden sm:block" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => handlePrev(e)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition-all hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} className="sm:hidden" />
            <ChevronLeft size={24} className="hidden sm:block" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => handleNext(e)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition-all hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <ChevronRight size={18} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </button>

          {/* Photo Display */}
          <div
            className="relative flex flex-col max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-neutral-950 shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
            <div className="relative flex-1 min-h-0 flex items-center justify-center bg-black overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[60vh] w-auto max-w-full object-contain sm:max-h-[65vh]"
                onError={(e) => {
                  e.currentTarget.src = activePhoto.fallbackSrc;
                }}
              />
            </div>

            {/* Details bar */}
            <div className="p-4 bg-neutral-950 border-t border-white/10 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:gap-2 sm:text-xs">
                  <span className="rounded border border-[#00a3ff]/30 bg-[#00a3ff]/10 px-2 py-0.5 text-[10px] font-bold text-[#00a3ff] sm:text-[11px]">
                    {activePhoto.categoryLabel}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="font-semibold text-white/80">{activePhoto.event}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">{activePhoto.year}</span>
                </div>

                <span className="text-[10px] font-mono text-white/40 sm:text-xs">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>

              <h3 className="mt-2 text-base font-bold text-white sm:text-xl lg:text-2xl">
                {activePhoto.title}
              </h3>

              <p className="mt-1.5 text-[11px] leading-relaxed text-white/60 sm:text-sm sm:mt-2">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
