'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [heading, setHeading] = useState('Discover Something Amazing');
  const [subheading, setSubheading] = useState('Premium experiences crafted for excellence');
  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [isEditingSubheading, setIsEditingSubheading] = useState(false);

  return (
    <section className="relative w-full h-dvh overflow-hidden rounded-3xl">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
        poster='/123.jpg'
      >
        <source
          src="123.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
<div>
  Hello World
</div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Get started button"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Accessibility skip link hint */}
      <div className="sr-only">
        Hero section with video background. Main heading and subheading are editable. Press Enter or Space to edit, then click outside or press Enter to save changes.
      </div>
    </section>
  );
}
