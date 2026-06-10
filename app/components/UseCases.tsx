'use client';

export default function UseCases() {
  const rooms = [
    {
      title: 'The Med-Student Sanctum',
      subtitle: 'High-stakes focus meets surgical precision.',
      description: 'Interactive 3D anatomical models and floating medical charts that make memorizing the nervous system feel like a game, not a nightmare.',
      color: 'bg-rose-500/10 border-rose-500/20',
      icon: '🩺',
    },
    {
      title: 'The Investor`s War Room',
      subtitle: 'Pure "Wolf of Wall Street" but with calm.',
      description: 'Real-time data streams, multi-monitor market dashboards, and a private "Zen Mode" to help you make big moves without panic.',
      color: 'bg-emerald-500/10 border-emerald-500/20',
      icon: '📈',
    },
    {
      title: 'The Entrepreneur`s Hub',
      subtitle: '"Main Character" energy for the next big founder.',
      description: 'Infinite whiteboards for brainstorming, AI-powered pitch deck feedback, and integrated speech-to-text to catch every 3 AM "lightbulb moment".',
      color: 'bg-amber-500/10 border-amber-500/20',
      icon: '💡',
    },
    {
      title: 'The Artist`s Studio',
      subtitle: 'Lo-Fi, ethereal, and completely uninhibited.',
      description: '360-degree mood boards, spatial audio for your creative playlists, and a "Museum Mode" to view your digital assets in a high-end gallery setting.',
      color: 'bg-purple-500/10 border-purple-500/20',
      icon: '🎨',
    },
  ];

  return (
    <section id="use-cases" className="py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl text-center mb-20 p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl">
          <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-5xl">
            The Major Flex!
            <span className="block sm:inline-block text-nowrap text-white text-[clamp(1rem,8vw,3rem)] font-normal sm:ml-3">
              A niche-specific rooms:
            </span>
          </h2>
          <p className="text-xl text-white/80 font-medium leading-relaxed mt-4">
            We are not only a cool app but an essential workstation for high-achievers. We have a room that matches your frequency.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {rooms.map((room) => (
            <div 
              key={room.title} 
              className={`group p-8 border-t-2 border-r-2 ${room.color} md:hover:scale-[1.03] transition-transform duration-300 bg-opacity-40 backdrop-blur-sm relative overflow-hidden shadow-xl`}
            >
              <h3 className="text-xl text-nowrap font-extrabold text-white tracking-tighter mb-2">
                {room.title}
              </h3>
              <p className="block text-sm font-bold text-white/80 mt-1 uppercase tracking-[0.2em] border-b-4 border-teal-300 pb-4">
                {room.subtitle}
              </p>
              <p className="mt-4 text-lg text-white/80 font-medium leading-relaxed">
                {room.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}