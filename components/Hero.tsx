'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/1.png"
          alt="La Bocca bar interior"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-espresso/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-ivory" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-caramel/50 bg-espresso/80 backdrop-blur-sm flex items-center justify-center mb-8 relative overflow-hidden"
        >
          <Image 
            src="/logo.png" 
            alt="La Bocca Logo" 
            fill 
            className="object-cover scale-110 -translate-y-[2px]"
            sizes="(max-width: 768px) 96px, 128px"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 tracking-tight"
        >
          La Bocca <span className="italic text-caramel font-light">bar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-ivory/90 font-light tracking-widest uppercase mb-12"
        >
          Good coffee. Good people. Good mood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-caramel text-white text-sm tracking-widest uppercase hover:bg-copper transition-colors duration-300"
          >
            Pogledaj meni
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-ivory/50 text-ivory text-sm tracking-widest uppercase hover:bg-ivory hover:text-espresso transition-colors duration-300 backdrop-blur-sm"
          >
            Poseti nas
          </a>
        </motion.div>
      </div>
    </section>
  );
}
