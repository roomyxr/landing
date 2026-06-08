'use client';

import { motion } from 'framer-motion';

export default function thew() {
    return (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-screen mx-auto "
        >
            <h3 className="text-3xl lg:text-5xl font-extrabold text-primary mb-[-10px] tracking-tighter pl-10 lg:pl-40">The W:</h3>
            <div className=" bg-primary ">
                <div className="max-w-screen-2xl mx-auto gap-12 p-6 lg:p-8 group">
                    <p className="text-xl text-white/80 font-medium leading-relaxed italic">
                        <span className="inline-block text-teal-300 group-hover:scale-125 transition-transform duration-300">
                            ✔
                        </span> 
                        {" "}You aren't just buying a VR room; you are buying <strong className="text-white">professional upgrade</strong>. From university to the boardroom, Roomy scale with your success!
                    </p>
                </div>
            </div>
        </motion.div>
    );
}