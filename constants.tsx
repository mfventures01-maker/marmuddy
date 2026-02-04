
import { Category, Collection, GalleryItem, BlogPost, Inquiry, Product, FabricSignature } from './types';

export const COLORS = {
  primary: '#0A0A0A',
  secondary: '#FFFFFF',
  gold: '#C9A961',
  burgundy: '#8B1538',
  earth: '#5D4037'
};

const RAW_DATA = [
  { sku: "PROD001", fabric_type: "Variety Cotton", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Long Sleeve Senator", sizes: ["XL", "XXL", "XXXL"], price_naira: 120000, image_link: "https://i.postimg.cc/hvXGwwXZ/8JA_DELTA_LONG_SLEEVE_WOODEN_MANEQUIN.jpg" },
  { sku: "PROD002", fabric_type: "Ruby Oukutex", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Classic Monogram", sizes: ["XL", "XXL", "XXXL"], price_naira: 170000, image_link: "https://i.postimg.cc/6Q1Vvsxm/CASHMERE_BROWN_SAFARI_SUIT.jpg" },
  { sku: "PROD003", fabric_type: "Mariner Plain", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Premium Senator with Collar and Breast Pocket Monogram", sizes: ["XL", "XXL", "XXXL"], price_naira: 200000, image_link: "https://i.postimg.cc/YLjhh86R/mariner-monogram.jpg" },
  { sku: "PROD004", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Premium Senator", sizes: ["XL", "XXL", "XXXL"], price_naira: 130000, image_link: "https://i.postimg.cc/0y6Y7VZN/native_suit.jpg" },
  { sku: "PROD005", fabric_type: "Mariner Plain", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Suit Green Blue Round Neck", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/L8ZPJn6q/suit_green_blue_round_neck.jpg" },
  { sku: "PROD006", fabric_type: "High Quality Cashmere", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Striped Cashmere Brown Cream Design", sizes: ["XL", "XXL", "XXXL"], price_naira: 300000, image_link: "https://i.postimg.cc/kGGtJFcx/STRIPPED_CASHMERE_BROWN_CREAM_DESIGN.jpg" },
  { sku: "PROD007", fabric_type: "High Quality Cashmere", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Cashmere Long Sleeve Breast Pocket Knitting", sizes: ["XL", "XXL", "XXXL"], price_naira: 300000, image_link: "https://i.postimg.cc/Dw25hqTF/CASHMERE_LONGSLEEVE_BREAST_POCKET_KNITTING.jpg" },
  { sku: "PROD008", fabric_type: "JohnKoso by Marmuddy", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Bottle Green John Koso by Marmuddy", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/HnFLC25r/ARMY_GREEN_STRIPPED_DOUBLE_POCKET_JOHNKOSO.jpg" },
  { sku: "PROD009", fabric_type: "JohnKoso by Marmuddy", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Premium Black Korean JohnKoso", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/P539NtTM/PREMIUM_BLACKK_KOREAN_j_OHNKOSO.jpg" },
  { sku: "PROD010", fabric_type: "JohnKoso by Marmuddy", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Premium Korean Pepper Red JohnKoso", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/L4tWLkmn/PREMIUM_KOREAN_PEPPER_RED_JOHNKOSO.jpg" },
  { sku: "PROD011", fabric_type: "JohnKoso by Marmuddy", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Premium Off White Premium John Koso", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/xCRKTdSN/PREMIUM_OFF_WHITE_PREMIUM_JOHN_KOSO.jpg" },
  { sku: "PROD012", fabric_type: "JohnKoso by Marmuddy", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Sea Weed Green Double Breast Pocket JohnKoso", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/T1NggHwq/SEA_WEED_GREEN_DOUBLE_BREAST_POCKET_JONHKOSO.jpg" },
  { sku: "PROD013", fabric_type: "JohnKoso by Marmuddy", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Hand Woven Sky Blue John Koso", sizes: ["XL", "XXL", "XXXL"], price_naira: 130000, image_link: "https://i.postimg.cc/Nftk81LP/HAND_WOVEN_SKY_BLUE_JOHN_KOSO.jpg" },
  { sku: "PROD014", fabric_type: "JohnKoso by Marmuddy", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Bottle Green Striped Double Pocket JohnKoso", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/85zKzQ3f/Senator-Design.jpg" },
  { sku: "PROD015", fabric_type: "High Quality Premium JohnKoso", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White Collar Ash Native", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/85zKzQ3f/Senator-Design.jpg" },
  { sku: "PROD016", fabric_type: "High Quality Premium JohnKoso", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Green Collar Ash Native", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/85zKzQ3f/Senator-Design.jpg" },
  { sku: "PROD017", fabric_type: "High Quality Premium JohnKoso", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Grey White Collar Ash Native", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/85zKzQ3f/Senator-Design.jpg" },
  { sku: "PROD018", fabric_type: "High Quality Premium Cotton Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White Red Black Striped Cotton Kaftan", sizes: ["XL", "XXL", "XXXL"], price_naira: 280000, image_link: "https://i.postimg.cc/0Nbgs18M/WHITE_RED_BLACK_STRIPED_COTTEN_KAFTAN.jpg" },
  { sku: "PROD019", fabric_type: "Premium Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White and Blue Striped", sizes: ["XL", "XXL", "XXXL"], price_naira: 280000, image_link: "https://i.postimg.cc/DwfkxbHq/WHITE_AND_BLUE_STRIPPED_RMD.jpg" },
  { sku: "PROD020", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Blue Stripe", sizes: ["XL", "XXL", "XXXL"], price_naira: 280000, image_link: "https://i.postimg.cc/j2fhTM9c/BLUE_STRIPE_RMD.jpg" },
  { sku: "PROD021", fabric_type: "White Cotton Shirt with Complete Set", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White Cotton Shirt with Complete Set", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/nr04G56c/white_shirt_pack.jpg" },
  { sku: "PROD022", fabric_type: "White Cotton Shirt", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White Cotton Shirt", sizes: ["XL", "XXL", "XXXL"], price_naira: 50000, image_link: "https://i.postimg.cc/mghw8LZs/white_shirt_wrist_watch.jpg" },
  { sku: "PROD023", fabric_type: "White Cotton Shirt with Cufflinks Bottom", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White Cotton Shirt with Cufflinks Bottom", sizes: ["XL", "XXL", "XXXL"], price_naira: 50000, image_link: "https://i.postimg.cc/X7KS4gdR/white_shirt_cuffs_pack.jpg" },
  { sku: "PROD024", fabric_type: "White Cotton Shirt Pen and Cufflinks Bottom", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White Cotton Shirt Pen and Cufflinks Bottom", sizes: ["XL", "XXL", "XXXL"], price_naira: 70000, image_link: "https://i.postimg.cc/HxfDsZSg/white_shirt_pen_pack.jpg" },
  { sku: "PROD025", fabric_type: "White Cotton Shirt", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "White Cotton Shirt", sizes: ["XL", "XXL", "XXXL"], price_naira: 50000, image_link: "https://i.postimg.cc/Sx0FpvnW/white_shirt_pants.jpg" },
  { sku: "PROD026", fabric_type: "Vintage Shirts", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Vintage Pink Sign Shirt", sizes: ["XL", "XXL", "XXXL"], price_naira: 40000, image_link: "https://i.postimg.cc/T2m61xnQ/VINTAGE_PINK_SIGN_SHIRT.jpg" },
  { sku: "PROD027", fabric_type: "High Quality Premium Vintage", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Vintage Brown Pants", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/vBqcNxsb/VINTAGE_BROWN_PANTS.jpg" },
  { sku: "PROD028", fabric_type: "Premium Vintage", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Vintage Blue Stripe Shirt", sizes: ["XL", "XXL", "XXXL"], price_naira: 50000, image_link: "https://i.postimg.cc/tgbZZHkG/VINTAGE_BLUE_STRIPE_SHIRT.jpg" },
  { sku: "PROD029", fabric_type: "Premium Vintage", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Multicolor Vintage Shirt", sizes: ["XL", "XXL", "XXXL"], price_naira: 50000, image_link: "https://i.postimg.cc/Hx5bXxmH/MULTICOLOR_VINTAGE_SHIRT.jpg" },
  { sku: "PROD030", fabric_type: "Premium Vintage", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Black Grey Brown Pants", sizes: ["XL", "XXL", "XXXL"], price_naira: 130000, image_link: "https://i.postimg.cc/pXnTJwbY/BLACK_GREY_BROWN_PANTS.jpg" },
  { sku: "PROD031", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Casual Marmudis Green", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/43J0fksb/casual_marmudis_green.jpg" },
  { sku: "PROD032", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Agbada Cap Dark Glass", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/Fsz3QTM4/agabada_cap_dark_glass33.jpg" },
  { sku: "PROD033", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Native Casual", sizes: ["XL", "XXL", "XXXL"], price_naira: 120000, image_link: "https://i.postimg.cc/gkkMBxNJ/native_casual.jpg" },
  { sku: "PROD034", fabric_type: "Premium Vintage and Quality Pants", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Silver Vintage and Pants", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/WzgcthqM/silver_vintage_and_pants.jpg" },
  { sku: "PROD035", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Smile Fashion Vintage", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/Hs0Cg8CK/smile_fashion_vintage.jpg" },
  { sku: "PROD036", fabric_type: "Men Contrast Color Patchwork", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Green Shorts and Shirts", sizes: ["XL", "XXL", "XXXL"], price_naira: 100000, image_link: "https://i.postimg.cc/tTQSrDmr/green_shorts_and_shirts.jpg" },
  { sku: "PROD037", fabric_type: "Turkish Cashmere", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Fabric Cashmere", sizes: ["XL", "XXL", "XXXL"], price_naira: 200000, image_link: "https://i.postimg.cc/xdZPLhbM/FABRIC_CASHMERE.jpg" },
  { sku: "PROD038", fabric_type: "Turkish Cashmere", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Blue Cashmere Native Handknitting", sizes: ["XL", "XXL", "XXXL"], price_naira: 250000, image_link: "https://i.postimg.cc/44HPp3dF/BLUE_CASHMERE_NATIVE_HANDKNITTING.jpg" },
  { sku: "PROD039", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Etibor Cap and Buttons", sizes: ["XL", "XXL", "XXXL"], price_naira: 70000, image_link: "https://i.postimg.cc/W13v8kJv/etibor_cap.jpg" },
  { sku: "PROD040", fabric_type: "High Quality Vintage and Pants Trousers", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Vintage Couch", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/XvqMd2y3/vintage_couch.jpg" },
  { sku: "PROD041", fabric_type: "Premium Vintage Pants Trousers", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Shirt Silver Dance", sizes: ["XL", "XXL", "XXXL"], price_naira: 150000, image_link: "https://i.postimg.cc/k4kdnxGn/shirt_silver_dance.jpg" },
  { sku: "PROD042", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Casual Safari Turned Button Shirt and Khaki Shorts", sizes: ["XL", "XXL", "XXXL"], price_naira: 65000, image_link: "https://i.postimg.cc/sXBrdnV2/safari_shirt.jpg" },
  { sku: "PROD043", fabric_type: "High Quality Fabric", colors: ["White", "Black", "Red", "Green", "Blue", "Multicolor"], design_style: "Red Shirts and Short", sizes: ["XL", "XXL", "XXXL"], price_naira: 80000, image_link: "https://i.postimg.cc/k58wtKXF/redshirts_and_shortt44.jpg" }
];

export const ALL_PRODUCTS: Product[] = RAW_DATA.map(item => ({
  id: item.sku,
  sku: item.sku,
  name: item.design_style,
  category: item.design_style.toLowerCase().includes('shirt') || item.design_style.toLowerCase().includes('vintage') ? Category.SHIRTS : 
            item.design_style.toLowerCase().includes('suit') || item.design_style.toLowerCase().includes('safari') ? Category.SUITS :
            item.design_style.toLowerCase().includes('short') || item.design_style.toLowerCase().includes('casual') ? Category.CASUALS :
            item.design_style.toLowerCase().includes('pant') || item.design_style.toLowerCase().includes('trouser') ? Category.PANTS :
            Category.AFRICAN_ROYALTY,
  description: `Exquisitely tailored ${item.design_style} crafted from premium ${item.fabric_type}.`,
  poeticDescription: `Experience the fusion of heritage and haute couture with our ${item.design_style}. Handcrafted for the elite, this piece utilizes ${item.fabric_type} to ensure a silhouette that commands respect and exudes quiet luxury.`,
  price: item.price_naira,
  heroImage: item.image_link,
  fabricType: `${item.fabric_type}. Sourced for unparalleled breathability and elite drape.`,
  availableColors: item.colors.map(c => ({ name: c, hex: c === 'Multicolor' ? 'transparent' : c.toLowerCase() })),
  availableSizes: item.sizes,
  leadTimeWeeks: "4-6 weeks for precision custom tailoring.",
  customization: [
    "Monogramming: Engrave initials in gold thread",
    "Lining Choices: Premium silk or cashmere interiors",
    "Button Options: Hand-engraved brass or mother-of-pearl"
  ],
  careInstructions: "Dry clean only to preserve artisanal integrity. Store in breathable garment bag.",
  inventoryStatus: "Bespoke Order Available"
}));

export const FLAGSHIP_PRODUCT = ALL_PRODUCTS[0];

export const MOCK_COLLECTIONS: Collection[] = [
  { id: '1', name: 'Suits & Safari', category: Category.SUITS, description: 'Power suits and safari ensembles for the global leader.', startingPrice: 65000, featuredImage: RAW_DATA[1].image_link, gallery: [], isExclusive: true },
  { id: '2', name: 'African Royalty', category: Category.AFRICAN_ROYALTY, description: 'Majestic Senator and Kaftan styles with Nigerian heritage.', startingPrice: 100000, featuredImage: RAW_DATA[0].image_link, gallery: [], isExclusive: true },
  { id: '3', name: 'Premium Shirts', category: Category.SHIRTS, description: 'Bespoke cotton and vintage shirts for every occasion.', startingPrice: 40000, featuredImage: RAW_DATA[20].image_link, gallery: [], isExclusive: false }
];

export const MOCK_GALLERY: GalleryItem[] = ALL_PRODUCTS.slice(0, 16).map(p => ({
  id: p.id,
  title: p.name,
  category: p.category,
  imageUrl: p.heroImage,
  fabricType: p.fabricType,
  description: p.description,
  isExclusive: p.price > 150000,
  tags: [p.category.split(' ')[0], 'Handcrafted']
}));

// Add missing MOCK_FABRICS for DiscoverFabrics page
export const MOCK_FABRICS: FabricSignature[] = [
  {
    id: 'f1',
    title: 'COTTON ESSENTIALS',
    tagline: 'Breathable, everyday elegance.',
    description: 'Sourced from the finest Nile Delta cotton, our essentials provide a foundation of comfort and breathability for the modern leader.',
    priceRange: '₦100,000 - ₦150,000',
    heroImage: 'https://i.postimg.cc/hvXGwwXZ/8JA_DELTA_LONG_SLEEVE_WOODEN_MANEQUIN.jpg',
    moodImage: 'https://i.postimg.cc/nr04G56c/white_shirt_pack.jpg',
    accentColor: '#FFFFFF',
    monogramDetail: 'Precision single-needle stitching'
  },
  {
    id: 'f2',
    title: 'CASHMERE MASTERY',
    tagline: 'Soft power, structured legacy.',
    description: 'A blend of elite Mongolian cashmere and fine wool, crafted for silhouettes that command respect and exude quiet luxury.',
    priceRange: '₦250,000 - ₦350,000',
    heroImage: 'https://i.postimg.cc/kGGtJFcx/STRIPPED_CASHMERE_BROWN_CREAM_DESIGN.jpg',
    moodImage: 'https://i.postimg.cc/6Q1Vvsxm/CASHMERE_BROWN_SAFARI_SUIT.jpg',
    accentColor: '#8B1538',
    monogramDetail: 'Hand-knitted breast pocket detailing'
  },
  {
    id: 'f3',
    title: 'MARINER CLASSICS',
    tagline: 'Navy and charcoal authority.',
    description: 'The definitive choice for formal dominance. Our Mariner series features high-twist yarns that resist wrinkling while maintaining a razor-sharp drape.',
    priceRange: '₦180,000 - ₦220,000',
    heroImage: 'https://i.postimg.cc/YLjhh86R/mariner-monogram.jpg',
    moodImage: 'https://i.postimg.cc/L8ZPJn6q/suit_green_blue_round_neck.jpg',
    accentColor: '#0A0A0A',
    monogramDetail: 'Signature collar monogramming'
  },
  {
    id: 'f4',
    title: 'JOHNKOSO SIGNATURE',
    tagline: 'House legend, handcrafted refinement.',
    description: 'Exclusive to Marmuddy, JohnKoso fabrics represent the pinnacle of our artisanal heritage, blending traditional motifs with modern weight.',
    priceRange: '₦100,000 - ₦150,000',
    heroImage: 'https://i.postimg.cc/T1NggHwq/SEA_WEED_GREEN_DOUBLE_BREAST_POCKET_JONHKOSO.jpg',
    moodImage: 'https://i.postimg.cc/Nftk81LP/HAND_WOVEN_SKY_BLUE_JOHN_KOSO.jpg',
    accentColor: '#C9A961',
    monogramDetail: 'Authentic hand-woven texture'
  },
  {
    id: 'f5',
    title: 'VINTAGE REIMAGINED',
    tagline: 'Heritage threads for the bold.',
    description: 'Curated archives of classic patterns updated for contemporary fits. Where history meets haute couture.',
    priceRange: '₦130,000 - ₦170,000',
    heroImage: 'https://i.postimg.cc/XvqMd2y3/vintage_couch.jpg',
    moodImage: 'https://i.postimg.cc/T2m61xnQ/VINTAGE_PINK_SIGN_SHIRT.jpg',
    accentColor: '#5D4037',
    monogramDetail: 'Aged brass button accents'
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  { id: 'b1', title: 'The Art of the Power Suit', category: 'Style Guide', excerpt: 'How to command respect in the boardroom through precise tailoring.', content: 'Full article here...', date: '2024-10-15', imageUrl: RAW_DATA[1].image_link, author: 'Marmuddy' }
];

export const MOCK_INQUIRIES: Inquiry[] = [
  { id: 'i1', customerName: 'Chidi Okoro', email: 'chidi@example.com', phone: '08012345678', serviceInterest: Category.SUITS, status: 'New', date: '2024-12-20' }
];
