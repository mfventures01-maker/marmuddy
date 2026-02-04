import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DollarSign } from 'lucide-react';

type Currency = 'NGN' | 'USD' | 'EUR' | 'GBP';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInNaira: number) => string;
  getSymbol: () => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Exchange rates (update these regularly in production)
const EXCHANGE_RATES = {
  NGN: 1,
  USD: 0.0012, // 1 NGN = 0.0012 USD (approx 833 NGN/USD)
  EUR: 0.0011, // 1 NGN = 0.0011 EUR
  GBP: 0.00095 // 1 NGN = 0.00095 GBP
};

const CURRENCY_SYMBOLS = {
  NGN: '₦',
  USD: '$',
  EUR: '€',
  GBP: '£'
};

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('NGN');

  const formatPrice = (priceInNaira: number): string => {
    const convertedPrice = priceInNaira * EXCHANGE_RATES[currency];
    const symbol = CURRENCY_SYMBOLS[currency];
    
    if (currency === 'NGN') {
      return `${symbol}${convertedPrice.toLocaleString('en-NG', { maximumFractionDigits: 0 })}`;
    }
    
    return `${symbol}${convertedPrice.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })}`;
  };

  const getSymbol = () => CURRENCY_SYMBOLS[currency];

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, getSymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
};

// Currency Toggle Component
export const CurrencyToggle: React.FC = () => {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const currencies: Currency[] = ['NGN', 'USD', 'EUR', 'GBP'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#0C0A08]/50 border border-[#C9A561]/20 rounded-lg text-[#C9A561] hover:border-[#C9A561]/50 transition-all backdrop-blur-md"
      >
        <DollarSign size={16} />
        <span className="text-xs font-bold tracking-widest uppercase">{currency}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#0C0A08] border border-[#C9A561]/30 rounded-lg shadow-2xl overflow-hidden z-50 min-w-[120px]">
          {currencies.map((curr) => (
            <button
              key={curr}
              onClick={() => {
                setCurrency(curr);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-xs font-bold tracking-widest uppercase transition-all ${
                currency === curr
                  ? 'bg-[#C9A561] text-[#0C0A08]'
                  : 'text-[#C9A561] hover:bg-[#C9A561]/10'
              }`}
            >
              {CURRENCY_SYMBOLS[curr]} {curr}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
