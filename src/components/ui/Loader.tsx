"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="w-full max-w-xs px-6">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">System Load</span>
              <span className="text-3xl font-black tracking-tighter text-white">{progress}%</span>
            </div>
            <div className="w-full h-px bg-white/5 relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-white" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
