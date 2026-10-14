import React from 'react';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import ExploreClubs from './components/ExploreClubs';
import LatestFromSAC from './components/LatestFromSAC';
import Gallery from './components/Gallery';

/**
 * SAC Homepage for GBPIET
 * 
 * Features an editorial-style black-and-white base theme with vibrant accent colors,
 * generous whitespace, modern typography, and structured sections:
 * 1. Hero
 * 2. Upcoming Events
 * 3. Explore Clubs & Societies
 * 4. Latest from SAC
 * 5. Gallery
 */
export const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#0084d1] selection:text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Upcoming Events */}
      <UpcomingEvents />

      {/* 3. Explore Clubs & Societies */}
      <ExploreClubs />

      {/* 4. Latest from SAC */}
      <LatestFromSAC />

      {/* 5. Visual Archive / Gallery */}
      <Gallery />
    </div>
  );
};

export default HomePage;
