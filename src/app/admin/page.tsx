"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { Package, Users, DollarSign, Activity } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // In a real app, you would check user role in Supabase or metadata
        // For demo purposes, we will just simulate an admin check
        const checkAdmin = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/login');
            } else {
                // Assume verified via backend in reality
                setIsAdmin(true);
            }
            setLoading(false);
        };
        checkAdmin();
    }, [router]);

    if (loading) {
        return <div className="min-h-screen bg-luxury-black flex items-center justify-center text-gold-500">Authenticating...</div>;
    }

    if (!isAdmin) {
        return <div className="min-h-screen bg-luxury-black flex items-center justify-center text-red-500">Access Denied</div>;
    }

    return (
        <div className="bg-luxury-black min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center border-b border-gold-500/20 pb-8 mb-12">
                    <div>
                        <h1 className="text-4xl font-serif text-foreground mb-2">Admin Center</h1>
                        <p className="text-gold-500 uppercase tracking-widest text-xs">Parfum de Lune Management</p>
                    </div>
                    <Link
                        href="/admin/products/new"
                        className="bg-gold-500 text-luxury-black px-6 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gold-400 transition-colors"
                    >
                        + Add Product
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-luxury-gray/30 p-6 border border-gold-500/20">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-foreground/60 text-sm uppercase tracking-wider mb-1">Total Revenue</p>
                                <h3 className="text-3xl font-serif text-gold-500">₹24,580.00</h3>
                            </div>
                            <div className="p-3 bg-gold-500/10 rounded-full">
                                <DollarSign size={20} className="text-gold-500" />
                            </div>
                        </div>
                        <p className="text-green-500 text-sm flex items-center"><Activity size={14} className="mr-1" /> +12% this month</p>
                    </div>

                    <div className="bg-luxury-gray/30 p-6 border border-gold-500/20">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-foreground/60 text-sm uppercase tracking-wider mb-1">Total Orders</p>
                                <h3 className="text-3xl font-serif text-foreground">156</h3>
                            </div>
                            <div className="p-3 bg-gold-500/10 rounded-full">
                                <Package size={20} className="text-gold-500" />
                            </div>
                        </div>
                        <p className="text-green-500 text-sm flex items-center"><Activity size={14} className="mr-1" /> +5% this month</p>
                    </div>

                    <div className="bg-luxury-gray/30 p-6 border border-gold-500/20">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-foreground/60 text-sm uppercase tracking-wider mb-1">Active Customers</p>
                                <h3 className="text-3xl font-serif text-foreground">2,845</h3>
                            </div>
                            <div className="p-3 bg-gold-500/10 rounded-full">
                                <Users size={20} className="text-gold-500" />
                            </div>
                        </div>
                        <p className="text-foreground/50 text-sm">Registered users</p>
                    </div>
                </div>

                {/* Recent Products Table */}
                <div className="bg-luxury-gray/30 border border-gold-500/20 overflow-hidden">
                    <div className="p-6 border-b border-gold-500/20 flex justify-between items-center">
                        <h2 className="text-xl font-serif text-foreground">Product Inventory</h2>
                        <button className="text-sm text-gold-500 hover:text-gold-400 uppercase tracking-widest">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-luxury-black/50 text-foreground/60 text-xs uppercase tracking-widest">
                                    <th className="p-4 border-b border-gold-500/10">Product</th>
                                    <th className="p-4 border-b border-gold-500/10">Category</th>
                                    <th className="p-4 border-b border-gold-500/10">Price</th>
                                    <th className="p-4 border-b border-gold-500/10">Stock</th>
                                    <th className="p-4 border-b border-gold-500/10 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-foreground">
                                <tr className="border-b border-gold-500/10 hover:bg-gold-500/5 transition-colors">
                                    <td className="p-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-luxury-gray"><img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop" className="w-full h-full object-cover" /></div>
                                        <span className="font-medium">Berries Of Eden</span>
                                    </td>
                                    <td className="p-4">Floral, Sweet, Fruity, Fresh</td>
                                    <td className="p-4">₹149.00</td>
                                    <td className="p-4 text-green-500">45 In Stock</td>
                                    <td className="p-4 text-right space-x-4">
                                        <button className="text-gold-500 hover:underline">Edit</button>
                                        <button className="text-red-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                                <tr className="border-b border-gold-500/10 hover:bg-gold-500/5 transition-colors">
                                    <td className="p-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-luxury-gray"><img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2053&auto=format&fit=crop" className="w-full h-full object-cover" /></div>
                                        <span className="font-medium">Ruh-de-Moon</span>
                                    </td>
                                    <td className="p-4">Sweet, Spicy, Warm</td>
                                    <td className="p-4">₹199.00</td>
                                    <td className="p-4 text-yellow-500">12 Low Stock</td>
                                    <td className="p-4 text-right space-x-4">
                                        <button className="text-gold-500 hover:underline">Edit</button>
                                        <button className="text-red-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
