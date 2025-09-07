import Image from "next/image";
import MemeChaosText from "./components/MemeChaosText";
import dynamic from "next/dynamic";
import TokenomicsMovingGradients from "./components/TokenomicsMovingGradients";
import ContractAddressSection from "./components/ContractAddressSection";
import AnimatedInView from "./components/AnimatedInView";
import { motion } from "framer-motion";
import LamboOrBurgerSection from "./components/LamboOrBurgerSection";

const TokenomicsPieChart = dynamic(() => import("./components/TokenomicsPieChart"), { ssr: false });
const TokenomicsCandlesBg = dynamic(() => import("./components/TokenomicsCandlesBg"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full p-0 m-0">
      {/* Hero Section */}
      <AnimatedInView>
        <section className="w-full relative p-0 m-0 h-[60vh] animate-fade-in">
          <Image src="/banner.jpg" alt="YOLO Banner" width={1920} height={600} className="w-full h-[60vh] object-cover object-center shadow-2xl" priority />
          {/* Dimming overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20 mt-48 md:mt-64">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] boldonse-font text-yellow-300"
              style={{ WebkitTextStroke: '2px black' }}
            >
              LAMBO KEYS,<br />OR BURGER GREASE?
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-center max-w-2xl drop-shadow-lg fredoka-font px-4">
              GambleFi Memecoin where every buy is a bet, and every bet can make you a legend... OR a meme.
            </p>
            <a href="#buy" className="px-8 py-3 bg-pink-500 text-white text-xl font-extrabold rounded-full shadow-lg hover:bg-pink-600 transition-colors fredoka-font">
              BUY NOW
            </a>
          </div>
        </section>
      </AnimatedInView>
      <AnimatedInView>
        <ContractAddressSection />
      </AnimatedInView>
      {/* Meme Section */}
      <AnimatedInView>
        <section className="w-full relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 animated-gradient-bg">
          <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
            {/* Chaos Text */}
            <MemeChaosText count={14} />
            {/* Character */}
            <div className="relative w-full aspect-square max-w-2xl">
              <Image 
                src="/charnobg.png" 
                alt="YOLO Character" 
                fill
                className="object-contain drop-shadow-2xl animate-float"
                priority
              />
            </div>
          </div>
        </section>
      </AnimatedInView>
      {/* Lambo or Burger Section */}
      <LamboOrBurgerSection />
      {/* Tokenomics Section */}
      <AnimatedInView>
        <section id="tokenomics" className="w-full py-24 relative overflow-hidden bg-black">
          <TokenomicsMovingGradients />
          <TokenomicsCandlesBg />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2
                className="text-6xl font-extrabold mb-4"
                style={{ fontFamily: "'Fredoka', Arial, Helvetica, sans-serif", fontWeight: 700, color: '#fde047', letterSpacing: '0.01em' }}
              >
                TOKENOMICS
              </h2>
              <p
                className="text-2xl text-white/80 max-w-2xl mx-auto"
                style={{ fontSize: '130%' }}
              >
                A perfectly balanced distribution for maximum YOLO potential. 
                No paper hands, only diamond hands allowed.
              </p>
              <div className="mt-6 text-3xl font-extrabold fredoka-font text-yellow-300 drop-shadow-lg">
                Total Supply: <span className="text-white">1,000,000,000</span> $YOLO
              </div>
            </div>
            
            <div className="relative">
              <TokenomicsPieChart />
            </div>
          </div>
        </section>
      </AnimatedInView>
      {/* X Link Section */}
      <AnimatedInView>
        <section id="community" className="w-full py-24 bg-gradient-to-b from-black via-zinc-900 to-black flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col items-center gap-8">
            <h2 className="text-5xl md:text-6xl font-extrabold fredoka-font text-yellow-300 mb-4 text-center drop-shadow-lg">
              FOLLOW $YOLO
            </h2>
            <a
              href="https://x.com/yoloitfam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-gradient-to-r from-blue-400 to-pink-500 text-white text-3xl md:text-4xl font-extrabold rounded-full shadow-2xl hover:scale-105 transition-all fredoka-font flex items-center gap-4 mt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Follow on X</span>
            </a>
          </div>
        </section>
      </AnimatedInView>
      {/* Rest of the page... */}
    </main>
  );
}
