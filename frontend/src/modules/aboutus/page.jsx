import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          About <span className="text-[#0084d1]">SAC GBPIET</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          The Student Activity Center (SAC) at Govind Ballabh Pant Institute of Engineering & Technology,
          Pauri Garhwal is the apex student body responsible for co-curricular, cultural, technical,
          and recreational life across campus.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
