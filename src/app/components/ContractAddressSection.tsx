"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ContractAddressSection() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const contract = "0x45c8994A2BeB155A2aE9982Ca41C5582D8d0C9c3";
  // Split for visual break
  const contractFirst = contract.slice(0, 22);
  const contractSecond = contract.slice(22);
  const [showOverlay, setShowOverlay] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  }

  return (
    <section className="w-full flex justify-center items-center py-12 bg-black/80 border-b border-zinc-800 min-h-[120px]">
      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black bg-opacity-95 animate-fade-in-out">
          <span className="text-3xl md:text-5xl font-extrabold text-white fredoka-font text-center drop-shadow-2xl mb-6">
            tryna get rich huh?
          </span>
          <Image src="/headnobg.png" alt="YOLO Head" width={80} height={80} className="drop-shadow-2xl" />
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mx-auto w-full max-w-sm md:max-w-2xl">
        <span className="text-lg md:text-2xl font-mono text-green-400 bg-zinc-900 px-4 py-2 rounded-lg select-all shadow-inner break-all">
          <span className="block md:inline">{contractFirst}</span>
          <span className="block md:inline">{contractSecond}</span>
        </span>
        <button
          ref={btnRef}
          onClick={handleCopy}
          className="px-6 py-2 bg-gradient-to-r from-green-400 to-pink-500 text-white font-extrabold rounded-full shadow-lg hover:scale-105 transition-all fredoka-font text-lg md:text-xl"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </section>
  );
} 