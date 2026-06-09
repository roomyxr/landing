'use client';

import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-auto transform-gpu will-change-transform">
      <Image 
        src="/hero_baner_a.svg" 
        alt="Roomy Hero Banner" 
        width={800} 
        height={600} 
        className="w-full h-auto max-w-[120%] lg:max-w-[140%] select-none pointer-events-none mx-auto lg:mx-4 opacity-50"
        priority
      />
    </div>
  );
}