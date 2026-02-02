
import React, { useState, useEffect } from 'react';
import { ChevronRight, Crown, ArrowLeft, ArrowDown, Sparkles } from 'lucide-react';
import { MOCK_FABRICS } from '../constants';

interface DiscoverFabricsProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const DiscoverFabrics: React.FC<DiscoverFabricsProps> = ({ onBack, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const index = Math.min(Math.floor((scrollPos + windowHeight / 2) / windowHeight), MOCK_FABRICS.length - 1);
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white selection:bg-[#C9A961] selection:text-[#0A0A0A]">
      {/* Editorial Overlay (Fixed) */}
      <div className="fixed top-24 left-0 w-full z-40 px-6 md:px-12 pointer-events-none flex justify-between items-start">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 text-[#C9A961] hover:text-white transition-all uppercase text-[10px] tracking-[0.5em] font-bold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Exit Editorial
        </button>
        <div className="hidden md:flex flex-col items-end gap-1 opacity-40">
           <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Editorial Issue v.04</p>
           <p className="text-[10px] uppercase tracking-[0.3em]">Marmuddy's Bespoke</p>
        </div>
      </div>

      {/* Progress Indicator (Vertical Scrollbar Replacement) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
        {MOCK_FABRICS.map((fabric, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className={`text-[8px] font-bold transition-all duration-500 ${activeIndex === i ? 'text-[#C9A961] opacity-100' : 'text-white opacity-0'}`}>
              0{i + 1}
            </span>
            <div 
              className={`w-px h-10 transition-all duration-700 ease-in-out ${activeIndex === i ? 'bg-[#C9A961] scale-y-125' : 'bg-white/10'}`}
            />
          </div>
        ))}
      </div>

      {/* Chapters */}
      {MOCK_FABRICS.map((fabric, index) => (
        <section 
          key={fabric.id} 
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Background Hero with Cinematic Filters */}
          <div className="absolute inset-0">
            <img 
              src={fabric.heroImage} 
              alt={fabric.title}
              className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${activeIndex === index ? 'scale-105' : 'scale-115'}`}
            />
            {/* Cinematic Film Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            {/* Low-Key Lighting & Depth Gradients */}
            <div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
          </div>

          {/* Center Content: Editorial Typography */}
          <div className={`relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center transition-all duration-1000 delay-300 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#C9A961]/40" />
              <Crown className="text-[#C9A961]" size={28} />
              <div className="w-12 h-px bg-[#C9A961]/40" />
            </div>
            
            <h2 className="text-5xl md:text-9xl font-display font-bold text-white tracking-[0.15em] mb-4">
              {fabric.title}
            </h2>
            
            <p className="text-xl md:text-3xl font-serif italic text-[#C9A961] opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              {fabric.tagline}
            </p>
            
            <p className="text-zinc-400 text-[10px] md:text-xs tracking-[0.5em] uppercase max-w-xl mx-auto leading-[2] mb-12">
              {fabric.description}
            </p>

            <div className="flex flex-col items-center gap-6">
               <button 
                onClick={() => onNavigate('contact')}
                className="group relative px-16 py-6 bg-transparent overflow-hidden border border-[#C9A961]/40 transition-all hover:border-[#C9A961]"
              >
                <div className="absolute inset-0 bg-[#C9A961] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-[#C9A961] group-hover:text-[#0A0A0A] font-bold uppercase tracking-[0.5em] text-[10px]">
                  Book Private Fitting
                </span>
              </button>
              
              <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] flex items-center gap-4">
                 <span>Investments from</span>
                 <span className="text-[#C9A961] font-bold">{fabric.priceRange}</span>
              </div>
            </div>
          </div>

          {/* Mood Card Preview (Razor Sharp Texture Focus) */}
          <div className={`absolute bottom-16 right-16 hidden lg:block w-72 transition-all duration-1000 delay-500 ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
              <img 
                src={fabric.moodImage} 
                alt="Mood Texture" 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 hover:grayscale-0 hover:brightness-100 scale-110 hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={12} className="text-[#C9A961]" />
                    <p className="text-[8px] uppercase tracking-[0.3em] text-[#C9A961] font-bold">Chapter 0{index + 1}</p>
                 </div>
                 <p className="text-[10px] uppercase tracking-[0.3em] text-white font-light">
                   {fabric.monogramDetail || 'Signature Detail'}
                 </p>
              </div>
            </div>
          </div>

          {/* Heritage Watermark Overlay */}
          <div className="absolute top-1/2 left-12 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
            <p className="text-[8px] uppercase tracking-[1em] text-white/5 font-bold">
              EST. 2005 • MARMUDDY'S HQ • LAGOS • PORT HARCOURT
            </p>
          </div>

          {/* Scroll Prompt */}
          {index < MOCK_FABRICS.length - 1 && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
               <ArrowDown className="text-white" size={20} />
            </div>
          )}
        </section>
      ))}

      {/* Final Chapter: The Legacy CTA */}
      <section className="h-screen w-full flex items-center justify-center bg-[#0A0A0A] px-6 relative overflow-hidden">
         {/* Subtle Gold Rim Lighting on the edges of the section */}
         <div className="absolute inset-0 border-[20px] border-[#C9A961]/5" />
         
         <div className="max-w-5xl text-center space-y-16 relative z-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-8xl font-display font-bold text-white leading-tight tracking-wider">
                Your <span className="text-[#C9A961] italic font-serif">Legacy</span> <br /> Handcrafted
              </h2>
              <div className="w-32 h-px bg-[#C9A961] mx-auto opacity-40" />
            </div>
            
            <p className="text-zinc-500 font-serif italic text-xl md:text-3xl max-w-2xl mx-auto">
              "A man is defined by the quality of his silence, and the character of his cloth."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
               <button 
                onClick={() => onNavigate('contact')}
                className="px-16 py-7 bg-[#C9A961] text-[#0A0A0A] font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all shadow-[0_20px_50px_rgba(201,169,97,0.2)]"
              >
                Start Private Commission
              </button>
               <button 
                onClick={() => onNavigate('home')}
                className="text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:text-[#C9A961] transition-all relative group"
              >
                Return to Showroom
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#C9A961] transition-all group-hover:w-full" />
              </button>
            </div>
         </div>
         
         {/* Bottom Editorial Tag */}
         <div className="absolute bottom-12 left-0 w-full flex justify-center opacity-10">
            <Crown size={120} />
         </div>
      </section>
    </div>
  );
};

export default DiscoverFabrics;
