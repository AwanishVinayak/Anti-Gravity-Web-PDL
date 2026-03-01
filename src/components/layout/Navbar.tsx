"use client";
import Image from 'next/image';

import Link from 'next/link';
import { ShoppingBag, User, Menu, X, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { supabase } from '@/lib/supabase/client';
import type { User as SupabaseUser } from '@supabase/supabase-js';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const [user, setUser] = useState<SupabaseUser | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
    };

    return (
        <nav className="fixed w-full z-50 bg-luxury-black/90 backdrop-blur-md border-b border-gold-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <Image
                            src="/images/logo-transparent.png"
                            alt="Parfum de Lune"
                            width={70}
                            height={70}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/shop" className="text-foreground hover:text-gold-500 transition-colors duration-300 uppercase text-sm tracking-widest">Shop</Link>
                        <Link href="/collections" className="text-foreground hover:text-gold-500 transition-colors duration-300 uppercase text-sm tracking-widest">Collections</Link>
                        <Link href="/about" className="text-foreground hover:text-gold-500 transition-colors duration-300 uppercase text-sm tracking-widest">Our Story</Link>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link href="/dashboard" className="text-foreground hover:text-gold-500 transition-colors duration-300">
                                    <User size={20} />
                                </Link>
                                <button onClick={handleSignOut} className="text-foreground hover:text-gold-500 transition-colors duration-300">
                                    <LogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <Link href="/login" className="text-foreground hover:text-gold-500 transition-colors duration-300">
                                <User size={20} />
                            </Link>
                        )}

                        <Link href="/cart" className="text-foreground hover:text-gold-500 transition-colors duration-300 relative">
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-gold-500 text-luxury-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Link href="/cart" className="text-foreground hover:text-gold-500 relative">
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-gold-500 text-luxury-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground hover:text-gold-500 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-luxury-black border-b border-gold-500/20"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
                            <Link href="/shop" className="block text-foreground hover:text-gold-500 uppercase text-sm tracking-widest py-2">Shop</Link>
                            <Link href="/collections" className="block text-foreground hover:text-gold-500 uppercase text-sm tracking-widest py-2">Collections</Link>
                            <Link href="/about" className="block text-foreground hover:text-gold-500 uppercase text-sm tracking-widest py-2">Our Story</Link>
                            {user ? (
                                <>
                                    <Link href="/dashboard" className="block text-foreground hover:text-gold-500 uppercase text-sm tracking-widest py-2">Dashboard</Link>
                                    <button onClick={handleSignOut} className="block text-foreground hover:text-gold-500 uppercase text-sm tracking-widest py-2">Sign Out</button>
                                </>
                            ) : (
                                <Link href="/login" className="block text-foreground hover:text-gold-500 uppercase text-sm tracking-widest py-2">Account</Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
