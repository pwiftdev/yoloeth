import "./globals.css";
import Header from "../components/Header";
import { Bangers } from "next/font/google";
import React from "react";

const bangers = Bangers({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bangers.className + " p-0 m-0"}>
      <body className="bg-[#1a1a1a] min-h-screen p-0 m-0">
        <Header />
        {children}
      </body>
    </html>
  );
}
