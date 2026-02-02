
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const HERO_IMAGES = [
  'https://i.postimg.cc/hvXGwwXZ/8JA_DELTA_LONG_SLEEVE_WOODEN_MANEQUIN.jpg',
  'https://i.postimg.cc/YLjhh86R/mariner-monogram.jpg',
  'https://i.postimg.cc/kGGtJFcx/STRIPPED_CASHMERE_BROWN_CREAM_DESIGN.jpg',
  'https://i.postimg.cc/HnFLC25r/ARMY_GREEN_STRIPPED_DOUBLE_POCKET_JOHNKOSO.jpg',
  'https://i.postimg.cc/nr04G56c/white_shirt_pack.jpg',
  'https://i.postimg.cc/XvqMd2y3/vintage_couch.jpg'
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // 4 second interval for more constant change
    return () => clearInterval(timer);
  }, []);

  const handleConsultation = () => {
    window.open('https://wa.me/2348066179268?text=I am interested in a bespoke commission from the Marmuddy Showroom.', '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic Carousel Background */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              idx === currentIdx ? 'opacity-40 scale-100 blur-none' : 'opacity-0 scale-110 blur-sm'
            }`}
          >
            <img 
              src={img} 
              loading="lazy"
              alt={`Collection Feature ${idx + 1}`} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content Architecture */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/20 rounded-full animate-in fade-in slide-in-from-top-4 duration-1000">
            <Star size={12} className="text-[#C9A961]" fill="#C9A961" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#C9A961] font-bold">Nigeria's Premier Bespoke House</span>
          </div>
          
          <h1 className="fluid-h1 font-display font-bold text-[#F5F2EB] leading-[0.95] tracking-tighter uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Artisanal <br />
            <span className="gold-sheen italic font-serif lowercase tracking-normal">Legacy</span>
          </h1>
          
          <p className="text-base md:text-3xl text-gray-400 font-serif italic leading-relaxed max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            "Sculpting silhouettes that command respect. Where traditional royalty meets modern distinction."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center pt-8 md:pt-12 animate-in fade-in zoom-in duration-1000 delay-700">
            <button 
              onClick={handleConsultation}
              className="group relative px-10 md:px-16 py-5 md:py-7 gold-button-sheen text-[#0A0A0A] font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] overflow-hidden transition-all shadow-[0_0_40px_rgba(201,169,97,0.2)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Commission <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </span>
            </button>
            <button 
              onClick={() => onNavigate('collections')}
              className="px-10 md:px-16 py-5 md:py-7 bg-transparent border border-white/10 text-white font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] hover:border-[#C9A961] hover:text-[#C9A961] transition-all backdrop-blur-xl"
            >
              The Collections
            </button>
          </div>
        </div>

        {/* Floating Footnotes - Distinctly Separated */}
        <div className="absolute bottom-10 md:bottom-16 left-4 right-4 md:left-6 md:right-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 border-t border-white/5 pt-6 md:pt-10">
          <div className="flex gap-8 md:gap-20">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl md:text-3xl font-serif text-white tracking-tighter italic">Asaba HQ</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-[#C9A961] font-bold">Flagship Studio</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl md:text-3xl font-serif text-white tracking-tighter italic">Bespoke</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-[#C9A961] font-bold">Ritual Fit</span>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center gap-2 md:gap-4">
            {HERO_IMAGES.map((_, idx) => (
              <div 
                key={idx}
                className={`h-[1px] md:h-[2px] transition-all duration-1000 ${
                  idx === currentIdx ? 'w-8 md:w-16 bg-[#C9A961]' : 'w-2 md:w-4 bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
