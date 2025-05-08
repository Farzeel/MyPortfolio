import React from 'react';
import { motion } from 'framer-motion';

export default function PulseGrid() {
//   const gridItems = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="hidden lg:flex items-center justify-center   p-12">
    <div className="max-w-md text-center">
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square w-[100px] rounded-2xl bg-primary/10 ${
              i % 2 === 0 ? "animate-pulse" : ""
            }`}
          />
        ))}
      </div>
     
    </div>
  </div>
  );
}