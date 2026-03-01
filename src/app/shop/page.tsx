"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { mockProducts } from '@/lib/data';

export default function ShopPage() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Floral', 'Sweet', 'Fruity', 'Spicy', 'Warm', 'Fresh'];

    const filteredProducts = filter === 'All'
        ? mockProducts
        : mockProducts.filter(p => p.category.includes(filter));

    return (
        <div className="bg-luxury-black min-h-screen pt-12 pb-24">
            {/* Header */}
            <div className="py-16 text-center border-b border-gold-500/10 mb-12">
                <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">The Collection</h1>
                <p className="text-foreground/70 uppercase tracking-widest text-sm max-w-2xl mx-auto px-4">
                    Explore our range of artisanal luxury fragrances.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">

                {/* Sidebar Filter */}
                <div className="md:w-64 flex-shrink-0">
                    <h2 className="text-gold-500 font-semibold uppercase tracking-widest text-xs mb-6">Categories</h2>
                    <ul className="space-y-4">
                        {categories.map(cat => (
                            <li key={cat}>
                                <button
                                    onClick={() => setFilter(cat)}
                                    className={`text-sm uppercase tracking-wider transition-colors ${filter === cat ? 'text-gold-400 font-medium' : 'text-foreground/60 hover:text-foreground'}`}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Grid */}
                <div className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <Link href={`/product/${product.id}`}>
                                    <div className="relative aspect-[3/4] overflow-hidden bg-luxury-gray mb-6">
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
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

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-foreground/50">
                            No products found in this category.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
