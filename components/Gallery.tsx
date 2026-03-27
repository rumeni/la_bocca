'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryImages = [
  { src: "/3.png", alt: "Quote for strong women", className: "md:col-span-2 md:row-span-2" },
  { src: "/2.png", alt: "Cappuccino", className: "md:col-span-1 md:row-span-1" },
  { src: "/10.png", alt: "Colorful cocktails", className: "md:col-span-1 md:row-span-1" },
  { src: "/8.png", alt: "Jack Daniels", className: "md:col-span-1 md:row-span-1" },
  { src: "/4.png", alt: "Red drink with quote", className: "md:col-span-1 md:row-span-1" },
  { src: "/5.png", alt: "Coffee with cream", className: "md:col-span-1 md:row-span-1" },
  { src: "/6.png", alt: "Red cocktail", className: "md:col-span-1 md:row-span-1" },
  { src: "/11.png", alt: "Coffee in black cup", className: "md:col-span-2 md:row-span-2" },
  { src: "/12.png", alt: "Light red drink", className: "md:col-span-1 md:row-span-1" },
  { src: "/14.png", alt: "Black cup", className: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-espresso mb-4"
          >
            Atmosfera
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-espresso/70 font-light tracking-wide"
          >
            Zavirite u naš svet
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden group ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
