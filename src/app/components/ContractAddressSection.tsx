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
    <section className="w-full flex justify-center items-center py-6 bg-black/80 border-b border-zinc-800">
      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black bg-opacity-95 animate-fade-in-out">
          <span className="text-3xl md:text-5xl font-extrabold text-white fredoka-font text-center drop-shadow-2xl mb-6">
            tryna get rich huh?
          </span>
          <Image src="/headnobg.png" alt="YOLO Head" width={80} height={80} className="drop-shadow-2xl" />
        </div>
      )}
      <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-sm md:max-w-2xl">
        <span className="text-2xl md:text-3xl font-extrabold text-yellow-300 fredoka-font text-center px-4 py-2 rounded-lg bg-zinc-900/80 shadow-inner">
          not launched yet
        </span>
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