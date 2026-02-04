
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import RegalStylist from './components/RegalStylist';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import OurStory from './pages/OurStory';
import { CurrencyProvider } from './components/CurrencyToggle';
import { ALL_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const navigateToProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('product-detail');
  };

  // Simple Router based on state
  const renderPage = () => {
    if (currentPage === 'product-detail' && selectedProductId) {
      const product = ALL_PRODUCTS.find(p => p.id === selectedProductId) || ALL_PRODUCTS[0];
      return <ProductDetail product={product} onBack={() => setCurrentPage('collections')} onNavigate={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onProductClick={navigateToProduct} />;
      case 'admin':
        return <AdminDashboard />;
      case 'collections':
        return <Collections onNavigate={setCurrentPage} onProductClick={navigateToProduct} />;
      case 'our-story':
        return <OurStory onNavigate={setCurrentPage} />;
      case 'gallery':
      case 'blog':
      case 'contact':
        return (
          <div className="pt-40 min-h-screen bg-[#0A0A0A] px-10 max-w-7xl mx-auto text-center space-y-12">
            <h2 className="text-7xl font-display font-bold text-white capitalize tracking-tighter uppercase">{currentPage}</h2>
            <div className="w-20 h-px bg-[#C9A961] mx-auto opacity-30" />
            <p className="text-zinc-600 font-serif italic text-2xl max-w-2xl mx-auto leading-relaxed">
              This editorial section is currently being curated for the next release. Experience the full Marmuddy's portfolio where artisanal legacy meets cinematic fashion.
            </p>
            <button
              onClick={() => setCurrentPage('home')}
              className="px-12 py-5 bg-[#C9A961] text-[#0A0A0A] font-bold uppercase tracking-[0.5em] text-[10px] hover:bg-white transition-all shadow-2xl"
            >
              Back to Showroom
            </button>
          </div>
        );
      default:
        return <Home onNavigate={setCurrentPage} onProductClick={navigateToProduct} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProductId]);

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-[#0A0A0A] selection:bg-[#C9A961] selection:text-[#0A0A0A]">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

        {renderPage()}

        <RegalStylist />
      </div>
    </CurrencyProvider>
  );
};

export default App;
