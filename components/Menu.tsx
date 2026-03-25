'use client';

import { motion } from 'motion/react';

type MenuItem = {
  name: string;
  description?: string;
  price: number;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    title: "Kafe",
    items: [
      { name: "Espresso", price: 190 },
      { name: "Espresso sa mlekom", price: 210 },
      { name: "Cappuccino", price: 240 },
      { name: "Caffe Latte", price: 260 },
      { name: "Flat White", price: 290 },
      { name: "La Bocca Signature Kafa", description: "Espresso, krem od lešnika, mleko, posip od kakaa", price: 340 },
    ]
  },
  {
    title: "Topli napici",
    items: [
      { name: "Topla čokolada crna", price: 280 },
      { name: "Topla čokolada bela", price: 280 },
      { name: "Premium Čajevi", description: "Zeleni, crni, voćni, nana, kamilica", price: 220 },
      { name: "Kuvano vino", description: "Crveno vino, cimet, karanfilić, pomorandža", price: 350 },
    ]
  },
  {
    title: "Hladne kafe",
    items: [
      { name: "Freddo Espresso", price: 250 },
      { name: "Freddo Cappuccino", price: 280 },
      { name: "Ice Latte", price: 290 },
      { name: "Affogato", description: "Espresso preko kugle sladoleda od vanile", price: 350 },
    ]
  },
  {
    title: "Kokteli",
    items: [
      { name: "Aperol Spritz", description: "Aperol, Prosecco, soda, pomorandža", price: 650 },
      { name: "Negroni", description: "Gin, Campari, slatki vermut", price: 750 },
      { name: "Espresso Martini", description: "Vodka, kahlua, espresso, sirup", price: 720 },
      { name: "La Bocca Special", description: "Gin, pire od marakuje, limeta, prosecco", price: 850 },
      { name: "Old Fashioned", description: "Burbon, angostura bitter, šećer, kora pomorandže", price: 780 },
    ]
  },
  {
    title: "Žestina",
    items: [
      { name: "Rakija Šljiva Premium", price: 350 },
      { name: "Rakija Dunja Premium", price: 380 },
      { name: "Jack Daniel's", price: 450 },
      { name: "Hendrick's Gin", price: 550 },
      { name: "Diplomatico Rum", price: 650 },
    ]
  },
  {
    title: "Bezalkoholna pića",
    items: [
      { name: "Sveže ceđena pomorandža", price: 320 },
      { name: "Limunada", price: 250 },
      { name: "Coca Cola / Zero", price: 220 },
      { name: "Rosa negazirana 0.33l", price: 180 },
      { name: "Knjaz Miloš gazirana 0.33l", price: 180 },
    ]
  }
];

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
                  <li key={itemIdx} className="group">
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
