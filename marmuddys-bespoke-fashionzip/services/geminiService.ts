import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Corrected initialization to use process.env.API_KEY directly as per SDK guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
  }

  async getStyleAdvice(occasion: string, preference: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am looking for bespoke fashion advice for a ${occasion}. My personal style preference is ${preference}. 
        Note: We have specific fabric signatures: 
        1. Cotton Essentials (Breathable, everyday elegance)
        2. Cashmere Mastery (Soft power, structured legacy)
        3. Mariner Classics (Navy/Charcoal authority)
        4. JohnKoso Signature (House legend, handcrafted refinement)
        5. Vintage Reimagined (Heritage threads)
        Include fabric choices and accessories based on these.`,
        config: {
          systemInstruction: "You are the 'Regal Stylist' for Marmuddy's Bespoke Fashion. Your tone is sophisticated, authoritative, and encouraging. You specialize in blending traditional African royalty with modern luxury menswear. You have deep knowledge of our 5 key fabric signatures.",
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Style Advice Error:", error);
      return "The Regal Stylist is currently attending to a royal commission. Please try again shortly.";
    }
  }

  async generateProductDescription(productName: string, category: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Write a high-end, luxury marketing description for a ${category} item named '${productName}'. Focus on 'Marmuddy's Bespoke Fashion' values: craftsmanship, heritage, and distinction.`,
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Content Generation Error:", error);
      return null;
    }
  }
}

export const geminiService = new GeminiService();