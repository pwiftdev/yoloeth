"use client";
import { useMemo, useState, useEffect } from "react";

const WORDS = [
  "LUCKY",
  "REKT",
  "FUCK",
  "I LOST",
  "HELL YEAHHH",
  "IM OUT",
  "PAPER HANDS",
  "FUCK TA",
  "YOLO",
  "TOP G",
];
const COLORS = [
  "from-yellow-400 to-green-400",
  "from-pink-500 to-purple-500",
  "from-green-400 to-lime-400",
  "from-red-400 to-pink-400",
  "from-blue-400 to-cyan-400",
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ANIMATIONS = [
  "chaos-fly-in",
  "chaos-wiggle",
  "chaos-flash",
  "chaos-strike",
  "chaos-spin",
  "animate-chaos-pop",
];

export default function MemeChaosText({ count = 12 }: { count?: number }) {
  // To force remount and re-randomize chaos after each cycle
  const [cycle, setCycle] = useState(0);

  // All words use the same duration for sync, but each word can have a random duration for more chaos
  const maxDuration = 2.8; // seconds

  useEffect(() => {
    const timeout = setTimeout(() => setCycle((c) => c + 1), maxDuration * 1000);
    return () => clearTimeout(timeout);
  }, [cycle]);

  const chaos = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const top = getRandomInt(5, 75); // percent
      const left = getRandomInt(5, 85); // percent
      const delay = Math.random() * 1.2; // seconds
      const duration = 1.2 + Math.random() * 1.6; // seconds
      const scale = 0.7 + Math.random() * 1.6;
      const rotate = getRandomInt(-30, 30);
      const animation = ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)];
      const fontSize = getRandomInt(2, 5); // 2xl to 5xl
      return { word, color, top, left, delay, duration, scale, rotate, animation, fontSize };
    });
  }, [count]);

  return (
    <>
      {chaos.map((item, i) => (
        <span
          key={cycle + "-" + i}
          className={`pointer-events-none select-none text-${item.fontSize}xl md:text-${item.fontSize + 2}xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${item.color} fredoka-font drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ${item.animation}`}
          style={{
            position: "absolute",
            top: `${item.top}%`,
            left: `${item.left}%`,
            transform: `translate(-50%, -50%) scale(${item.scale}) rotate(${item.rotate}deg)`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            zIndex: 20,
            whiteSpace: "nowrap",
          }}
        >
          {item.word}
        </span>
      ))}
    </>
  );
} 