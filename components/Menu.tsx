'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { menuData } from '@/data/menu';

const SCROLL_AMOUNT = 160;

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const tabsRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (index === currentPage) return;
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
    const tabs = tabsRef.current;
    if (tabs) {
      const activeTab = tabs.children[index] as HTMLElement;
      activeTab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const goPrev = () => { if (currentPage > 0) goTo(currentPage - 1); };
  const goNext = () => { if (currentPage < menuData.length - 1) goTo(currentPage + 1); };

  const category = menuData[currentPage];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -48 }),
  };

  return (
    <section
      id="menu"
      className="bg-taupe"
      style={{ height: 'calc(100dvh - 72px)', scrollMarginTop: '72px' }}
    >
      <div className="h-full flex flex-col max-w-3xl mx-auto px-6 md:px-12 pt-6 pb-6">

        {/* Header */}
        <div className="text-center mb-6 shrink-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-espresso mb-3"
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

        {/* Category tabs */}
        <div className="flex items-center gap-2 mb-4 shrink-0">
          <button
            onClick={() => tabsRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })}
            className="shrink-0 p-1.5 border border-espresso/15 text-espresso/50 hover:text-caramel hover:border-caramel/40 transition-colors duration-200"
            aria-label="Skroluj tabove levo"
          >
            <ChevronLeft size={16} />
          </button>

          <div
            ref={tabsRef}
            className="flex overflow-x-auto gap-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {menuData.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => goTo(idx)}
                className={`shrink-0 px-4 py-2 text-xs tracking-widest uppercase font-sans border transition-all duration-200 ${
                  idx === currentPage
                    ? 'bg-espresso text-ivory border-espresso'
                    : 'bg-ivory/60 text-espresso/60 border-espresso/15 hover:border-espresso/40 hover:text-espresso'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => tabsRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })}
            className="shrink-0 p-1.5 border border-espresso/15 text-espresso/50 hover:text-caramel hover:border-caramel/40 transition-colors duration-200"
            aria-label="Skroluj tabove desno"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Book */}
        <div className="relative bg-ivory shadow-[0_8px_40px_rgba(44,30,22,0.12)] border border-espresso/5">

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-caramel/30" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-caramel/30" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-caramel/30" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-caramel/30" />

          {/* Scrollable content */}
          <div className="flex-1 min-h-0 overflow-y-auto px-8 md:px-12 py-7 [scrollbar-width:thin]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.15, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-6 h-px bg-caramel" />
                  <h3 className="font-serif text-2xl md:text-3xl text-espresso uppercase tracking-widest">
                    {category.title}
                  </h3>
                  <div className="flex-grow h-px bg-caramel/30" />
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={`${item.name}-${itemIdx}`} className="group">
                      <div className="flex items-baseline justify-between">
                        <span className="font-serif text-lg text-espresso group-hover:text-caramel transition-colors duration-200">
                          {item.name}
                        </span>
                        <div className="flex-grow mx-4 border-b border-dotted border-espresso/25 relative top-[-5px]" />
                        <span className="font-sans text-sm font-medium text-espresso shrink-0">
                          {item.price} <span className="text-xs text-espresso/50">RSD</span>
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-espresso/55 mt-0.5 font-light italic">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next — always pinned to bottom */}
          <div className="shrink-0 flex items-center justify-between px-8 md:px-12 py-4 border-t border-espresso/8">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-espresso/50 hover:text-caramel transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Prethodna
            </button>

            <span className="font-serif text-sm text-espresso/40 italic">
              {currentPage + 1} / {menuData.length}
            </span>

            <button
              onClick={goNext}
              disabled={currentPage === menuData.length - 1}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-espresso/50 hover:text-caramel transition-colors duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              Sledeća
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
