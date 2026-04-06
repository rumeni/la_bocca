'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Početna', href: '#home' },
  { name: 'O nama', href: '#about' },
  { name: 'Meni', href: '#menu' },
  { name: 'Galerija', href: '#gallery' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        aria-label="Glavna navigacija"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-caramel/30 relative transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="La Bocca Logo"
                fill
                className="object-cover scale-110 -translate-y-[2px]"
                sizes="40px"
              />
            </div>
            <span className={`font-serif text-xl tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-espresso' : 'text-espresso md:text-ivory'
            }`}>
              La Bocca
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-caramel ${
                  isScrolled ? 'text-espresso/80' : 'text-ivory/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-[60] relative transition-colors duration-300 ${
              isMobileMenuOpen ? 'text-ivory' : isScrolled ? 'text-espresso' : 'text-espresso'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[1.5px] bg-current"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[1.5px] bg-current"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[1.5px] bg-current"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-espresso flex flex-col"
          >
            {/* Top bar with logo + close */}
            <div className="flex items-center justify-between px-6 py-6">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-caramel/40 relative">
                  <Image src="/logo.png" alt="La Bocca Logo" fill className="object-cover scale-110" sizes="40px" />
                </div>
                <span className="font-serif text-xl text-ivory tracking-wide">La Bocca</span>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Zatvori meni"
                className="text-ivory/60 hover:text-ivory transition-colors p-1"
              >
                <X size={22} />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-caramel/20" />

            {/* Nav Links */}
            <div className="flex flex-col justify-center flex-1 px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                  className="group flex items-center gap-4 py-4 border-b border-white/5"
                >
                  <span className="text-caramel/40 font-serif text-sm group-hover:text-caramel transition-colors duration-300">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-3xl text-ivory/90 group-hover:text-caramel transition-colors duration-300 tracking-wide">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="px-8 pb-10">
              <p className="text-ivory/20 text-xs tracking-widest uppercase font-sans">
                La Bocca bar · Kraljevo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
