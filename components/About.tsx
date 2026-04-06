'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-ivory relative scroll-mt-[72px] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mb-6 md:mb-8">
              Naša <span className="italic text-caramel">priča</span>
            </h2>

            <div className="space-y-5 text-espresso/80 font-sans text-base sm:text-lg leading-relaxed">
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-espresso leading-snug border-l-2 border-caramel pl-5 py-2">
                &ldquo;La Bocca bar je nastao iz jedne želje, da postoji mesto gde se dolazi bez povoda, a ostaje duže nego što si planirao. Mesto gde se razgovara, nazdravlja i uživa bez žurbe. Dobrodošli u La Bocca bar.&rdquo;
              </p>

              <p>
                Verujemo da su najbolji trenuci oni koji se dešavaju spontano, uz savršeno pripremljenu šoljicu kafe ili pažljivo osmišljen koktel. Naš prostor je dizajniran da bude vaša druga dnevna soba — topla, prijatna i uvek otvorena za dobre ljude.
              </p>

              <p>
                Bilo da započinjete dan uz miris sveže pržene kafe, ili ga završavate uz zvuke lagane muzike i čašu vrhunskog pića, La Bocca je tu da uspori vreme.
              </p>
            </div>

            <div className="mt-8 md:mt-12">
              <p className="font-serif text-2xl md:text-3xl italic text-caramel opacity-80">La Bocca</p>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px]"
          >
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-t-full overflow-hidden shadow-2xl">
              <Image
                src="/7.jpg"
                alt="Pouring coffee"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 80vw, 40vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 border-4 sm:border-8 border-ivory shadow-xl overflow-hidden">
              <Image
                src="/13.jpg"
                alt="Cocktail preparation"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 60vw, 30vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
