
import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { MOCK_COLLECTIONS, MOCK_GALLERY } from '../constants';
import { Crown, Scissors, MapPin, Phone, MessageCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
  onProductClick: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onProductClick }) => {
  const handleContact = () => {
    window.open('https://wa.me/2348066179268', '_blank');
  };

  return (
    <main className="bg-[#0C0A08]">
      <Hero onNavigate={onNavigate} />

      {/* High-Fashion Minimalistic Philosophy */}
      <section className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative overflow-hidden bg-[#11100D] border border-[#C9A561]/10 shadow-2xl">
            <img
              src="https://i.postimg.cc/XvqMd2y3/vintage_couch.jpg"
              alt="Marmuddy Heritage"
              className="w-full h-auto aspect-[4/5] object-cover opacity-80"
            />
            {/* Minimalistic Frame Detail */}
            <div className="absolute inset-0 border-[20px] md:border-[30px] border-[#0C0A08]/40 pointer-events-none" />
          </div>
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[#C9A561] text-[9px] uppercase tracking-[0.6em] font-bold">Our Philosophy</span>
              <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] tracking-tighter uppercase leading-none">
                The <span className="gold-sheen italic font-serif lowercase tracking-normal">Aura</span> <br />
                of Choice
              </h2>
            </div>

            <p className="text-gray-400 text-lg md:text-xl font-serif italic leading-relaxed max-w-xl">
              "Bespoke is not just a service; it is a ritual of distinction. At Marmuddy's, we sculpt garments that resonate with the frequency of leaders."
            </p>

            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-6">
              <div className="space-y-3">
                <Crown className="text-[#C9A561]" size={20} />
                <h4 className="font-bold text-[#F5F2EB] uppercase text-[8px] tracking-[0.5em]">Royal Thread</h4>
                <p className="text-gray-600 text-[10px] leading-relaxed uppercase tracking-[0.1em]">Nigerian heritage refined for global excellence.</p>
              </div>
              <div className="space-y-3">
                <Scissors className="text-[#C9A561]" size={20} />
                <h4 className="font-bold text-[#F5F2EB] uppercase text-[8px] tracking-[0.5em]">Master Cut</h4>
                <p className="text-gray-600 text-[10px] leading-relaxed uppercase tracking-[0.1em]">Precision engineering meet artistic soul.</p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('our-story')}
              className="text-[#C9A561] font-bold uppercase text-[9px] tracking-[0.6em] border-b border-[#C9A561]/20 pb-2 hover:border-[#C9A561] transition-all inline-block mt-6"
            >
              The House Legacy
            </button>
          </div>
        </div>
      </section>

      {/* Masterpiece Showcase */}
      <section className="py-32 bg-[#11100D] border-y border-[#C9A561]/5">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] tracking-widest uppercase">The Masterpiece <br /><span className="gold-sheen italic font-serif lowercase tracking-normal">Release</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto font-serif italic text-lg md:text-xl">"A limited assemblage of artisanal excellence, curated for the modern monarch."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {MOCK_COLLECTIONS.map((col) => (
              <div
                key={col.id}
                className="group relative h-[600px] md:h-[700px] overflow-hidden cursor-pointer bg-[#11100D] shadow-2xl transition-all duration-700"
                onClick={() => onNavigate('collections')}
              >
                <img
                  src={col.featuredImage}
                  loading="lazy"
                  alt={col.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <h3 className="text-3xl md:text-4xl font-serif text-[#F5F2EB] mb-2 italic tracking-tight uppercase">{col.name}</h3>
                  <p className="text-[#C9A561] text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Explore Commission</p>
                  <div className="h-px w-0 group-hover:w-full bg-[#C9A561] transition-all duration-1000 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Showroom Grid */}
      <section className="py-32 md:py-48 px-6 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 px-4 md:px-12">
          <div className="space-y-4">
            <span className="text-[#C9A561] text-[8px] uppercase tracking-[0.7em] font-bold">The Showroom</span>
            <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] tracking-tighter uppercase leading-none">Artisanal <br /> Detail</h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="text-gray-600 hover:text-[#C9A561] transition-all uppercase text-[9px] tracking-[0.5em] font-bold pb-2 border-b border-gray-900"
          >
            Enter Gallery
          </button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-8 px-4 md:px-12">
          {MOCK_GALLERY.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden break-inside-avoid cursor-pointer bg-[#11100D] border border-[#C9A561]/5 shadow-xl"
              onClick={() => onProductClick(item.id)}
            >
              <img
                src={item.imageUrl}
                loading="lazy"
                alt={item.title}
                className="w-full h-auto grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-[#0C0A08]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                <span className="text-[#C9A561] text-[7px] uppercase tracking-[0.6em] mb-2 font-bold">{item.category}</span>
                <h4 className="text-2xl font-serif text-[#F5F2EB] mb-2 italic uppercase">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Direct Call to Action */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-[#C9A561] gold-button-sheen">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="fluid-h1 font-display font-bold text-[#0C0A08] tracking-tighter uppercase leading-none">Handcrafted <br /> Recognition</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 pt-8">
            <button
              onClick={handleContact}
              className="px-16 py-7 bg-[#0C0A08] text-[#F5F2EB] font-bold uppercase tracking-[0.5em] text-[10px] hover:bg-black transition-all shadow-2xl"
            >
              Inaugurate Commission
            </button>
            <div className="flex flex-col items-center sm:items-start text-[#0C0A08]">
              <span className="text-[9px] uppercase tracking-[0.5em] font-bold mb-1 opacity-70">Direct Line</span>
              <span className="text-4xl md:text-5xl font-bold tracking-tighter">08066179268</span>
            </div>
          </div>
        </div>
        {/* Minimalistic Crown Background Element */}
        <div className="absolute bottom-[-10%] right-[-5%] opacity-10 text-[#0C0A08]">
          <Crown size={300} strokeWidth={1} />
        </div>
      </section>

      {/* Minimalistic Footer */}
      <footer className="bg-[#0C0A08] py-32 px-6 border-t border-[#C9A561]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-[#C9A561]" />
              <h1 className="text-2xl font-display font-bold text-[#C9A561] tracking-tighter uppercase">MARMUDDY</h1>
            </div>
            <p className="text-gray-500 text-lg font-serif italic leading-relaxed">
              Crafting excellence since 2005. Nigeria's premier bespoke house for the modern leader.
            </p>
          </div>

          <div>
            <h4 className="text-[#F5F2EB] font-bold uppercase text-[9px] tracking-[0.6em] mb-10">Navigation</h4>
            <ul className="space-y-6 text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">
              <li className="hover:text-[#C9A561] cursor-pointer transition-colors" onClick={() => onNavigate('collections')}>Collections</li>
              <li className="hover:text-[#C9A561] cursor-pointer transition-colors" onClick={() => onNavigate('gallery')}>Gallery</li>
              <li className="hover:text-[#C9A561] cursor-pointer transition-colors" onClick={() => onNavigate('blog')}>Journal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F2EB] font-bold uppercase text-[9px] tracking-[0.6em] mb-10">The Flagship HQ</h4>
            <div className="space-y-10">
              <div className="flex gap-4">
                <MapPin className="text-[#C9A561] shrink-0" size={18} />
                <span className="text-gray-500 text-[11px] uppercase tracking-widest leading-relaxed font-bold">Flat 2 Obakpo Street, off Midwifery Rd, Asaba, Nigeria</span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#C9A561] shrink-0" size={18} />
                <span className="text-[#F5F2EB] font-bold tracking-widest text-xl">08066179268</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[#F5F2EB] font-bold uppercase text-[9px] tracking-[0.6em] mb-10">Bespoke Circle</h4>
            <div
              onClick={handleContact}
              className="w-14 h-14 rounded-full border border-[#C9A561]/20 flex items-center justify-center text-[#C9A561] hover:bg-[#C9A561] hover:text-[#0C0A08] transition-all cursor-pointer shadow-xl"
            >
              <MessageCircle size={24} />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-32 mt-32 border-t border-[#C9A561]/5 text-center">
          <p className="text-gray-800 text-[8px] uppercase tracking-[1em] font-bold">© 2026 MARMUDDY'S BESPOKE FASHION • ASABA HQ</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
