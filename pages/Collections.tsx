
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Crown, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';
import { ALL_PRODUCTS, COLORS } from '../constants';
import { Product } from '../types';

interface CarouselSectionProps {
  title: string;
  tagline: string;
  products: any[];
  onProductClick: (id: string) => void;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ title, tagline, products, onProductClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scroll('left');
      if (e.key === 'ArrowRight') scroll('right');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleConsultation = () => {
    window.open('https://wa.me/2348066179268?text=Hello Marmuddy HQ, I am interested in a commission from the collections.', '_blank');
  };

  if (products.length === 0) return null;

  return (
    <section className="py-24 border-b border-[#C9A561]/5 relative group overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col items-center text-center">
        <h2 className="fluid-h2 font-display font-bold text-[#C9A561] tracking-tighter uppercase mb-4">
          {title}
        </h2>
        <p className="text-gray-400 font-serif italic text-xl md:text-2xl max-w-2xl">
          {tagline}
        </p>
        <div className="w-24 h-px bg-[#C9A561] mt-12 opacity-20" />
      </div>

      <div className="relative px-6 md:px-20">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-6 bg-[#0C0A08]/80 border border-[#C9A561]/10 text-[#C9A561] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 hidden md:block backdrop-blur-md"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-6 bg-[#0C0A08]/80 border border-[#C9A561]/10 text-[#C9A561] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 hidden md:block backdrop-blur-md"
        >
          <ChevronRight size={28} />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-12 md:gap-16 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => onProductClick(product.id)}
              className="min-w-[95%] sm:min-w-[48%] lg:min-w-[32%] snap-start group/card cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#11100D] mb-10 shadow-2xl border border-[#C9A561]/10 group-hover/card:ring-2 group-hover/card:ring-[#C9A561]/50 group-hover/card:shadow-[0_0_30px_rgba(201,165,97,0.3)] transition-all duration-500">
                <img 
                  src={product.heroImage} 
                  loading="lazy"
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-[2000ms] grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 md:p-12">
                    <span className="text-[#C9A561] text-[8px] uppercase tracking-[0.7em] font-bold mb-4">Marmuddy Elite Edition</span>
                    <h4 className="text-[#F5F2EB] text-3xl md:text-4xl font-serif italic mb-8 leading-tight uppercase tracking-tight">{product.name}</h4>
                    <button className="px-10 py-4 bg-[#C9A561] text-[#0C0A08] text-[9px] uppercase tracking-[0.5em] font-bold shadow-2xl gold-button-sheen">
                      Inquire Commission
                    </button>
                </div>
              </div>

              <div className="flex justify-between items-center px-4">
                <div className="space-y-1">
                  <p className="text-[8px] uppercase tracking-[0.6em] text-gray-500 font-bold">{product.fabricType.split('.')[0]}</p>
                  <h3 className="text-[#F5F2EB] text-lg md:text-xl font-display font-bold tracking-widest uppercase truncate max-w-[200px] md:max-w-[240px]">{product.name}</h3>
                </div>
                <div className="flex flex-col items-end shrink-0 ml-4">
                  <span className="text-[#C9A561] text-[7px] uppercase tracking-[0.3em] font-bold mb-1 opacity-50">Valuation</span>
                  <p className="text-[#C9A561] font-bold text-lg md:text-2xl tracking-tighter italic bg-[#C9A561]/5 px-3 py-1 rounded-sm border border-[#C9A561]/10 shadow-[0_0_20px_rgba(201,165,97,0.1)] transition-all group-hover/card:bg-[#C9A561]/20 group-hover/card:shadow-[0_0_30px_rgba(201,165,97,0.3)] whitespace-nowrap">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* High-End Consultation Card */}
          <div className="min-w-[95%] sm:min-w-[48%] lg:min-w-[32%] snap-start">
            <div className="h-full aspect-[3/4] bg-[#11100D] flex flex-col items-center justify-center p-12 md:p-20 text-center space-y-10 border border-[#C9A561]/10 shadow-2xl">
              <Crown className="text-[#C9A561]" size={56} strokeWidth={1} />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F2EB] uppercase tracking-[0.3em] leading-none">Bespoke <br /> Ritual</h3>
              <div className="w-16 h-px bg-[#C9A561] opacity-20" />
              <p className="text-gray-400 text-[12px] font-serif italic leading-relaxed">Sculpting unique legacies for the modern statesman at our Asaba flagship.</p>
              <button 
                onClick={handleConsultation}
                className="text-[#C9A561] font-bold uppercase text-[9px] tracking-[0.7em] pt-8 border-b border-[#C9A561]/20 pb-2 hover:border-[#C9A561] transition-all"
              >
                Inaugurate Commission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CollectionsProps {
  onNavigate: (page: string) => void;
  onProductClick: (id: string) => void;
}

