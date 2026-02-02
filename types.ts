
export enum Category {
  SUITS = 'Exclusive Suits',
  SHIRTS = 'Premium Shirts',
  PANTS = 'Tailored Pants',
  CASUALS = 'Smart Casuals',
  AFRICAN_ROYALTY = 'African Royalty',
  SPECIAL = 'Special Occasions'
}

export interface FabricSignature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  priceRange: string;
  heroImage: string;
  moodImage: string;
  accentColor: string;
  monogramDetail?: string;
}

export interface Collection {
  id: string;
  name: string;
  category: Category;
  description: string;
  startingPrice: number;
  featuredImage: string;
  gallery: string[];
  isExclusive: boolean;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: Category;
  description: string;
  poeticDescription: string;
  price: number;
  heroImage: string;
  fabricType: string;
  availableColors: { name: string; hex: string; image?: string }[];
  availableSizes: string[];
  leadTimeWeeks: string;
  customization: string[];
  careInstructions: string;
  inventoryStatus: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  fabricType: string;
  description: string;
  isExclusive: boolean;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  author: string;
}

export interface Inquiry {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  serviceInterest: Category;
  status: 'New' | 'Contacted' | 'Scheduled' | 'Completed' | 'Cancelled';
  date: string;
}
