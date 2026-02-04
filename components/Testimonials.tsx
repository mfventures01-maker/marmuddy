import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
    id: string;
    name: string;
    title: string;
    location: string;
    quote: string;
    rating: number;
    image?: string;
    verified: boolean;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Chief Emeka Okonkwo',
        title: 'CEO, Delta Energy Holdings',
        location: 'Lagos, Nigeria',
        quote: 'Marmuddy\'s craftsmanship is unparalleled. Every stitch tells a story of excellence. My bespoke senator suit commands respect in every boardroom I enter.',
        rating: 5,
        verified: true
    },
    {
        id: 't2',
        name: 'Dr. Adaeze Nwankwo',
        title: 'International Diplomat',
        location: 'Abuja, Nigeria',
        quote: 'The attention to detail is extraordinary. From the initial consultation to the final fitting, Marmuddy\'s team delivered a masterpiece that perfectly captures my heritage and professional stature.',
        rating: 5,
        verified: true
    },
    {
        id: 't3',
        name: 'Alhaji Musa Ibrahim',
        title: 'Chairman, Northern Ventures',
        location: 'Kano, Nigeria',
        quote: 'I\'ve worn bespoke from London and Milan, but Marmuddy\'s brings something unique - authentic African luxury with international sophistication. Simply exceptional.',
        rating: 5,
        verified: true
    },
    {
        id: 't4',
        name: 'Mr. Chukwudi Okafor',
        title: 'Tech Entrepreneur',
        location: 'Asaba, Nigeria',
        quote: 'The JohnKoso collection is a game-changer. Modern, elegant, and distinctly Nigerian. Marmuddy\'s understands the contemporary African gentleman.',
        rating: 5,
        verified: true
    },
    {
        id: 't5',
        name: 'Prince Adeyemi Adeleke',
        title: 'Royal Family Member',
        location: 'Ile-Ife, Nigeria',
        quote: 'Royalty recognizes royalty. Marmuddy\'s bespoke service honors our traditions while embracing modernity. Every piece is a work of art.',
        rating: 5,
        verified: true
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="py-32 md:py-48 bg-[#11100D] border-y border-[#C9A561]/5 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-10 right-10 opacity-5">
                <Quote size={200} className="text-[#C9A561]" strokeWidth={1} />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 space-y-4">
                    <span className="text-[#C9A561] text-[9px] uppercase tracking-[0.7em] font-bold">Client Testimonials</span>
                    <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] tracking-tighter uppercase">
                        Distinguished <br />
                        <span className="gold-sheen italic font-serif lowercase tracking-normal">Voices</span>
                    </h2>
                    <div className="w-24 h-px bg-[#C9A561] mx-auto opacity-20" />
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    <div className="bg-[#0C0A08] border border-[#C9A561]/10 p-12 md:p-20 rounded-2xl shadow-2xl min-h-[400px] flex flex-col justify-center">
                        {/* Rating Stars */}
                        <div className="flex justify-center gap-2 mb-8">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                <Star key={i} size={20} className="text-[#C9A561] fill-[#C9A561]" />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-center mb-12">
                            <Quote size={32} className="text-[#C9A561] opacity-30 mx-auto mb-6" />
                            <p className="text-xl md:text-3xl font-serif italic text-[#F5F2EB] leading-relaxed max-w-4xl mx-auto">
                                "{currentTestimonial.quote}"
                            </p>
                        </blockquote>

                        {/* Author Info */}
                        <div className="text-center space-y-2">
                            <h4 className="text-[#C9A561] font-display font-bold text-xl md:text-2xl tracking-wider uppercase">
                                {currentTestimonial.name}
                            </h4>
                            <p className="text-gray-400 text-sm md:text-base font-serif italic">
                                {currentTestimonial.title}
                            </p>
                            <p className="text-gray-600 text-xs uppercase tracking-widest">
                                {currentTestimonial.location}
                            </p>
                            {currentTestimonial.verified && (
                                <div className="flex items-center justify-center gap-2 pt-4">
                                    <div className="w-2 h-2 bg-[#C9A561] rounded-full" />
                                    <span className="text-[#C9A561] text-[8px] uppercase tracking-[0.5em] font-bold">
                                        Verified Client
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full md:left-0 p-4 bg-[#0C0A08] border border-[#C9A561]/20 text-[#C9A561] rounded-full hover:bg-[#C9A561] hover:text-[#0C0A08] transition-all shadow-xl"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full md:right-0 p-4 bg-[#0C0A08] border border-[#C9A561]/20 text-[#C9A561] rounded-full hover:bg-[#C9A561] hover:text-[#0C0A08] transition-all shadow-xl"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsAutoPlaying(false);
                            }}
                            className={`transition-all duration-500 ${index === currentIndex
                                    ? 'w-12 h-2 bg-[#C9A561] rounded-full'
                                    : 'w-2 h-2 bg-[#C9A561]/20 rounded-full hover:bg-[#C9A561]/50'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-24 border-t border-[#C9A561]/10">
                    <div className="text-center space-y-2">
                        <p className="text-4xl md:text-5xl font-display font-bold text-[#C9A561]">500+</p>
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Elite Clients</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-4xl md:text-5xl font-display font-bold text-[#C9A561]">18+</p>
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Years Legacy</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-4xl md:text-5xl font-display font-bold text-[#C9A561]">100%</p>
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Bespoke Craft</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-4xl md:text-5xl font-display font-bold text-[#C9A561]">5.0</p>
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Client Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
