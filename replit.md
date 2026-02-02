# Marmuddy's Bespoke Fashion

## Overview

Marmuddy's Bespoke Fashion is a luxury e-commerce platform specializing in bespoke tailoring that combines African royalty fashion with contemporary masculine elegance. The platform showcases premium handcrafted garments including suits, shirts, traditional African attire (Senator, Kaftan, Agbada), and signature fabric collections. The application features an AI-powered "Regal Stylist" chatbot for personalized fashion consultation, product galleries with cinematic presentation, and direct WhatsApp integration for bespoke commissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript, using functional components and hooks
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Styling**: Tailwind CSS loaded via CDN with custom design system
- **Typography**: Google Fonts (Cinzel for display, Cormorant Garamond for serif, Lato for body)
- **Icons**: Lucide React for consistent iconography
- **Charts**: Recharts for admin dashboard analytics

### Routing
- Custom state-based routing using React useState (no external router library)
- Pages: Home, Collections, Product Detail, Admin Dashboard, Gallery, Blog, About, Contact
- Navigation managed through `onNavigate` callback props passed between components

### Data Management
- Static product data stored in `constants.tsx` as TypeScript constants
- Type definitions in `types.ts` for Product, Category, Collection, and FabricSignature
- No backend database - all data is client-side
- Categories: Exclusive Suits, Premium Shirts, Tailored Pants, Smart Casuals, African Royalty, Special Occasions

### AI Integration
- Google Gemini API integration via `@google/genai` SDK
- Service layer in `services/geminiService.ts` for AI-powered features
- "Regal Stylist" chatbot provides personalized fashion advice
- Product description generation capabilities

### Design Patterns
- Component-based architecture with clear separation of concerns
- Props drilling for state management (lightweight, no Redux/Context needed)
- Service layer pattern for external API calls
- Constants file for centralized configuration and mock data

## External Dependencies

### Third-Party Services
- **Google Gemini API**: AI-powered fashion consultation and content generation
- **WhatsApp Business**: Direct customer communication for bespoke commissions (wa.me links)
- **PostImg**: Image hosting for product photos and hero images

### NPM Packages
- `react` / `react-dom`: UI framework
- `@google/genai`: Gemini AI SDK
- `lucide-react`: Icon library
- `recharts`: Data visualization for admin dashboard
- `vite` / `@vitejs/plugin-react`: Build tooling
- `typescript`: Type safety

### Environment Variables
- `GEMINI_API_KEY`: Required for AI stylist functionality (set in `.env.local`)

### CDN Resources
- Tailwind CSS via CDN script tag
- Google Fonts for typography