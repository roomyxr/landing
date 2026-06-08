'use client';

interface StoreBadgesProps {
  onBadgeClick: () => void;
}

export default function StoreBadges({ onBadgeClick }: StoreBadgesProps) {
  return (
    <div className="flex flex-row max-w-screen-lg w-full justify-between"> 
        {/* МЕТА ХОРИЗОН БЕЏ */}
        <button
          onClick={onBadgeClick}
          className="flex items-center gap-2.5 px-2 md:px-5 py-1 md:py-2.5 transition-all group cursor-pointer"
        >
          {/* Чист Meta SVG Лого */}
          <svg className="w-5 h-5 md:w-15 md:h-15 text-white group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <div className="text-left flex flex-col">
            <span className="text-[7px] md:text-[9px] md:font-bold text-white/60 uppercase tracking-wider leading-none">Coming soon to</span>
            <span className="text-xs md:text-lg whitespace-nowrap font-bold md:font-extrabold text-white tracking-tight leading-tight mt-0.5">Meta Horizon</span>
          </div>
        </button>

        {/* СТИМ БЕЏ - Средено и исчистено лого */}
        <button
          onClick={onBadgeClick}
          className="flex items-center gap-2.5 px-5 py-2.5 transition-all group cursor-pointer"
        >
          {/* Чист Steam SVG Лого */}
          <svg className="w-5 h-5 md:w-15 md:h-15 text-white group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .007c-5.713 0-10.485 4.02-11.74 9.408l5.228 2.158c.44-.316.974-.504 1.554-.504.887 0 1.66.442 2.122 1.115l4.636-2.036c.045-2.22 1.862-4 4.095-4 2.26 0 4.103 1.844 4.103 4.103 0 2.26-1.844 4.103-4.103 4.103-2.146 0-3.906-1.656-4.088-3.766L8.41 16.643c-.027.67-.32 1.264-.783 1.688l2.193 5.323c4.852-.613 8.643-4.73 8.643-9.714 0-5.49-4.464-9.933-9.933-9.933zm6.05 11.936c0-1.656-1.34-2.996-2.997-2.996-1.656 0-2.996 1.34-2.996 2.996 0 1.657 1.34 2.997 2.996 2.997 1.657 0 2.996-1.34 2.996-2.997z"/>
          </svg>
          <div className="text-left flex flex-col">
            <span className="text-[7px] md:text-[9px] md:font-bold text-white/60 uppercase tracking-wider leading-none">Wishlist on</span>
            <span className="text-xs md:text-lg whitespace-nowrap font-bold md:font-extrabold text-white tracking-tight leading-tight mt-0.5">Steam VR</span>
          </div>
        </button>

        {/* ДИСКОРД БЕЏ */}
        <a
            href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 transition-all group cursor-pointer"
          >
            <svg className="w-5 h-5 md:w-15 md:h-15 text-white group-hover:text-[#5865F2] transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.093 13.093 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
            </svg>
            <div className="text-left flex flex-col">
                <span className="text-[7px] md:text-[9px] md:font-bold text-white/60 whitespace-nowrap uppercase tracking-wider leading-none">Connect on</span>
                <span className="text-xs md:text-lg whitespace-nowrap font-bold md:font-extrabold text-white tracking-tight leading-tight mt-0.5">Discord</span>
            </div>
          </a>
    </div>
  );
}
