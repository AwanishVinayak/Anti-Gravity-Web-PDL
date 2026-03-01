"use client";

import { motion } from 'framer-motion';
import { mockProducts } from '@/lib/data';
import Link from 'next/link';

export default function CollectionsPage() {
    return (
        <div className="bg-luxury-black min-h-screen pt-24 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-5xl md:text-6xl text-foreground mb-6"
                    >
                        Our Collections
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '80px' }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-[1px] bg-gold-500 mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {mockProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative cursor-pointer"
                        >
                            <Link href={`/product/${product.id}`} className="block w-full h-full">
                                <div className="absolute inset-0 bg-luxury-gray rounded-sm overflow-hidden">
                                    <img
                                        src={product.image_url}
                                        alt={product.category}
                                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                </div>

                                <div className="relative h-96 flex flex-col items-center justify-center p-8 text-center border border-gold-500/20 group-hover:border-gold-500/60 transition-colors duration-500 z-10 m-4">
                                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/70 mb-4 group-hover:text-gold-400 transition-colors">
                                        {product.name}
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold-500 mb-6 leading-snug">
                                        {product.category}
                                    </h2>

                                    <div className="mt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                        <span className="border-b border-gold-500 text-foreground uppercase tracking-widest text-sm pb-1">
                                            Discover
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