const Collections: React.FC<CollectionsProps> = ({ onNavigate, onProductClick }) => {
  const [dynamicProducts, setDynamicProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const mapped = data.map((p: any) => ({
          ...p,
          name: p.title,
          heroImage: p.imageUrl,
          description: p.shortDescription,
          availableColors: [],
          availableSizes: ["XL", "XXL"],
          fabricType: p.details[0] || "Premium Fabric"
        }));
        setDynamicProducts(mapped);
      })
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  const categories = [
    { 
      title: "The Senator Suite", 
      tagline: "Uncompromising authority in Nigerian tailoring.", 
      filter: (p: Product) => p.name.toLowerCase().includes('senator') || p.fabricType.toLowerCase().includes('cotton')
    },
    { 
      title: "House Cashmere", 
      tagline: "Liquid silk and wool drapes for the distinguished.", 
      filter: (p: Product) => p.fabricType.toLowerCase().includes('cashmere')
    },
    { 
      title: "JohnKoso Signature", 
      tagline: "The definitive rebellion in bespoke menswear.", 
      filter: (p: Product) => p.fabricType.toLowerCase().includes('johnkoso')
    },
    { 
      title: "Vintage Archives", 
      tagline: "Heritage textures reimagined for the contemporary grit.", 
      filter: (p: Product) => p.name.toLowerCase().includes('vintage')
    },
    { 
      title: "Smart Ensembles", 
      tagline: "Sophisticated leisure for the refined weekend.", 
      filter: (p: Product) => p.name.toLowerCase().includes('safari') || p.name.toLowerCase().includes('short')
    }
  ];

  return (
    <div className="bg-[#0C0A08] min-h-screen">
      {/* Editorial Chapter Header */}
      <section className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden flex items-center justify-center text-center px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08] via-[#0C0A08]/40 to-[#0C0A08] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1594932224828-b4b059b6f6f2?auto=format&fit=crop&q=80&w=1920" 
          alt="Marmuddy Editorial" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.25]"
        />
        
        <div className="relative z-20 space-y-10 animate-in fade-in duration-[1500ms]">
          <div className="flex justify-center mb-8">
            <Crown size={64} className="text-[#C9A561]" strokeWidth={1} />
          </div>
          <h1 className="fluid-h1 font-display font-bold text-[#F5F2EB] tracking-[0.1em] uppercase leading-none">
            Editorial <span className="gold-sheen italic font-serif lowercase tracking-normal">Issues</span>
          </h1>
          <p className="text-xl md:text-3xl font-serif italic text-gray-500 tracking-wider max-w-4xl mx-auto leading-relaxed">
            "A comprehensive archive of Nigerian bespoke excellence. Handcrafted exclusively for the distinguished elite."
          </p>
        </div>
      </section>

      {/* Sequential Carousel Architecture */}
      <div className="space-y-32 md:space-y-48 pb-56">
        {dynamicProducts.length > 0 && (
          <CarouselSection 
            title="Dynamic Assemblage" 
            tagline="Our latest curated masterpieces, fetched from the royal archives." 
            products={dynamicProducts} 
            onProductClick={onProductClick} 
          />
        )}
        {categories.map((cat, i) => (
          <CarouselSection 
            key={i}
            title={cat.title} 
            tagline={cat.tagline} 
            products={ALL_PRODUCTS.filter(cat.filter)} 
            onProductClick={onProductClick} 
          />
        ))}
      </div>

      {/* Global Showroom Call to Action */}
      <section className="bg-[#11100D] py-40 md:py-56 text-center border-t border-[#C9A561]/10">
         <div className="max-w-6xl mx-auto px-10 space-y-16">
            <h2 className="fluid-h1 font-display font-bold text-[#F5F2EB] leading-tight tracking-tighter uppercase">
              Claim Your <br />
              <span className="gold-sheen italic font-serif lowercase tracking-normal">Aura</span>
            </h2>
            <p className="text-gray-500 text-xl md:text-3xl font-serif italic max-w-3xl mx-auto">
              Experience true bespoke mastery at our Asaba flagship showroom. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 md:gap-16 pt-8">
               <button 
                 onClick={() => window.open('https://wa.me/2348066179268', '_blank')}
                 className="px-16 md:px-24 py-6 md:py-8 bg-[#C9A561] text-[#0C0A08] font-bold uppercase tracking-[0.6em] text-[10px] md:text-[11px] hover:bg-[#F5F2EB] transition-all shadow-2xl gold-button-sheen"
               >
                 Inaugurate Commission
               </button>
               <div className="text-[#F5F2EB] flex flex-col items-center sm:items-start space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.7em] text-gray-600 font-bold">Showroom Concierge</span>
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-[#C9A561]">08066179268</span>
               </div>
            </div>
            <p className="text-[10px] uppercase tracking-[1em] text-gray-700 pt-24 font-bold italic">Flat 2 Obakpo St • Midwifery Rd • Asaba</p>
         </div>
      </section>
    </div>
  );
};

export default Collections;
