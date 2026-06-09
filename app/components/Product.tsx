'use client';

import Image from 'next/image';

export default function Product() {
  const features = [
    {
      name: 'AI Assistant',
      subname: 'Your New Study Bestie.', // Поправено 'You New' во 'Your New'
      description: 'Forget basic bots that just give you "error" messages. Our AI is an emotionally intelligent companion a cute robot or animal that actually gets you. It tracks your progress, suggests breaks when you are hitting a wall, and adapts to your mood. It`s not a tutor; it`s a co-pilot for your success.', // Поправено 'massages', 'track', 'progres'
      number: '1',
    },
    {
      name: 'Lo-Fi Immersion', // Поправено 'Lo-Fl' во 'Lo-Fi'
      subname: 'The Ultimate Focus Hack.',
      description: 'We swapped cold, clinical interfaces for warm, minimalist Lo-Fi aesthetics. Your VR room isn`t static the lighting and vibe shift based on whether you`re in "deep work" mode or "meditation" mode. It`s a personalized space that breathes with you.', // Поправено 'mediatation'
      number: '2',
    },
    {
      name: 'Spatial Productivity',
      subname: 'God Mode Enabled.',
      description: 'Why settle for one tiny screen? In Roomy, you can surround yourself with interactive windows PDFs, 3D models, videos and more floating in your space. Need to save a genius thought? Use Speech to Text to turn your yapping into organized PDF notes instantly.',
      number: '3',
    },
    {
      name: 'Social Co-Working',
      subname: 'No Social Anxiety.',
      description: 'Success is better with the squad. Hop into social modules where you can study, vibe to music, or just exist in the same space as others without the pressure of "real world" distractions. It`s the digital version of a quiet coffee shop corner.', // Поправено 'coffe'
      number: '4',
    },
  ];

  return (
    <section id="product" className="py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">
          <div className="flex flex-col lg:sticky lg:top-32 transform-gpu will-change-transform">
            <h2 
              className="text-3xl w-full font-extrabold tracking-tighter text-white sm:text-5xl mb-12 p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl "
            >
              The Glow-Up:<br />
              <span className="text-white text-nowrap text-[clamp(1rem,7vw,3rem)] font-normal">How Roomy Fixes the Vibe</span>
            </h2>
            
            <div className="relative w-full aspect-square mx-auto lg:mx-0 transform-gpu">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative w-full h-full flex items-center justify-center">
                 <Image 
                    src="/Prod_baner_a.svg" 
                    alt="Product Illustration" 
                    width={800} 
                    height={800} 
                    className="w-full h-auto p-8 transform-gpu"
                    loading="lazy"
                  />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl p-8 transform-gpu">
            <dl className="grid grid-cols-1 gap-y-8">
              {features.map((feature) => (
                <div 
                  key={feature.name}
                  className="flex flex-col relative group transition-all duration-300 transform-gpu will-change-transform"
                >
                  <dt className="text-2xl pl-18 font-extrabold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-4xl text-white font-extrabold text-2xl border-4 border-teal-400 transition-all duration-300 group-hover:rotate-6 transform-gpu">
                      {feature.number}
                    </div>
                    <h3 className="text-xl font-extrabold leading-7 text-white">
                      {feature.name}
                      <span className="block text-sm font-bold text-white/80 mt-1 uppercase tracking-widest">{feature.subname}</span>
                    </h3>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-lg leading-7 text-white/80 font-medium">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}