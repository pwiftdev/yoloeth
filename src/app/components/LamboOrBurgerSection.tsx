"use client";

import { useState } from "react";

const GIFS = {
  lambo: "/PEPELAMBO-2-ezgif.com-resize.gif",
  burger: "/PEPESADREVISI2-ezgif.com-resize.gif",
};

export default function LamboOrBurgerSection() {
  const [show, setShow] = useState<null | "lambo" | "burger">(null);

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center bg-black/80">
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-8 text-center fredoka-font drop-shadow-lg">
        What&apos;s your fate?
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 w-full max-w-md">
        <button
          className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-2xl font-extrabold rounded-full shadow-lg hover:scale-105 transition-all fredoka-font text-white"
          onClick={() => setShow("lambo")}
        >
          Lambo Keys?
        </button>
        <button
          className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-zinc-800 text-2xl font-extrabold rounded-full shadow-lg hover:scale-105 transition-all fredoka-font text-white"
          onClick={() => setShow("burger")}
        >
          Burger Grease?
        </button>
      </div>
      {show && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-50 cursor-pointer animate-fade-in"
          onClick={() => setShow(null)}
          style={{ background: "rgba(0,0,0,0.98)" }}
        >
          <img
            src={GIFS[show]}
            alt={show === "lambo" ? "Lambo GIF" : "Sad Burger GIF"}
            className="max-w-full max-h-full object-contain drop-shadow-2xl"
            style={{ width: "80vw", height: "80vh" }}
          />
          <button
            className="absolute top-8 right-8 text-white text-4xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-black/80 transition"
            onClick={e => { e.stopPropagation(); setShow(null); }}
            aria-label="Close GIF overlay"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
} 