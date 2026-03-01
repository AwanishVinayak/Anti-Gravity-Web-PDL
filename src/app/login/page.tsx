"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-luxury-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-luxury-gray/30 p-10 border border-gold-500/20">
                <div>
                    <h2 className="text-center text-3xl font-serif text-foreground">Sign In</h2>
                    <p className="mt-2 text-center text-sm text-foreground/60 uppercase tracking-widest">
                        To Your Account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {error && <div className="text-red-500 text-sm text-center bg-red-500/10 py-2">{error}</div>}

                    <div className="space-y-4">
                        <div>
                            <label className="sr-only">Email address</label>
                            <input
                                type="email"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-gold-500/30 bg-transparent text-foreground placeholder-foreground/50 focus:outline-none focus:border-gold-500 sm:text-sm transition-colors"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="sr-only">Password</label>
                            <input
                                type="password"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-gold-500/30 bg-transparent text-foreground placeholder-foreground/50 focus:outline-none focus:border-gold-500 sm:text-sm transition-colors"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 rounded bg-transparent border-gold-500/50" />
                            <label className="ml-2 block text-foreground/80">Remember me</label>
                        </div>
                        <div className="text-gold-500 hover:text-gold-400">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold uppercase tracking-widest text-luxury-black bg-gold-500 hover:bg-gold-400 focus:outline-none disabled:opacity-50 transition-colors"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-foreground/60">
                        Don't have an account?{' '}
                        <Link href="/register" className="text-gold-500 hover:text-gold-400 font-medium whitespace-nowrap">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
