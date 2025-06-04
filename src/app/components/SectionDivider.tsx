import React from "react";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center my-16">
      <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-green-400 via-yellow-300 to-pink-500 animate-gradient-x shadow-lg" />
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 