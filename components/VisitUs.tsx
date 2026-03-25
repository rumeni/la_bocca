'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, Instagram, Phone } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-espresso text-ivory relative overflow-hidden">
      {/* Subtle background pattern/texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-12">
              Posetite <span className="italic text-caramel">nas</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2 tracking-wide">Lokacija</h4>
                  <p className="text-ivory/70 font-light">Radničkog Bataljona 33<br/>Kraljevo, Srbija</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2 tracking-wide">Radno vreme</h4>
                  <ul className="text-ivory/70 font-light space-y-1">
                    <li className="flex justify-between w-48"><span>Pon - Čet:</span> <span>07:00 - 23:00</span></li>
                    <li className="flex justify-between w-48"><span>Petak:</span> <span>07:00 - 00:00</span></li>
                    <li className="flex justify-between w-48"><span>Subota:</span> <span>08:00 - 00:00</span></li>
                    <li className="flex justify-between w-48"><span>Nedelja:</span> <span>08:00 - 23:00</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-caramel shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-2 tracking-wide">Kontakt</h4>
                  <p className="text-ivory/70 font-light">+381 60 123 4567</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-ivory/10">
              <a 
                href="https://www.instagram.com/laboccabar/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-ivory hover:text-caramel transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="tracking-widest uppercase text-sm">Pratite nas na Instagramu</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.a 
            href="https://www.google.com/maps/place/Radni%C4%8Dkog+bataljona+33,+Kraljevo,+Serbia"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] lg:h-auto min-h-[400px] bg-taupe/10 border border-ivory/10 flex items-center justify-center relative overflow-hidden group hover:border-caramel/50 transition-colors cursor-pointer"
          >
            {/* In a real app, embed Google Maps iframe here */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map-texture/800/800')] opacity-20 grayscale mix-blend-overlay group-hover:opacity-30 transition-opacity" />
            <div className="text-center z-10 p-6">
              <MapPin className="w-12 h-12 text-caramel mx-auto mb-4 opacity-80 group-hover:scale-110 transition-transform" />
              <p className="font-serif text-xl text-ivory tracking-wide">Mapa lokacije</p>
              <p className="text-sm text-ivory/50 mt-2 font-light">Radničkog Bataljona 33, Kraljevo</p>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
