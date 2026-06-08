'use client';

import { motion } from 'framer-motion';

export default function UseCases() {
  const rooms = [
    {
      title: 'The Med-Student Sanctum',
      subtitle: 'High-steaks focus meets surgical precision.',
      description: 'Interactive 3D anatomical models and floating medical charts that make memorizing the nervous system feel like a game, not nightmare.',
      color: 'bg-rose-500/10 border-rose-500/20',
      icon: '🩺',
    },
    {
      title: 'The Investor`s War Room',
      subtitle: 'Pure "Wolf of Wall Street" but with a calm.',
      description: 'Real time data streems, multi monitor market dashboards, and a privet "Zen Mode" to help you make big moves without panic.',
      color: 'bg-emerald-500/10 border-emerald-500/20',
      icon: '📈',
    },
    {
      title: 'The Entrepreneur`s Hub',
      subtitle: '"Main Character" energy fot the next big founder.',
      description: 'Infinite whiteboards for brainstorming, Ai powered pitch deck feesback, and integrated speech-to-text to catch every 3 AM "lightbulb moment"',
      color: 'bg-amber-500/10 border-amber-500/20',
      icon: '💡',
    },
    {
      title: 'The Artist`s Studio',
      subtitle: 'Lo-Fl, ethereal, and completely uninhibited.',
      description: '360 degree mood boards, spatial audio for your creative playlists, and a "Museum Mode" to view your digital assets in a high-end gallery setting.',
      color: 'bg-purple-500/10 border-purple-500/20',
      icon: '🎨',
    },
  ];

  return (
    <section id="use-cases" className="py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl text-center mb-20 p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            /* REMOVED text-nowrap from parent so it can wrap on mobile */
            className="text-3xl font-extrabold tracking-tighter text-white sm:text-5xl "
            >
              The Major Flex!
              <span className="block sm:inline-block text-nowrap text-white text-[clamp(1rem,8vw,3rem)] font-normal sm:ml-3">
              A niche-specific rooms:
              </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/80 font-medium leading-relaxed "
          >
            We are not only a cool app but a essential workstation for high-achievers. We have a room that match your frequency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 border-t-2 border-r-2 ${room.color} hover:scale-[1.03] transition-all duration-500 bg-${room.color}/40 backdrop-blur-sm relative overflow-hidden shadow-xl`}
            >
              {/* <div className="h-56 w-full bg-black/40 rounded-3xl mb-8 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {room.icon}
              </div> */}
              <h3 className="text-xl text-nowrap font-extrabold text-white tracking-tighter mb-2">{room.title}</h3>
              <p className="block text-sm font-bold text-white/80 mt-1 uppercase tracking-widest border-b-4 border-teal-300 pb-4 uppercase tracking-[0.2em]">{room.subtitle}</p>
              <p className="mt-4 text-lg leading-7 text-white/80 font-medium leading-relaxed">{room.description}</p>
              
              {/* <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <span className="text-2xl">→</span>
                 </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
