"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const data = [
  { label: "DEX Liquidity Pool", value: 20, color: "#22c55e", description: "Provides liquidity for decentralized trading." },
  { label: "Marketing", value: 10, color: "#f43f5e", description: "Funds for meme campaigns and viral growth." },
  { label: "Rebase Pool", value: 40, color: "#3b82f6", description: "Automated rewards and rebase mechanics." },
  { label: "Development", value: 10, color: "#f59e0b", description: "Dev team, audits, and new features." },
  { label: "CEX Liquidity Reserves", value: 20, color: "#8b5cf6", description: "Liquidity for centralized exchanges." },
];

export default function TokenomicsPieChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.pie-segment')) {
        setActiveIndex(null);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative aspect-square">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform -rotate-90"
        >
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const startAngle = currentAngle;
            currentAngle += (percentage / 100) * 360;
            const endAngle = currentAngle;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = 50 + 40 * Math.cos(startRad);
            const y1 = 50 + 40 * Math.sin(startRad);
            const x2 = 50 + 40 * Math.cos(endRad);
            const y2 = 50 + 40 * Math.sin(endRad);

            const largeArcFlag = percentage > 50 ? 1 : 0;

            const path = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <path
                key={item.label}
                d={path}
                fill={item.color}
                className={`pie-segment transition-all duration-300 cursor-pointer ${
                  isActive || isHovered
                    ? "opacity-100 scale-110 z-20 shadow-2xl"
                    : hoveredIndex === null && activeIndex === null
                    ? "opacity-80"
                    : "opacity-40"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={e => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
                style={{
                  transformOrigin: "center",
                  transform: isVisible ? "scale(1)" : "scale(0)",
                  transition: "transform 0.5s cubic-bezier(0.4, 1.2, 0.4, 1)",
                  transitionDelay: `${index * 0.1}s`,
                }}
              />
            );
          })}
        </svg>
        {/* Tooltip */}
        {(hoveredIndex !== null || activeIndex !== null) && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[120%] bg-black/90 text-white rounded-xl px-6 py-4 shadow-2xl z-30 min-w-[220px] text-center animate-fade-in"
            style={{ pointerEvents: 'none' }}
          >
            <div className="text-lg font-bold mb-1">
              {data[hoveredIndex ?? activeIndex!].label}
            </div>
            <div className="text-2xl font-extrabold mb-1">
              {data[hoveredIndex ?? activeIndex!].value}%
            </div>
            <div className="text-sm opacity-80">
              {data[hoveredIndex ?? activeIndex!].description}
            </div>
          </div>
        )}
        {/* Centered headnobg image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
          <Image src="/headnobg.png" alt="YOLO Head" width={60} height={60} className="rounded-full shadow-xl" />
        </div>
      </div>
      {/* Legend: 2 per row, larger, perfectly aligned, left-aligned */}
      <div className="grid grid-cols-2 gap-6 mt-10 w-full max-w-xl mx-auto">
        {data.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center gap-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer text-lg font-extrabold fredoka-font shadow-md bg-black/10 min-w-[220px] w-full max-w-full ${
              hoveredIndex === index || activeIndex === index
                ? "bg-black/20 scale-105"
                : hoveredIndex === null && activeIndex === null
                ? "bg-black/10"
                : "bg-black/5"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(index)}
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.4, 1.2, 0.4, 1)",
              transitionDelay: `${(index + 5) * 0.1}s`,
            }}
          >
            <div
              className="w-5 h-5 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex flex-col items-start justify-center min-w-0">
              <div className="font-extrabold fredoka-font text-xl leading-tight">{item.value}%</div>
              <div className="text-base opacity-80 fredoka-font leading-tight whitespace-normal break-words">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 