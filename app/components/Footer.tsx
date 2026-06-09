'use client';

import Image from 'next/image';
import { useState } from 'react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy',
  });

  return (
    <footer className="pt-32 pb-16 bg-primary">
      <div className="mx-auto max-w-screen-2xl z-10 px-6 lg:px-8 border-t border-white/80 pt-10">
        
        {/* Главна содржина во футерот - Тргнат вишокот transform-gpu од целиот grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Контакт */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-6 uppercase tracking-widest">Contact:</h3>
            <ul className="space-y-4">
              <li className="text-white/80 text-sm font-bold hover:text-white transition-colors cursor-default">info@roomyxr.com</li>
            </ul>
          </div>

          {/* Заедница */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-6 uppercase tracking-widest">Community:</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all group"
                >
                  {/* Тргнат transform-gpu бидејќи се менува само боја на hover */}
                  <svg className="w-5 h-5 text-white/80 group-hover:text-[#5865F2] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.093 13.093 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                  </svg>
                  <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-300">Discord</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Социјални Мрежи */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-6 uppercase tracking-widest">Follow us:</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://youtube.com/@YOUR_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all group"
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-[#FF0000] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-300">YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@YOUR_ACCOUNT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all group"
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-[#00F2FE] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31.01 2.61.03 3.91.05a5.535 5.535 0 0 0-.21 2.37A5.543 5.543 0 0 0 19 6.81c0 .65.01 1.3.01 1.95a8.12 8.12 0 0 1-4.49-1.93v7.37a5.352 5.352 0 1 1-4.32-5.24c.02.66.01 1.32.01 1.98a3.36 3.36 0 1 0 2.32 3.19V0h-.01z"/>
                  </svg>
                  <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-300">TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/YOUR_COMPANY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all group"
                >
                  <svg className="w-5 h-5 text-white/80 group-hover:text-[#0A66C2] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Поддршка */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-6 uppercase tracking-widest">Backed By:</h3>
            <ul className="space-y-4">
              <li className="text-white/80 font-bold uppercase text-sm tracking-tighter cursor-default">In 3D Technology</li>
              <li className="text-white/80 font-bold uppercase text-sm tracking-tighter cursor-default">Start Up Club Skopje</li>
            </ul>
          </div>

          {/* Повик за Акција (CTA Button) - Овде КЛУЧНО стои transform-gpu за мазен scale */}
          <div className="flex flex-col items-start lg:items-end justify-start">
            <a
              href="#special-offer"
              className="rounded-full bg-white px-8 py-3 text-sm font-extrabold text-primary shadow-2xl hover:bg-gray-100 transition-transform duration-300 transform-gpu hover:scale-110 uppercase tracking-widest"
            >
              BECOME FOUNDER
            </a>
            <p className="mt-4 text-xs text-white/80 font-bold italic text-left lg:text-right uppercase tracking-tighter">
              It's not a sale;<br/>
              It's an investment in your future aura
            </p>
          </div>
        </div>

        {/* Долен дел на футерот */}
        <div className="mt-24 border-t border-white/80 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-white/80 font-bold uppercase tracking-[0.3em] text-center md:text-left">
            Copyright @ 2026 Roomy | All Rights Reserved
          </p>
          
          <div className="flex items-center justify-center">
            <Image 
              src="/logo.svg" 
              alt="Roomy Logo" 
              width={120} 
              height={40} 
              className="w-[100px] lg:w-[140px] mr-1" 
              priority
            />
          </div>

          {/* Копчиња за правни работи - Исчистен вишокот графички слоеви */}
          <div className="flex gap-x-8 text-sm text-white/80 font-bold">
            <button 
              onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })} 
              className="hover:text-white transition-colors duration-300 uppercase"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setLegalModal({ isOpen: true, type: 'terms' })} 
              className="hover:text-white transition-colors duration-300 uppercase"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
      
      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
      />
    </footer>
  );
}