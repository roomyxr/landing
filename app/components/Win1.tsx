'use client';

import { motion } from 'framer-motion';

export default function win1() {
    return (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-screen mx-auto "
        >
            <h3 className="text-3xl lg:text-5xl font-extrabold text-primary mb-[-10px] tracking-tighter pl-10 lg:pl-40">Why it`s a W:</h3>
            <div className=" bg-primary ">
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-12 sm:grid-cols-3 p-6 lg:p-8">
                    <div className="group">
                        <h4 className="font-extrabold text-white text-xl flex items-center gap-3">
                            <span className="text-teal-300 group-hover:scale-125 transition-transform">✔</span> Personalized
                        </h4>
                        <p className="mt-4 text-white/80 text-lg lg:text-nowrap leading-relaxed italic">it adapts to your energy, not the other way around</p>
                    </div>
                    <div className="group">
                        <h4 className="font-extrabold text-white text-xl flex items-center gap-3">
                            <span className="text-teal-300 group-hover:scale-125 transition-transform">✔</span> Holistic
                        </h4>
                        <p className="mt-4 text-white/80 text-lg lg:text-nowrap leading-relaxed italic">It balances mental health with high productivity.</p>
                    </div>
                    <div className="group">
                        <h4 className="font-extrabold text-white text-xl flex items-center gap-3">
                            <span className="text-teal-300 group-hover:scale-125 transition-transform">✔</span> Future-Proof
                        </h4>
                        <p className="mt-4 text-white/80 text-lg lg:text-nowrap leading-relaxed italic">Built for Meta Quest and Vision pro a high-end experince</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}