"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

import { mockProducts } from '@/lib/data';

export default function FeaturedProducts() {
    return (
        <section className="py-24 bg-luxury-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-500 tracking-[0.2em] uppercase text-xs font-semibold mb-4"
                    >
                        Curated Selection
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl py-2 md:text-5xl text-foreground"
                    >
                        Featured Fragrances
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '60px' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-[1px] bg-gold-500 mt-6"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {mockProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <Link href={`/product/${product.id}`}>
                                <div className="relative aspect-[3/4] overflow-hidden bg-luxury-gray rounded-sm mb-6">
                                    {/* Image Placeholder with Object Fit */}
                                    <img
                                        src={product.image_url}
                                        alt={product.name}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Quick Add Button Overlay */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[80%]">
                                        <button className="w-full bg-white/90 backdrop-blur-sm text-luxury-black py-3 text-sm uppercase tracking-widest font-semibold hover:bg-gold-500 transition-colors">
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-gold-500 text-xs uppercase tracking-widest mb-2">{product.category}</p>
                                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold-400 transition-colors">{product.name}</h3>
                                    <p className="text-foreground/80">₹{product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link href="/shop" className="text-sm uppercase tracking-[0.2em] border-b border-gold-500 pb-1 text-foreground hover:text-gold-400 transition-colors">
                        View All Products
                    </Link>
                </div>

            </div>
        </section>
    );
}
