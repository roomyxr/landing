'use client';

import Image from 'next/image';

export default function Problem() {
  const problems = [
    {
      title: 'Digital OverLoad',
      subtitle: 'The “Too Many Tabs” Fatigue.',
      description: 'Honestly? Having 50 browser tabs open while your phone is blowing up with notifications is a jump scare. You’re trying to lock in, but digital noise is making your brain feel like a desktop from 2005. It’s overstimulating and, frankly, it’s mid.',
      imageSrc: '/P_baner1_a.svg',
    },
    {
      title: 'Distraction',
      subtitle: 'The Doomscroll Loop.',
      description: 'You sit down to study, and suddenly you`ve been on Tik Tok for two hours watching someone re-stock their fridge. The constant pings and the urge to check your feed are stealing your focus. Your attention span deserves better than being fragmented by every “u up” text.',
      imageSrc: '/P_baner2_a.svg',
    },
    {
      title: 'Stress and anxiety', // Поправен е и малиот печатна грешка од 'axsiaty' во 'anxiety'
      subtitle: 'The “Burnout” Aura',
      description: 'The pressure to be “on” 24/7 is giving major ick. Between deadlines and the fear of falling behind, your nervous system is doing cardio it didn`t sign up for. Trying to learn while you`re shook by stress is a losing game it`s impossible to be a genius when you`re stuck in survival mode.',
      imageSrc: '/P_baner3_a.svg',
    },
  ];

  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl text-center mb-16">
          <h2 
            className="text-3xl font-extrabold bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl p-8 tracking-tighter text-white sm:text-5xl"
          >
            Your Brain Is Carrying Too Much Baggage
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {problems.map((problem) => (
              <div 
                key={problem.title}
                className="flex flex-col bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl p-8 transition-all duration-300 hover:scale-[1.02] group will-change-transform"
              >
                <div className="mb-6 flex items-center justify-center text-2xl transform-gpu transition-transform duration-300 group-hover:scale-105">
                  <Image 
                    src={problem.imageSrc} 
                    alt={problem.title} 
                    width={800} 
                    height={600} 
                    className="w-full h-auto select-none pointer-events-none opacity-75"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-extrabold leading-7 text-white">
                  {problem.title}
                  <span className="block text-sm font-bold text-white mt-1 uppercase tracking-widest border-b-4 border-teal-300 pb-4">
                    {problem.subtitle}
                  </span>
                </h3>
                <p className="mt-4 text-base leading-7 text-white font-medium">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}