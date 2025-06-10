import Image from "next/image";
import MemeChaosText from "./components/MemeChaosText";
import dynamic from "next/dynamic";
import TokenomicsMovingGradients from "./components/TokenomicsMovingGradients";
import ContractAddressSection from "./components/ContractAddressSection";
import AnimatedInView from "./components/AnimatedInView";
import { motion } from "framer-motion";
import HowItWorks from "./components/HowItWorks";
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
      {/* How It Works Section */}
      <HowItWorks />
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
      {/* Community Section */}
      <AnimatedInView>
        <section id="community" className="w-full py-24 bg-gradient-to-b from-black via-zinc-900 to-black flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col items-center gap-8">
            <h2 className="text-5xl md:text-6xl font-extrabold fredoka-font text-yellow-300 mb-4 text-center drop-shadow-lg">
              JOIN THE $YOLO COMMUNITY
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 fredoka-font text-center max-w-2xl mb-6">
              Track every win and every rekt moment—<span className="text-pink-400 font-extrabold">all documented by our custom Telegram bot</span>.<br/>
              See who&apos;s up, who&apos;s down, and who&apos;s the next $YOLO legend or meme. Don&apos;t miss out!
            </p>
            <a
              href="https://t.me/yoloeth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-gradient-to-r from-green-400 to-pink-500 text-white text-3xl md:text-4xl font-extrabold rounded-full shadow-2xl hover:scale-105 transition-all fredoka-font flex items-center gap-4 mt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 6.584a.75.75 0 0 0-1.04-.832l-17.25 7.5a.75.75 0 0 0 .04 1.39l4.89 1.96 2.06 4.12a.75.75 0 0 0 1.36-.02l2.13-4.26 4.89 1.96a.75.75 0 0 0 1.04-.832l-1.5-12Z" />
              </svg>
              <span>Join Telegram</span>
            </a>
          </div>
        </section>
      </AnimatedInView>
      {/* Rest of the page... */}
    </main>
  );
}
