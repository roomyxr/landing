'use client';

import { useState } from 'react';
import FounderModal from './FounderModal';

export default function SpecialOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const kitItems = [
    { title: 'Lifetime Premium Access:', description: 'Pay once, own it forever. No monthly “tax” on your success.' },
    { title: 'Founder Badge:', description: 'A unique in-app flex so everyone knows you were here from Day 1.' },
    { title: 'Private Executive VR Rooms:', description: 'Exclusive, high-end environments reserved only for Founders.' },
    { title: 'Early Beta Access:', description: 'Test new features, AI companions, and environments before the world sees them.' },
    { title: 'Private Discord Sanctuary:', description: 'Direct line to the devs and a community of high-achieving early adopters.' },
  ];

  return (
    <section id="special-offer" className="py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        
        {/* Хедер - Комплетно статичен без хардверски класи */}
        <div className="mx-auto max-w-screen-2xl text-center mb-20 p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl">
          <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-5xl">
            The Founder`s Legacy!
            <span className="block sm:inline-block text-nowrap text-white text-[clamp(1rem,8vw,3rem)] font-normal sm:ml-3">
              Limited Drop
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium leading-relaxed mt-4">
            Stop paying rent for your productivity. Secure your spot as one of the <strong className="text-white">first 100 legends.</strong> Once these slots are gone, they`re gone forever.
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Лева картичка - Кит пакет */}
          <div className="p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl">
            <h3 className="text-3xl font-extrabold text-white mb-10 tracking-tighter">The Founder`s Kit includes:</h3>
            <ul className="space-y-8">
              {kitItems.map((item) => (
                <li key={item.title} className="flex flex-col group">
                  <span className="font-extrabold text-white text-xl flex items-center gap-2">
                    {/* transform-gpu е оставен само на штиклираното бидејќи прави scale при hover */}
                    <span className="inline-block text-teal-300 transition-transform duration-300 origin-center transform-gpu group-hover:scale-125">
                      ✔
                    </span>
                    {item.title}
                  </span>
                  <span className="block text-sm font-bold text-white/80 mt-1 uppercase tracking-[0.2em] pb-4">
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Десна картичка - Математика и прогрес бар */}
          <div className="flex flex-col justify-between relative p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl">
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-10 tracking-tighter">The Math is Based:</h3>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center text-white/80 text-lg font-medium">
                  <span className="w-3 h-3 rounded-full bg-teal-300 mr-4 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>
                  Regular Price: $19/month (forever)
                </li>
                <li className="flex items-start text-white">
                  <span className="w-3 h-3 rounded-full bg-teal-300 mr-4 mt-2 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>
                  <div>
                    <span className="font-extrabold text-2xl tracking-tighter">Founder Price: $29 One-Time *</span>
                    <p className="block text-sm font-bold text-white/80 mt-1 uppercase tracking-widest pb-4">It pays for itself in less than two months. That`s a massive W</p>
                  </div>
                </li>
              </ul>
              
              <div className="mb-4 flex justify-between text-sm font-extrabold text-white uppercase tracking-widest">
                <span>Status Check:</span>
                <span>32/100 Claimed</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-6 mb-4 p-1 shadow-inner">
                <div className="bg-teal-300 h-4 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)]" style={{ width: '32%' }}></div>
              </div>
              <p className="mt-6 text-sm text-white/80 font-bold uppercase tracking-widest">The circle is closing. Don`t be the one who`s “late to the party”</p>
            </div>

            {/* Копче за акција */}
            <div className="text-center mt-auto pt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="block w-full rounded-full bg-white px-8 py-3 text-xl font-extrabold text-primary shadow-2xl hover:bg-gray-100 transition-all duration-300 transform-gpu hover:scale-105 uppercase tracking-tighter"
              >
                CLAIM MY FOUNDER STATUS
              </button>
              <p className="mt-6 text-sm text-white/80 font-bold uppercase tracking-widest">
                It`s not a sale; It`s an investment in your future aura
              </p>
            </div>
          </div>

        </div>
      </div>
      <FounderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}