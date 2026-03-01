"use client";

import { use, useState } from 'react';
import { motion } from 'framer-motion';
import { mockProducts } from '@/lib/data';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

    const product = mockProducts.find(p => p.id === resolvedParams.id);

    if (!product) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center bg-luxury-black text-foreground">
                <div className="text-center">
                    <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
                    <Link href="/shop" className="text-gold-500 uppercase tracking-widest text-sm hover:text-gold-400">
                        Return to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const selectedVariant = product.variants[selectedVariantIndex];

    const handleAddToCart = () => {
        addToCart({
            id: `${product.id}-${selectedVariant.size}`,
            productId: product.id,
            name: product.name,
            price: selectedVariant.price,
            image_url: product.image_url,
            category: product.category,
            quantity,
            size: selectedVariant.size
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-luxury-black min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link href="/shop" className="inline-flex items-center text-foreground/60 hover:text-gold-500 transition-colors mb-12 text-sm uppercase tracking-widest">
                    <ChevronLeft size={16} className="mr-2" /> Back to Shop
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="aspect-[4/5] relative bg-luxury-gray"
                    >
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="object-cover w-full h-full"
                        />
                        <p className="absolute bottom-4 w-full text-center text-[10px] text-foreground/40 italic mix-blend-difference opacity-80 backdrop-blur-[2px]">
                            * Images for representation across models, actual product may vary.
                        </p>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-gold-500 uppercase tracking-[0.2em] text-sm font-semibold mb-4">{product.category}</p>
                        <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">{product.name}</h1>
                        <p className="text-2xl text-foreground/90 font-light mb-8">₹{selectedVariant.price.toFixed(2)}</p>

                        <div className="w-full h-[1px] bg-gold-500/20 mb-8" />

                        <p className="text-foreground/70 leading-relaxed mb-6 font-light">
                            {product.description}
                        </p>

                        <div className="text-sm text-foreground/60 leading-relaxed mb-10 whitespace-pre-line font-light">
                            {product.notes}
                        </div>

                        {/* Size Selection */}
                        <div className="mb-8">
                            <h3 className="text-sm uppercase tracking-widest text-foreground/70 mb-3">Select Size</h3>
                            <div className="flex gap-4">
                                {product.variants.map((variant, index) => (
                                    <button
                                        key={variant.size}
                                        onClick={() => setSelectedVariantIndex(index)}
                                        className={`px-6 py-2 text-sm border transition-colors ${selectedVariantIndex === index ? 'border-gold-500 text-gold-500 bg-gold-500/10' : 'border-gold-500/30 text-foreground/70 hover:border-gold-500'}`}
                                    >
                                        {variant.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-10">
                            <div className="flex items-center border border-gold-500/30">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-3 text-foreground hover:bg-gold-500/10 transition-colors"
                                >
                                    -
                                </button>
                                <span className="px-4 text-foreground w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-3 text-foreground hover:bg-gold-500/10 transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="flex-grow flex items-center justify-center bg-gold-500 text-luxury-black py-4 px-8 uppercase tracking-widest text-sm font-semibold hover:bg-gold-400 transition-colors group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    <ShoppingBag size={18} className="mr-3 group-hover:scale-110 transition-transform" />
                                    {added ? 'Added to Cart' : 'Add to Cart'}
                                </span>
                            </button>
                        </div>

                        {/* Details Accordion Placeholder */}
                        <div className="space-y-4 border-t border-gold-500/20 pt-8">
                            <div className="group">
                                <h3 className="uppercase tracking-widest text-sm text-foreground mb-4">Shipping & Returns</h3>
                                <div className="text-sm text-foreground/70 font-light space-y-2">
                                    <p><strong className="text-foreground/90 font-medium">Shipping:</strong> 7-14 days</p>
                                    <p><strong className="text-foreground/90 font-medium">Returns:</strong> Return only possible if damaged and Unboxing video is available.</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
