"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const HEIGHT = 320;
const LINE_COUNT = 12; // Increased number of lines for more chaos

// Use window width for full span, fallback to 1440px for SSR
function getWidth() {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return 1440;
}

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// Helper to generate a random trend line with better distribution
function randomTrendLine(width: number) {
  const isGreen = Math.random() > 0.5;
  
  // Divide the height into sections to ensure even distribution
  const sections = 4;
  const sectionHeight = HEIGHT / sections;
  
  // Pick random start and end sections
  const startSection = Math.floor(Math.random() * sections);
  const endSection = Math.floor(Math.random() * sections);
  
  // Generate points within those sections
  const start = {
    x: Math.random() * width,
    y: startSection * sectionHeight + Math.random() * sectionHeight,
  };
  const end = {
    x: Math.random() * width,
    y: endSection * sectionHeight + Math.random() * sectionHeight,
  };

  const points = [start];
  const segments = 6 + Math.floor(Math.random() * 4);
  
  for (let i = 1; i < segments - 1; ++i) {
    const t = i / (segments - 1);
    let x = start.x + (end.x - start.x) * t;
    let y = start.y + (end.y - start.y) * t;
    
    // Add zigzag movement
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    
    // Perpendicular vector for zigzag
    const px = -dy / len;
    const py = dx / len;
    
    // Dynamic amplitude based on section
    const sectionY = Math.floor(y / sectionHeight);
    const amp = 15 + Math.random() * 15;
    
    // Alternate direction for each segment
    const sign = i % 2 === 0 ? 1 : -1;
    x += px * amp * sign * (0.5 + Math.random() * 0.5);
    y += py * amp * sign * (0.5 + Math.random() * 0.5);
    
    // Clamp to SVG area with padding
    x = Math.max(20, Math.min(width - 20, x));
    y = Math.max(20, Math.min(HEIGHT - 20, y));
    
    points.push({ x, y });
  }
  points.push(end);
  
  return { points, isGreen };
}

export default function TokenomicsCandlesBg() {
  const [width, setWidth] = useState(getWidth());
  const [lines, setLines] = useState<any[]>(() =>
    Array.from({ length: LINE_COUNT }, () => randomTrendLine(width))
  );
  const [animateKey, setAnimateKey] = useState(0);

  // Responsive width
  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate lines every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLines(Array.from({ length: LINE_COUNT }, () => randomTrendLine(width)));
      setAnimateKey((k) => k + 1);
    }, 10000); // 10 seconds per set
    return () => clearInterval(interval);
  }, [width]);

  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
      <svg
        width={width}
        height={HEIGHT}
        viewBox={`0 0 ${width} ${HEIGHT}`}
        className="w-full h-[320px] opacity-40"
        style={{ filter: "blur(0.5px)" }}
      >
        {lines.map((line, i) => {
          const points = line.points;
          let length = 0;
          for (let j = 1; j < points.length; ++j) {
            const dx = points[j].x - points[j - 1].x;
            const dy = points[j].y - points[j - 1].y;
            length += Math.sqrt(dx * dx + dy * dy);
          }
          
          return (
            <polyline
              key={animateKey + '-' + i}
              points={points.map((p: any) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke={line.isGreen ? "#22c55e" : "#f43f5e"}
              strokeWidth={3}
              opacity={0.7}
              style={{
                filter: `drop-shadow(0 2px 8px ${line.isGreen ? '#22c55e88' : '#f43f5e88'})`,
                strokeDasharray: length,
                strokeDashoffset: length,
                animation: `reveal-line 2.5s cubic-bezier(.4,1.2,.4,1) forwards, fade-out 0.5s ease-out ${9.5}s forwards`,
                animationDelay: `${0.2 + i * 0.08}s`,
              }}
            />
          );
        })}
        <style>{`
          @keyframes reveal-line {
            to { stroke-dashoffset: 0; }
          }
          @keyframes fade-out {
            to { opacity: 0; }
          }
        `}</style>
      </svg>
    </div>
  );
} 