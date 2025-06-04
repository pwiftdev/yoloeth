'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import '../app/globals.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPercent(percent);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to interpolate between two hex colors
  function lerpColor(a: string, b: string, t: number) {
    const ah = a.replace('#', '');
    const bh = b.replace('#', '');
    const ar = parseInt(ah.substring(0, 2), 16);
    const ag = parseInt(ah.substring(2, 4), 16);
    const ab = parseInt(ah.substring(4, 6), 16);
    const br = parseInt(bh.substring(0, 2), 16);
    const bg = parseInt(bh.substring(2, 4), 16);
    const bb = parseInt(bh.substring(4, 6), 16);
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return `#${rr.toString(16).padStart(2, '0')}${rg.toString(16).padStart(2, '0')}${rb.toString(16).padStart(2, '0')}`;
  }
  const percentColor = lerpColor('#bab5a5', '#6a8539', scrollPercent / 100);

  return (
    <header className="w-full py-2 px-4 md:px-12 rounded-b-3xl shadow-xl absolute left-0 top-0 z-50 backdrop-blur-md -mb-6 animated-gradient-blur sticky top-0 z-50">
      <div className="flex flex-row items-center justify-between w-full gap-4 md:gap-8">
        <div className="flex items-center">
          <Image src="/headnobg.png" alt="YOLO Logo" width={80} height={80} className="drop-shadow-lg" />
          <span className="text-yellow-300 font-extrabold text-lg md:text-2xl fredoka-font drop-shadow-lg select-none ml-2 md:ml-4"
            style={{ color: percentColor }}
          >
            {Math.round(scrollPercent)}%
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 flex-wrap gap-4 md:gap-8 text-lg md:text-xl font-bold items-center justify-center sticky top-0 z-50">
          <Link href="#tokenomics" className="hover:text-yellow-300 transition-colors">Tokenomics</Link>
          <Link href="#how" className="hover:text-yellow-300 transition-colors">How It Works</Link>
          <Link href="#community" className="hover:text-yellow-300 transition-colors">Community</Link>
        </nav>
        {/* Buy Button only on desktop */}
        <a href="#buy" className="hidden md:inline-block ml-0 md:ml-4 px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors fredoka-font whitespace-nowrap text-base md:text-xl font-extrabold">
          BUY NOW
        </a>
        {/* Hamburger Icon for Mobile/Tablet */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-lg hover:bg-white/10 transition-colors z-50"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-8 h-1 bg-white rounded-full mb-1" />
          <span className="block w-8 h-1 bg-white rounded-full mb-1" />
          <span className="block w-8 h-1 bg-white rounded-full" />
        </button>
      </div>
      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center w-full h-full min-h-screen">
          <div className="absolute inset-0 animated-gradient-blur" />
          <div className="absolute inset-0 bg-black/70" />
          <button
            className="fixed top-6 right-6 text-white text-4xl font-bold hover:text-pink-400 transition-colors z-[200]"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="relative z-[150] flex flex-col items-center justify-center gap-8 text-3xl font-extrabold fredoka-font w-full sticky top-0 z-50">
            <Link href="#tokenomics" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition-colors px-6 py-3">Tokenomics</Link>
            <Link href="#how" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition-colors px-6 py-3">How It Works</Link>
            <Link href="#community" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition-colors px-6 py-3">Community</Link>
            <a href="#buy" onClick={() => setMenuOpen(false)} className="px-8 py-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors fredoka-font mt-6">
              BUY NOW
            </a>
          </nav>
        </div>
      )}
    </header>
  );
} 