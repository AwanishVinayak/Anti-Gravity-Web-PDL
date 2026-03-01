"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Package, User as UserIcon, LogOut } from 'lucide-react';
import type { User } from '@supabase/supabase-js';

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/login');
            } else {
                setUser(session.user);
            }
            setLoading(false);
        };
        fetchUser();
    }, [router]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    if (loading) {
        return <div className="min-h-screen bg-luxury-black flex items-center justify-center text-gold-500">Loading...</div>;
    }

    return (
        <div className="bg-luxury-black min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center border-b border-gold-500/20 pb-8 mb-12">
                    <h1 className="text-4xl font-serif text-foreground">My Account</h1>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center text-sm text-foreground/70 hover:text-gold-500 uppercase tracking-widest transition-colors"
                    >
                        <LogOut size={16} className="mr-2" /> Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Sidebar */}
                    <div className="space-y-4">
                        <div className="p-6 border border-gold-500/30 bg-luxury-gray/30">
                            <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-4">
                                <UserIcon size={32} className="text-gold-500" />
                            </div>
                            <h2 className="font-serif text-xl border-b border-gold-500/20 pb-2 mb-2">{user?.email}</h2>
                            <p className="text-foreground/60 text-sm">Member since {new Date(user?.created_at || '').getFullYear()}</p>
                        </div>

                        <nav className="flex flex-col space-y-2">
                            <button className="text-left px-4 py-3 bg-gold-500 text-luxury-black font-semibold uppercase tracking-widest text-sm">
                                Order History
                            </button>
                            <button className="text-left px-4 py-3 text-foreground/80 hover:text-gold-500 hover:bg-gold-500/5 transition-colors uppercase tracking-widest text-sm">
                                Account Details
                            </button>
                            <button className="text-left px-4 py-3 text-foreground/80 hover:text-gold-500 hover:bg-gold-500/5 transition-colors uppercase tracking-widest text-sm">
                                Saved Addresses
                            </button>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-serif text-foreground mb-8">Recent Orders</h2>

                        {/* Mock Order History */}
                        <div className="space-y-6">
                            <div className="border border-gold-500/20 p-6">
                                <div className="flex justify-between items-center border-b border-gold-500/10 pb-4 mb-4">
                                    <div>
                                        <p className="text-foreground/50 text-sm uppercase tracking-wider mb-1">Order #PDL-84729</p>
                                        <p className="text-foreground text-sm">Placed on October 12, 2024</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gold-500 font-semibold mb-1">₹149.00</p>
                                        <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-xs uppercase tracking-wider">Delivered</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-luxury-gray">
                                            <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop" alt="Perfume" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-serif text-foreground">Berries Of Eden</p>
                                            <p className="text-foreground/60 text-sm">Qty: 1</p>
                                        </div>
                                    </div>
                                    <button className="text-sm border border-gold-500/50 px-4 py-2 hover:bg-gold-500 hover:text-luxury-black transition-colors uppercase tracking-widest">
                                        View Invoice
                                    </button>
                                </div>
                            </div>

                            <div className="text-center py-10 border border-gold-500/10 border-dashed">
                                <Package size={32} className="mx-auto text-gold-500/50 mb-4" />
                                <p className="text-foreground/60">No more recent orders.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
