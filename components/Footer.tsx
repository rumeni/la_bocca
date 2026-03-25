import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory py-12 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-caramel/50 flex items-center justify-center overflow-hidden relative">
            <Image 
              src="/logo.png" 
              alt="La Bocca Logo" 
              fill 
              className="object-cover scale-110 -translate-y-[2px]"
              sizes="40px"
            />
          </div>
          <span className="font-serif text-xl tracking-wide">
            La Bocca <span className="italic text-caramel font-light">bar</span>
          </span>
        </div>

        <div className="text-center md:text-left text-sm text-ivory/50 font-light">
          <p>Good coffee. Good people. Good mood.</p>
        </div>

        <div className="text-sm text-ivory/40 font-light">
          &copy; {new Date().getFullYear()} La Bocca bar. Sva prava zadržana.
        </div>

      </div>
    </footer>
  );
}
