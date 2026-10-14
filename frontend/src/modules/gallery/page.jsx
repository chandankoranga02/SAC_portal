
import React, { useEffect, useState } from "react";


import galleryImages from "./data/galleryData";


const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const changeImage = (direction) => {
    const currentIndex = galleryImages.findIndex(
      (image) => image.id === selectedImage.id
    );

    const nextIndex =
      (currentIndex + direction + galleryImages.length) %
      galleryImages.length;

    setSelectedImage(galleryImages[nextIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowLeft") changeImage(-1);
      if (event.key === "ArrowRight") changeImage(1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-center text-white sm:py-28">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Student Activity Cell
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Our <span className="text-amber-400">Gallery</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Every photograph tells a story. Explore the events,
            activities and memories that bring our campus community
            together.
          </p>

          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-amber-400" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Explore our memories
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Moments worth remembering
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            {filteredImages.length} photographs
          </p>
        </div>

        <div className="mb-9 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-slate-950 text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-slate-950"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={`View ${image.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition group-hover:bg-slate-950/30">
                  <span className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 opacity-0 shadow-lg transition group-hover:opacity-100">
                    View photo ↗
                  </span>
                </div>
              </div>

              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  {image.category}
                </span>
                <h3 className="mt-2 text-lg font-bold">
                  {image.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {image.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/20"
            aria-label="Close viewer"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              changeImage(-1);
            }}
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white sm:left-6"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="mx-auto max-h-[65vh] w-full rounded-xl object-contain"
            />

            <div className="mx-auto mt-5 max-w-2xl text-center text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {selectedImage.category}
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                {selectedImage.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {selectedImage.description}
              </p>
              <p className="mt-4 text-xs text-slate-400">
                Image {galleryImages.findIndex(
                  (image) => image.id === selectedImage.id
                ) + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              changeImage(1);
            }}
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white sm:right-6"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
