"use client";

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="bg-luxury-black min-h-screen pt-24 pb-24 flex items-center justify-center relative overflow-hidden">

            {/* Background elements for depth */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-luxury-gray blur-[150px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-8"
                >
                    Our Story
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed md:leading-snug mb-12"
                >
                    Parfum de Lune was born from a simple belief — fragrance is not just a scent, it is an <span className="italic text-gold-400">identity</span>.
                </motion.p>

                <div className="flex justify-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '60px' }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-[1px] bg-gradient-to-b from-gold-500 to-transparent"
                    />
                </div>

                <div className="space-y-8 text-foreground/70 font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        In a world filled with ordinary perfumes, we wanted to create something unforgettable. Inspired by the quiet power of the moon, each bottle captures depth, elegance, and presence.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        We craft bold, long-lasting fragrances designed for individuals who refuse to blend in. Every drop is carefully selected to deliver richness, performance, and luxury — without compromise.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="pt-8"
                    >
                        <p className="font-serif text-2xl md:text-3xl text-gold-500 italic">
                            Parfum de Lune is not just worn.
                        </p>
                        <p className="font-serif text-2xl md:text-3xl text-foreground mt-2">
                            It is experienced.
                        </p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
