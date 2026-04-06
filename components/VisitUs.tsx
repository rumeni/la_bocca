'use client';

import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-espresso text-ivory relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12">
              Posetite <span className="italic text-caramel">nas</span>
            </h2>

            <div className="space-y-8 md:space-y-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg md:text-xl mb-1 md:mb-2 tracking-wide">Lokacija</h4>
                  <p className="text-ivory/70 font-light text-sm md:text-base">Radničkog Bataljona 33<br/>Kraljevo, Srbija</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg md:text-xl mb-1 md:mb-2 tracking-wide">Radno vreme</h4>
                  <ul className="text-ivory/70 font-light space-y-1 text-sm md:text-base">
                    <li className="flex justify-between gap-6"><span>Pon - Čet:</span> <span>07:00 - 23:00</span></li>
                    <li className="flex justify-between gap-6"><span>Petak:</span> <span>07:00 - 00:00</span></li>
                    <li className="flex justify-between gap-6"><span>Subota:</span> <span>08:00 - 00:00</span></li>
                    <li className="flex justify-between gap-6"><span>Nedelja:</span> <span>08:00 - 23:00</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-ivory/10">
              <a
                href="https://www.instagram.com/laboccabar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ivory hover:text-caramel transition-colors group py-2"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
                <span className="tracking-widest uppercase text-xs sm:text-sm">Pratite nas na Instagramu</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[280px] sm:h-[360px] lg:h-auto min-h-[280px] lg:min-h-[400px] border border-ivory/10 overflow-hidden"
          >
            <iframe
              title="Lokacija La Bocca bara na Google mapi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d20.67599!3d43.7080009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475701004407e8a7%3A0xc5bff6ae832f8500!2sLa+Bocca+Bar!5e0!3m2!1ssr!2srs!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
