'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryImages = [
  { src: "/3.jpg", alt: "La Bocca bar enterijer — intimna atmosfera kafića", className: "col-span-2 row-span-2", imgStyle: { objectPosition: 'center 25%' } },
  { src: "/2.jpg", alt: "Cappuccino sa latte art ukrasom u La Bocca baru", className: "" },
  { src: "/10.jpg", alt: "Selekcija šarenih koktela pripremljenih u La Bocca baru", className: "" },
  { src: "/8.jpg", alt: "Premium viski serviran u La Bocca baru", className: "" },
  { src: "/4.jpg", alt: "Osvežavajući koktel u La Bocca baru", className: "" },
  { src: "/5.jpg", alt: "Kafa sa kremom — La Bocca signature napitak", className: "" },
  { src: "/6.jpg", alt: "Crveni koktel serviran u La Bocca baru", className: "" },
  { src: "/11.jpg", alt: "Espresso u La Bocca baru — pažljivo pripremljen", className: "col-span-2 row-span-2" },
  { src: "/12.jpg", alt: "Letnji koktel u La Bocca baru", className: "" },
  { src: "/14.jpg", alt: "Kafa u La Bocca baru", className: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-ivory scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mb-3 md:mb-4"
          >
            Atmosfera
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-espresso/70 font-light tracking-wide text-sm sm:text-base"
          >
            Zavirite u naš svet
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              className={`relative overflow-hidden group ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={img.imgStyle}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
              />
              <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
