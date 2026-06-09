'use client';

import { useState } from 'react';
import Image from 'next/image';
import WaitlistModal from './WaitlistModal';
import StoreBadges from './StoreBadges';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative isolate min-h-screen flex flex-col items-center overflow-hidden pt-20 lg:pt-0">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 w-full py-18">
        <div className="flex flex-col lg:grid lg:grid-cols-[0.4fr_0.6fr] lg:items-center gap-y-12">
          <div className="relative z-10 order-2 lg:order-2 lg:col-start-2 lg:my-10">
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
          </div>
          <div className="relative z-20 mx-auto max-w-2xl lg:mx-0 lg:text-left text-center order-1 lg:order-1 lg:col-start-1">
            <h1 className="text-balance text-4xl font-extrabold tracking-tighter text-white lg:text-5xl">
              Master the Lore <br />
              Without the Bore.
            </h1>
            <p className="mt-5 text-pretty text-lg font-bold text-white/80 sm:text-xl/8">
              Level up your skills in high-vibe VR-space designed for
              deep focus and zero burnout.
              <br className="hidden sm:block" />
              Secure the bag, keep your peace.
            </p>
            <div className="mt-5 flex flex-col items-center lg:items-start justify-center lg:justify-start">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-white/20 px-5 py-3 lg:px-8 lg:py-3 text-[10px] lg:text-base font-bold text-primary shadow-xl"
                >
                  Try ROOMY
                </a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-full bg-transparent border-2 border-white px-8 py-3 text-base font-bold text-white shadow-sm hover:bg-white/10 transition-all hover:scale-105 uppercase"
                >
                  Join WaitList
                </button>
              </div>
              <p className="text-xs text-white/60 font-bold tracking-widest uppercase mt-5">
                only 100 lifetime founder spots.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mx-auto ">
        <h3 className="text-3xl lg:text-5xl font-extrabold text-primary mb-[-10px] tracking-tighter pl-10 lg:pl-40">
          Social & Platform Hub
        </h3>
        <div className="bg-primary mx-auto justify-items-center items-center p-6 lg:p-8">
          <StoreBadges onBadgeClick={() => setIsModalOpen(true)} />
        </div>
      </div>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}