import React from 'react';

const GalleryPage = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Event <span className="text-[#0084d1]">Gallery</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Highlights, photographs, and memories from SAC GBPIET fests, competitions, and college events.
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;
