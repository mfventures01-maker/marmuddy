
import React, { useEffect, useState } from 'react';
import { ALL_PRODUCTS } from '../constants';
import { ChevronLeft, ArrowRight, Star, Clock, Shield, Globe, MessageCircle, Crown, Scissors, ChevronDown } from 'lucide-react';

interface ProductDetailProps {
  product: typeof ALL_PRODUCTS[0];
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onNavigate }) => {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('specs');

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedColor(product.availableColors[0]?.name || '');
  }, [product]);

  const handleInquire = () => {
    const message = `Hello Marmuddy HQ, I am interested in the ${product.name} (Ref: ${product.id}). Color: ${selectedColor}, Size: ${selectedSize}. Please advise on the commission process.`;
    window.open(`https://wa.me/2348066179268?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#0C0A08] pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Elegant Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-gray-500 hover:text-[#C9A561] transition-all mb-12 uppercase text-[10px] tracking-[0.5em] font-bold"
        >
          <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-2" />
          Back to Collections
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Immersive Image Section */}
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="relative group overflow-hidden bg-[#11100D] border border-[#C9A561]/10 shadow-2xl">
              <img 
                src={product.heroImage} 
                alt={product.name} 
                className="w-full h-full aspect-[3/4] object-cover transition-all duration-[2000ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-transparent to-transparent opacity-40" />
              <div className="absolute top-8 left-8">
                <div className="p-3 bg-[#0C0A08]/80 backdrop-blur-md border border-[#C9A561]/20 rounded-full">
                  <Crown size={20} className="text-[#C9A561]" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="relative group overflow-hidden bg-[#11100D] border border-[#C9A561]/10">
                <img 
                  src={product.heroImage} 
                  alt="Detail 1" 
                  className="w-full h-full aspect-square object-cover grayscale opacity-30 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              <div className="relative group overflow-hidden bg-[#11100D] border border-[#C9A561]/10">
                <img 
                  src={product.heroImage} 
                  alt="Detail 2" 
                  className="w-full h-full aspect-square object-cover grayscale opacity-30 rotate-180 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* Product Narratives */}
          <div className="lg:col-span-5 space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#C9A561]/30" />
                <span className="text-[#C9A561] text-[10px] uppercase tracking-[0.8em] font-bold">The Royal Assemblage</span>
              </div>
              <h1 className="fluid-h1 font-display font-bold text-[#F5F2EB] uppercase tracking-tighter leading-[0.9]">
                {product.name.split(' ').slice(0, -1).join(' ')} <br />
                <span className="gold-sheen italic font-serif lowercase tracking-normal">{product.name.split(' ').pop()}</span>
              </h1>
              <p className="text-gray-500 font-serif italic text-2xl leading-relaxed">
                "{product.poeticDescription || product.description}"
              </p>
            </div>

            <div className="valuation-box animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
              <span className="text-[#C9A561] text-[10px] uppercase tracking-[0.5em] font-bold block mb-2">Commission Valuation</span>
              <p className="fluid-price font-display font-bold text-[#F5F2EB] tracking-tighter">
                ₦{product.price.toLocaleString()}
              </p>
            </div>

            {/* Options Architecture */}
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-[9px] uppercase tracking-[0.6em] text-gray-600 font-bold">Palette Selection</p>
                <div className="flex flex-wrap gap-5">
                  {product.availableColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-700 ${
                        selectedColor === color.name ? 'border-[#C9A561] scale-110 shadow-[0_0_20px_rgba(201,165,97,0.3)]' : 'border-white/10 hover:border-white/30'
                      }`}
                      style={{ backgroundColor: color.hex === 'transparent' ? '#222' : color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between border-b border-[#C9A561]/10 pb-4">
                  <p className="text-[9px] uppercase tracking-[0.6em] text-gray-600 font-bold">The Fit</p>
                  <button className="text-[9px] text-[#C9A561] uppercase tracking-[0.4em] font-bold">Measurement Ritual</button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-4 text-[9px] tracking-[0.5em] font-bold transition-all border duration-500 ${
                        selectedSize === size 
                        ? 'bg-[#C9A561] border-[#C9A561] text-[#0C0A08]' 
                        : 'bg-transparent border-[#C9A561]/10 text-gray-500 hover:border-[#C9A561]/30 hover:text-[#F5F2EB]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-6">
              <button 
                onClick={handleInquire}
                className="w-full py-8 bg-[#C9A561] text-[#0C0A08] font-bold uppercase tracking-[0.6em] text-[11px] hover:bg-[#F5F2EB] transition-all shadow-[0_0_50px_rgba(201,165,97,0.2)] gold-button-sheen"
              >
                Inquire via Headquarters
              </button>
              
              {/* Artisanal Specifications */}
              <div className="bg-[#11100D] border border-[#C9A561]/10 rounded-sm overflow-hidden">
                <button 
                  onClick={() => toggleSection('specs')}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-[#0C0A08] transition-all group"
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-400 group-hover:text-[#C9A561] transition-colors">Artisanal Specifications</span>
                  <ChevronDown className={`transition-transform duration-700 ${openSection === 'specs' ? 'rotate-180 text-[#C9A561]' : 'text-gray-700'}`} size={16} />
                </button>
                {openSection === 'specs' && (
                  <div className="px-6 pb-8 pt-2 space-y-6 animate-in slide-in-from-top-4 duration-500">
                    <div className="grid grid-cols-2 gap-y-4 text-[10px] uppercase tracking-widest text-gray-600">
                      <div className="font-bold">Identity Code:</div>
                      <div className="text-[#F5F2EB] font-bold">{product.sku}</div>
                      <div className="font-bold">Primary Fabric:</div>
                      <div className="text-[#F5F2EB] normal-case font-serif italic text-sm">{product.fabricType}</div>
                      <div className="font-bold">Lead Status:</div>
                      <div className="text-[#C9A561] font-bold">Commission Only</div>
                      <div className="font-bold">Studio Origin:</div>
                      <div className="text-[#F5F2EB] font-bold">Asaba, Nigeria</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center gap-8 text-gray-700 pt-6">
                <div className="flex flex-col items-center gap-2">
                  <Shield size={20} strokeWidth={1.5} />
                  <span className="text-[8px] uppercase tracking-widest font-bold">Auth Guaranteed</span>
                </div>
                <div className="h-8 w-px bg-[#C9A561]/10" />
                <div className="flex flex-col items-center gap-2">
                  <Clock size={20} strokeWidth={1.5} />
                  <span className="text-[8px] uppercase tracking-widest font-bold">14-Day Tailoring</span>
                </div>
                <div className="h-8 w-px bg-[#C9A561]/10" />
                <div className="flex flex-col items-center gap-2">
                  <MessageCircle size={20} strokeWidth={1.5} />
                  <span className="text-[8px] uppercase tracking-widest font-bold">Direct Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage Section */}
        <section className="mt-40 pt-40 border-t border-[#C9A561]/10">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] uppercase tracking-tighter leading-none">
                The <span className="gold-sheen italic font-serif lowercase tracking-normal">Bespoke</span> <br /> Process
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Consultation", text: "A personalized dialogue to understand your aesthetic frequency." },
                  { title: "Selection", text: "Curating the finest global fabrics from our exclusive JohnKoso and Cashmere archives." },
                  { title: "Sculpting", text: "Precision tailoring that honors the unique silhouette of leadership." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-[#C9A561]/20 font-display text-4xl group-hover:text-[#C9A561] transition-colors duration-700">0{i+1}</span>
                    <div className="space-y-2">
                      <h4 className="text-[#F5F2EB] font-bold uppercase text-[10px] tracking-[0.4em]">{step.title}</h4>
                      <p className="text-gray-500 font-serif italic text-lg leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] overflow-hidden border border-[#C9A561]/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=1000" 
                alt="Process" 
                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 hover:grayscale-0 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0C0A08]/40" />
            </div>
          </div>
        </section>

        {/* Recommended Edits */}
        <section className="py-48 border-t border-[#C9A561]/10 mt-40">
          <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] mb-24 tracking-tighter uppercase">Complementary <br /><span className="gold-sheen italic font-serif lowercase tracking-normal">Mastery</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {ALL_PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map(p => (
              <div key={p.id} className="group cursor-pointer space-y-6" onClick={() => onNavigate('product-detail')}>
                <div className="aspect-[3/4] overflow-hidden bg-[#11100D] border border-[#C9A561]/10 shadow-2xl">
                  <img 
                    src={p.heroImage} 
                    loading="lazy"
                    alt={p.name} 
                    className="w-full h-full object-cover grayscale opacity-40 transition-all duration-1000 group-hover:scale-[1.05] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#F5F2EB] mb-1">{p.name}</h4>
                  <p className="text-[9px] text-[#C9A561] uppercase tracking-widest font-bold">₦{p.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
