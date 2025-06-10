"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  {
    key: "yolo",
    icon: "🎰🔥",
    title: "YOLO or REKT",
    titleClass: "text-yellow-300",
    content: (
      <>
        <p className="text-2xl md:text-3xl text-white font-extrabold text-center mb-4 max-w-2xl drop-shadow-xl">
          Every <span className="text-pink-400 font-bold">$YOLO</span> buy triggers a high-stakes moment.<br />
          Buy now, and your fate is decided by the next transaction.
        </p>
        <ul className="text-xl md:text-2xl text-white/90 font-bold space-y-2 text-center">
          <li><span className="text-green-400 font-bold">🎯 Lucky?</span> Win up to <span className="text-yellow-300 font-bold">100%</span> bonus tokens</li>
          <li><span className="text-pink-400 font-bold">💥 Rekt?</span> Lose up to <span className="text-red-400 font-bold">50%</span> of that buy</li>
          <li className="text-white/60 font-normal">Only your <span className="text-yellow-300 font-bold">most recent buy</span> is affected.</li>
        </ul>
      </>
    ),
  },
  {
    key: "lottery",
    icon: "🔥💸",
    title: "Lost Tokens & Grand Lottery",
    titleClass: "text-pink-400",
    content: (
      <>
        <ul className="text-xl md:text-2xl text-white/90 font-bold space-y-2 text-center mb-4">
          <li>🔻 <span className="text-red-400 font-bold">30%</span> are <span className="text-yellow-300 font-bold">burned</span></li>
          <li>💰 <span className="text-green-400 font-bold">70%</span> go to the <span className="text-pink-400 font-bold">tax wallet</span></li>
          <li>🏆 Half of tax wallet fuels the <span className="text-yellow-300 font-bold">Grand Lottery</span></li>
        </ul>
        <div className="mt-2 text-2xl md:text-3xl text-yellow-300 font-extrabold text-center drop-shadow-lg">
          Once a week, one past winner gets the jackpot from the Grand Lottery Pool!
        </div>
      </>
    ),
  },
  {
    key: "callout",
    icon: "🏆",
    title: "This is on-chain adrenaline.",
    titleClass: "text-pink-400",
    content: (
      <div className="text-3xl md:text-4xl font-extrabold fredoka-font text-white text-center drop-shadow-lg">
        Play to win. Or get wrecked.
      </div>
    ),
  },
];

export default function HowItWorks() {
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer to detect if section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Section is considered active if much more is visible (stricter threshold)
      const visible = rect.top < vh * 0.2 && rect.bottom > vh * 0.8;
      setActive(visible);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll handler: change step based on scroll position
  useEffect(() => {
    if (!active) return;
    const onScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      // Calculate which step should be active
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const relScroll = scrollY - sectionTop;
      const newStep = Math.min(
        steps.length - 1,
        Math.max(0, Math.round(relScroll / vh))
      );
      setStep(newStep);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  // Scroll to step when arrow is clicked
  const scrollToStep = (idx: number) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    window.scrollTo({
      top: sectionTop + idx * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-yellow-400/10 via-pink-400/10 to-black relative flex flex-col items-center justify-center overflow-hidden z-10"
    >
      {/* Animated background shapes */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-yellow-400 via-pink-400 to-red-400 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-400 to-pink-400 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
      {active && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[step].key}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -80, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.4, 1.2, 0.4, 1] }}
              className="w-full max-w-3xl px-6 py-16 md:py-24 flex flex-col items-center justify-center relative"
              style={{ minHeight: '60vh', background: 'transparent' }}
            >
              {/* Gradient background behind the card content */}
              <div
                className="absolute inset-0 z-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 60% 40%, #fde04788 0%, #f472b688 60%, #1e293b88 100%)',
                  filter: 'blur(32px)',
                  opacity: 0.85,
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center w-full">
                <div className="text-6xl mb-6 select-none">{steps[step].icon}</div>
                <h3 className={`text-4xl md:text-5xl font-extrabold mb-4 text-center drop-shadow-lg fredoka-font ${steps[step].titleClass}`}>{steps[step].title}</h3>
                {steps[step].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      {/* Spacer divs to enable scroll */}
      <div style={{ height: `${steps.length * 100}vh` }} />
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.08); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        html, body, #__next {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
} 