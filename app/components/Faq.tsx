'use client';

import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Is this just another VR game?",
    answer: "No cap, it`s the opposite. While most VR apps are for gaming, Roomy is a dedicated digital sanctuary for productivity, learning, and mental balance. We`ve swapped chaotic energy for Lo-Fi aesthetics and AI-driven focus tools to help you actually get things done.",
  },
  {
    question: "How does the AI Assistant actually help me?",
    answer: "Your AI companion isn`t just a static bot; it`s an interactive partner that learns your habits. It monitors your progress, suggests breaks when you`re hitting a wall, and can even turn your spoken ideas into PDF notes instantly via speech-to-text.",
  },
  {
    question: "Do I need a high-end VR headset to use Roomy?",
    answer: "We`re building for the future, but we aren`t gatekeeping. You can access Roomy via Meta Quest or Apple Vision Pro for the full immersive experience, but we also have Desktop and Mobile apps so you can stay in your flow state from any device.",
  },
  {
    question: "Can I really study with my friends in VR?",
    answer: "Absolutely. We have a Social Module where you can join \"Quiet Rooms\" with your squad. You can study together, vibe to the same Lo-Fi tracks, or just enjoy the shared presence without the pressure of a noisy real-world cafe.",
  },
  {
    question: "What happens after the 100 Founder slots are gone?",
    answer: "The $29 One-Time Payment is a \"thank you\" to our earliest believers. Once the 100 slots are filled, the price moves to a standard monthly subscription model (€5-10/month). Founders keep their lifetime access and exclusive badge forever—no extra charges, ever.",
  },
  {
    question: "Is it just for students?",
    answer: "Not at all. We`ve engineered specific rooms for Medical Students, Investors, Entrepreneurs, and Artists. Each room comes with specialized tools—like 3D anatomical models or real-time data dashboards—tailored to your specific professional grind.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-2xl text-center mb-20 p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-nowrap tracking-tighter text-white sm:text-5xl"
          >
            FAQ: 
            <span className="block sm:inline-block text-nowrap text-white text-[clamp(1rem,8vw,3rem)] font-normal sm:ml-3">
              The Vibe Check
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 font-medium leading-relaxed"
          >
            Everything you need to know before you lock in.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 bg-primary/40 border-t-2 border-r-2 border-primary/60 overflow-hidden backdrop-blur-sm shadow-xl"
              >
                <dt className="text-xl font-extrabold leading-7 text-white group-hover:text-primary transition-colors tracking-tight">
                  <span className="text-teal-300 mr-3 italic">Q:</span>
                  {faq.question}
                </dt>
                <dd className="mt-6 text-lg leading-relaxed text-white/80 font-medium italic border-l-2 border-text-teal-300 pl-6">
                   {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
