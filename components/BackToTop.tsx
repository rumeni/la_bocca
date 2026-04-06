'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Nazad na vrh"
          className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-espresso border border-caramel/30 text-ivory flex items-center justify-center shadow-lg hover:bg-caramel hover:border-caramel transition-colors duration-300 hidden md:flex"
        >
          <ChevronUp size={20} strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
