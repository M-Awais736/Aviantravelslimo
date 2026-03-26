'use client';

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background with Gradient/Placeholder */}
            <div className="absolute inset-0 bg-neutral-900 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                {/* Placeholder for Client Image */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold-dark)_0%,_transparent_70%)] opacity-20 blur-3xl" />
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-gold-light text-sm font-medium mb-6">
                            <Star size={14} fill="currentColor" />
                            <span>Premium Chauffeur Service in DC, MD, VA</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                            Elevate Your <span className="text-gold italic">Journey</span>
                            <br />
                            Beyond Expectations
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                            Experience the pinnacle of luxury transportation. Whether it's corporate travel, airport transfers, or a special occasion, arrive in style and comfort with our top-tier fleet.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                            <Link
                                href="/reservations"
                                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gold text-black font-bold text-base md:text-lg uppercase tracking-wide rounded-sm hover:bg-gold-light transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/20"
                            >
                                Book Your Ride <ArrowRight size={20} />
                            </Link>

                            <Link
                                href="/fleet"
                                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent border border-white/30 text-white font-semibold text-base md:text-lg uppercase tracking-wide rounded-sm hover:bg-white/10 transition-colors"
                            >
                                Explore Fleet
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>
        </section>
    );
}
