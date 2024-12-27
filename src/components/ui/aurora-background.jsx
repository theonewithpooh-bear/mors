"use client";

import React from "react";
import { motion } from "framer-motion";

export const AuroraBackground = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1a1f2d] to-[#0f172a] z-20" />
        <div className="absolute top-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px] animate-glow-dance" />
        <div className="absolute top-[-15%] right-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px] animate-glow-dance" />
        <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px] animate-glow-dance" />
      </div>
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
};