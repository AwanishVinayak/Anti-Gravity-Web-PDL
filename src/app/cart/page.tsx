"use client";

import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

    return (
        <div className="bg-luxury-black min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="py-12 border-b border-gold-500/10 mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Your Shopping Bag</h1>
                    <p className="text-foreground/70 uppercase tracking-widest text-sm">
                        {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
                    </p>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-20">
                        <ShoppingBag size={48} className="mx-auto text-gold-500/50 mb-6" />
                        <h2 className="text-2xl text-foreground font-serif mb-6">Your bag is empty</h2>
                        <Link
                            href="/shop"
                            className="inline-block border border-gold-500 text-gold-500 px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-luxury-black transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-8">
                            {cart.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col sm:flex-row gap-6 border-b border-gold-500/10 pb-8"
                                >
                                    <div className="w-full sm:w-32 aspect-square relative bg-luxury-gray flex-shrink-0">
                                        <img src={item.image_url} alt={item.name} className="object-cover w-full h-full" />
                                    </div>

                                    <div className="flex-grow flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-gold-500 text-xs uppercase tracking-widest mb-1">{item.category}</p>
                                                <h3 className="font-serif text-xl text-foreground">{item.name} <span className="text-sm font-sans text-foreground/50 ml-2">({item.size})</span></h3>
                                            </div>
                                            <p className="text-lg text-foreground">₹{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>

                                        <div className="flex justify-between items-end mt-6">
                                            <div className="flex items-center border border-gold-500/30">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-3 py-1 text-foreground hover:bg-gold-500/10 transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3 text-foreground w-10 text-center text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 text-foreground hover:bg-gold-500/10 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-foreground/50 hover:text-red-500 transition-colors flex items-center text-xs uppercase tracking-wider"
                                            >
                                                <Trash2 size={14} className="mr-2" /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-luxury-gray/50 border border-gold-500/20 p-8 sticky top-28">
                                <h3 className="text-lg font-serif text-foreground mb-6 uppercase tracking-widest border-b border-gold-500/20 pb-4">
                                    Order Summary
                                </h3>

                                <div className="space-y-4 mb-8 text-sm">
                                    <div className="flex justify-between text-foreground/80">
                                        <span>Subtotal</span>
                                        <span>₹{cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-foreground/80">
                                        <span>Shipping</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="flex justify-between text-xl text-foreground font-serif pt-4 border-t border-gold-500/20 mb-8">
                                    <span>Total</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>

                                <Link
                                    href="/checkout"
                                    className="block w-full text-center bg-gold-500 text-luxury-black py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gold-400 transition-colors"
                                >
                                    Proceed to Checkout
                                </Link>

                                <p className="text-center text-xs text-foreground/50 mt-6 tracking-wide">
                                    Taxes and shipping calculated at checkout
                                </p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
