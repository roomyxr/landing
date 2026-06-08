'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/30 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-screen-2xl mx-auto" aria-label="Global">
        {/* Left: Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105 ">
            <Image 
              src="/logo.svg" 
              alt="Roomy Logo" 
              width={0} 
              height={0} 
              style={{ height: "auto" }} 
              className="w-[140px] lg:w-[200px] mr-1" 
              priority
            />
          </Link>
        </div>

        {/* Right: CTA Button */}
        <div className="flex flex-1 justify-end">
          <a
            href="#"
            className="rounded-full bg-white/20 px-5 py-2 lg:px-8 lg:py-3 text-[10px] lg:text-sm font-bold text-primary shadow-xl"
          >
            Try ROOMY
          </a>
        </div>
      </nav>
    </header>
  );
}
