import React, { useEffect, useRef } from "react";

const gradients = [
  "from-yellow-400 via-pink-400 to-red-400",
  "from-green-400 via-lime-300 to-emerald-400",
  "from-blue-400 via-cyan-400 to-teal-400",
  "from-purple-400 via-fuchsia-400 to-pink-400",
  "from-orange-400 via-yellow-300 to-lime-300",
  "from-pink-400 via-red-400 to-yellow-400",
];

const circles = [
  { size: 220, duration: 18, delay: 0 },
  { size: 160, duration: 14, delay: 2 },
  { size: 120, duration: 20, delay: 4 },
  { size: 180, duration: 16, delay: 1 },
  { size: 100, duration: 22, delay: 3 },
  { size: 140, duration: 19, delay: 2.5 },
];

export default function TokenomicsMovingGradients() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {circles.map((circle, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-40 animate-tokenomics-float bg-gradient-to-br ${gradients[i % gradients.length]}`}
          style={{
            width: circle.size,
            height: circle.size,
            left: `calc(10% + ${i * 15}%)`,
            top: `calc(20% + ${(i % 3) * 25}%)`,
            animationDuration: `${circle.duration}s`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes tokenomics-float {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          25% { transform: translateY(-30px) scale(1.08) rotate(8deg); }
          50% { transform: translateY(20px) scale(0.96) rotate(-6deg); }
          75% { transform: translateY(-10px) scale(1.04) rotate(4deg); }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }
        .animate-tokenomics-float {
          animation: tokenomics-float infinite linear;
        }
      `}</style>
    </div>
  );
} 