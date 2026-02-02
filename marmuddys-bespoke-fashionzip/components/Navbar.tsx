
import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Scissors, ShoppingBag, User } from 'lucide-react';
import { COLORS } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Collections', id: 'collections' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Journal', id: 'blog' },
  ];

  const handleBookFitting = () => {
    window.open('https://wa.me/2348066179268', '_blank');
  };

  const isAdmin = currentPage === 'admin';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen || isAdmin ? 'bg-[#0C0A08]/95 backdrop-blur-md shadow-2xl py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Minimalistic Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="p-2 bg-[#C9A561] rounded-full group-hover:scale-105 transition-transform duration-500">
            <Crown className="w-5 h-5 text-[#0C0A08]" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-display font-bold text-[#C9A561] tracking-tighter leading-none">MARMUDDY'S</h1>
            <p className="text-[7px] uppercase tracking-[0.6em] text-[#F5F2EB] opacity-50 mt-1 font-bold">Bespoke Fashion</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[9px] font-bold uppercase tracking-[0.5em] transition-all relative group/link ${
                currentPage === item.id ? 'text-[#C9A561]' : 'text-[#F5F2EB]/70 hover:text-[#C9A561]'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#C9A561] transition-all duration-500 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
            </button>
          ))}
          <button 
            onClick={handleBookFitting}
            className="px-8 py-3 bg-[#C9A561] text-[#0C0A08] font-bold uppercase tracking-[0.3em] text-[9px] hover:bg-[#F5F2EB] transition-all gold-button-sheen"
          >
            Inquire
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={handleBookFitting}
            className="px-4 py-2 bg-[#C9A961] text-[#0A0A0A] font-bold uppercase tracking-[0.2em] text-[8px] hover:bg-white transition-all"
          >
            Inquire
          </button>
          <button 
            className="text-[#C9A961]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] h-screen w-full fixed top-0 left-0 px-8 py-32 flex flex-col gap-8 animate-in slide-in-from-top duration-500 z-[100]">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-6 text-[#C9A961]">
            <X size={28} />
          </button>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-3xl font-display font-bold text-left text-white hover:text-[#C9A961] transition-colors uppercase tracking-[0.2em]"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-auto pb-12 flex flex-col gap-4">
            <button 
               onClick={() => {
                  handleBookFitting();
                  setIsMobileMenuOpen(false);
                }}
              className="w-full py-5 bg-[#C9A961] text-[#0A0A0A] font-bold uppercase tracking-[0.4em] text-[10px] text-center"
            >
              Contact HQ
            </button>
            <p className="text-[8px] uppercase tracking-[0.5em] text-white/30 text-center font-bold">Asaba Flagship • 08066179268</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
