'use client';

import { motion } from 'motion/react';
import { menuData } from '@/data/menu';

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-taupe relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-espresso mb-4"
          >
            Naš <span className="italic text-caramel">Meni</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-px bg-caramel mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {menuData.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="font-serif text-2xl text-espresso mb-8 uppercase tracking-widest border-b border-espresso/10 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <li key={item.name} className="group">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-lg text-espresso group-hover:text-caramel transition-colors">
                        {item.name}
                      </span>
                      <div className="flex-grow mx-4 border-b border-dotted border-espresso/30 relative top-[-6px]" />
                      <span className="font-sans text-sm font-medium text-espresso">
                        {item.price} <span className="text-xs text-espresso/60">RSD</span>
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-espresso/60 mt-1 font-light italic">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
