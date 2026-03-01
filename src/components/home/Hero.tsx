"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-luxury-black">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxury-black/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595425970377-c9703bc48b2d?q=80&w=2670&auto=format&fit=crop')" }}
                />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-6"
                >
                    Signature Collection
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight"
                >
                    Essence of <br />
                    <span className="italic text-gold-400 font-light">Elegance</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-24 h-[1px] bg-gold-500 mb-8"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-foreground/80 md:text-lg mb-12 max-w-2xl font-light leading-relaxed"
                >
                    Discover our curated collection of artisanal fragrances, masterfully blended for the sophisticated soul.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <Link
                        href="/shop"
                        className="px-10 py-4 bg-gold-500 text-luxury-black font-semibold uppercase tracking-widest text-sm hover:bg-gold-400 transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Explore Collection</span>
                        <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                    </Link>
                    <Link
                        href="/about"
                        className="px-10 py-4 border border-gold-500/50 text-foreground font-semibold uppercase tracking-widest text-sm hover:border-gold-500 transition-all duration-300"
                    >
                        Our Heritage
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
