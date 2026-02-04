import React from 'react';
import { Crown, Scissors, Heart, Globe, Award, Users } from 'lucide-react';

const OurStory: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    return (
        <div className="bg-[#0C0A08] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08] via-[#0C0A08]/60 to-[#0C0A08] z-10" />
                <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1920"
                    alt="Marmuddy's Atelier"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3]"
                />

                <div className="relative z-20 text-center space-y-8 px-6 max-w-5xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <Crown size={56} className="text-[#C9A561]" strokeWidth={1} />
                    </div>
                    <h1 className="fluid-h1 font-display font-bold text-[#F5F2EB] tracking-[0.1em] uppercase leading-none">
                        The Marmuddy <br />
                        <span className="gold-sheen italic font-serif lowercase tracking-normal">Legacy</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-serif italic text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        "Where Nigerian heritage meets international sophistication. A story of craftsmanship, excellence, and timeless elegance."
                    </p>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-[#C9A561] text-[9px] uppercase tracking-[0.7em] font-bold">Est. 2005</span>
                            <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] tracking-tighter uppercase leading-tight">
                                From Asaba <br />
                                to the <span className="gold-sheen italic font-serif lowercase tracking-normal">World</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-400 text-lg md:text-xl font-serif leading-relaxed">
                            <p>
                                In 2005, in the heart of Asaba, Delta State, a vision was born. Marmuddy's Bespoke Fashion emerged from a deep reverence for Nigerian sartorial heritage and an unwavering commitment to world-class craftsmanship.
                            </p>
                            <p>
                                What began as a small atelier serving discerning gentlemen in the Niger Delta has evolved into Nigeria's premier destination for bespoke menswear, where traditional African royalty meets contemporary sophistication.
                            </p>
                            <p>
                                Every garment we create is a testament to our founder's philosophy: <span className="text-[#C9A561] italic">"True luxury is not worn—it is embodied."</span>
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[3/4] bg-[#11100D] border border-[#C9A561]/10 shadow-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800"
                                alt="Marmuddy's Flagship Atelier"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -bottom-8 -right-8 w-full h-full border border-[#C9A561]/20 -z-10" />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 bg-[#11100D] border-y border-[#C9A561]/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] tracking-tighter uppercase">
                            Our <span className="gold-sheen italic font-serif lowercase tracking-normal">Pillars</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-serif italic text-lg md:text-xl">
                            The principles that guide every stitch, every consultation, every masterpiece.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                        {[
                            {
                                icon: Scissors,
                                title: 'Artisanal Mastery',
                                description: 'Every garment is handcrafted by master tailors with decades of experience, ensuring precision in every detail.'
                            },
                            {
                                icon: Heart,
                                title: 'Heritage Pride',
                                description: 'We celebrate Nigerian craftsmanship, blending traditional techniques with contemporary design innovation.'
                            },
                            {
                                icon: Globe,
                                title: 'Global Excellence',
                                description: 'Our standards match the world\'s finest fashion houses, from Savile Row to Milan\'s Via Montenapoleone.'
                            },
                            {
                                icon: Award,
                                title: 'Uncompromising Quality',
                                description: 'We source only the finest fabrics—from Turkish cashmere to Egyptian cotton—for unparalleled luxury.'
                            },
                            {
                                icon: Users,
                                title: 'Client Partnership',
                                description: 'Your vision becomes our mission. We collaborate intimately to create garments that tell your unique story.'
                            },
                            {
                                icon: Crown,
                                title: 'Timeless Elegance',
                                description: 'We craft pieces that transcend trends, becoming heirlooms that embody enduring sophistication.'
                            }
                        ].map((pillar, index) => (
                            <div key={index} className="group text-center space-y-6 p-8 border border-[#C9A561]/5 hover:border-[#C9A561]/30 transition-all duration-500 bg-[#0C0A08]/50">
                                <div className="flex justify-center">
                                    <pillar.icon className="text-[#C9A561] group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1} />
                                </div>
                                <h3 className="text-[#F5F2EB] font-display font-bold text-xl md:text-2xl uppercase tracking-wider">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-serif">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Craftsmanship Process */}
            <section className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <span className="text-[#C9A561] text-[9px] uppercase tracking-[0.7em] font-bold">The Bespoke Ritual</span>
                    <h2 className="fluid-h2 font-display font-bold text-[#F5F2EB] tracking-tighter uppercase">
                        From Vision to <br />
                        <span className="gold-sheen italic font-serif lowercase tracking-normal">Masterpiece</span>
                    </h2>
                </div>

                <div className="space-y-20">
                    {[
                        {
                            step: '01',
                            title: 'The Consultation',
                            description: 'We begin with an intimate conversation about your lifestyle, preferences, and the occasions that define you. This is where your vision takes shape.',
                            duration: '60-90 minutes'
                        },
                        {
                            step: '02',
                            title: 'Fabric Selection',
                            description: 'From our curated collection of premium fabrics—cashmere, silk, Egyptian cotton, and exclusive JohnKoso weaves—you choose the foundation of your garment.',
                            duration: '30-45 minutes'
                        },
                        {
                            step: '03',
                            title: 'Precision Measurement',
                            description: 'Our master tailors take over 30 measurements, ensuring a fit so perfect it feels like a second skin. Every contour is mapped with meticulous care.',
                            duration: '45 minutes'
                        },
                        {
                            step: '04',
                            title: 'Design Customization',
                            description: 'Choose your monogramming, lining, buttons, and finishing details. This is where your garment becomes uniquely yours.',
                            duration: '30 minutes'
                        },
                        {
                            step: '05',
                            title: 'Handcrafted Creation',
                            description: 'Our artisans spend 40-60 hours hand-stitching, pressing, and perfecting every element. This is where craftsmanship becomes art.',
                            duration: '4-6 weeks'
                        },
                        {
                            step: '06',
                            title: 'The Final Fitting',
                            description: 'You return for a fitting where we make final adjustments, ensuring absolute perfection. Only then is your masterpiece complete.',
                            duration: '30-60 minutes'
                        }
                    ].map((phase, index) => (
                        <div key={index} className="grid md:grid-cols-[200px_1fr] gap-12 items-start group">
                            <div className="space-y-2">
                                <p className="text-6xl md:text-8xl font-display font-bold text-[#C9A561]/10 group-hover:text-[#C9A561]/30 transition-all duration-500">
                                    {phase.step}
                                </p>
                                <p className="text-[#C9A561] text-[8px] uppercase tracking-[0.5em] font-bold">
                                    {phase.duration}
                                </p>
                            </div>
                            <div className="space-y-4 border-l-2 border-[#C9A561]/20 pl-12 group-hover:border-[#C9A561]/50 transition-all duration-500">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-[#F5F2EB] uppercase tracking-wider">
                                    {phase.title}
                                </h3>
                                <p className="text-gray-400 text-lg md:text-xl font-serif leading-relaxed">
                                    {phase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 bg-[#C9A561] gold-button-sheen relative overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12">
                    <h2 className="fluid-h1 font-display font-bold text-[#0C0A08] tracking-tighter uppercase leading-none">
                        Begin Your <br />
                        Bespoke Journey
                    </h2>
                    <p className="text-xl md:text-2xl text-[#0C0A08]/70 font-serif italic max-w-3xl mx-auto">
                        Visit our Asaba flagship atelier and experience the art of true bespoke tailoring.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8">
                        <button
                            onClick={() => window.open('https://wa.me/2348066179268', '_blank')}
                            className="px-16 py-7 bg-[#0C0A08] text-[#F5F2EB] font-bold uppercase tracking-[0.5em] text-[10px] hover:bg-black transition-all shadow-2xl"
                        >
                            Book Consultation
                        </button>
                        <div className="flex flex-col items-center sm:items-start text-[#0C0A08]">
                            <span className="text-[9px] uppercase tracking-[0.5em] font-bold mb-1 opacity-70">Direct Line</span>
                            <span className="text-4xl md:text-5xl font-bold tracking-tighter">08066179268</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-[-10%] left-[-5%] opacity-10 text-[#0C0A08]">
                    <Scissors size={300} strokeWidth={1} />
                </div>
            </section>
        </div>
    );
};

export default OurStory;
