import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-luxury-black border-t border-gold-500/20 text-foreground pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="space-y-4">
                        <Image
                            src="/images/logo-transparent.png"
                            alt="Parfum de Lune"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Experience the essence of luxury. Crafted by master perfumers for those who appreciate the extraordinary.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-wider mb-4 text-gold-400">Shop</h4>
                        <ul className="space-y-2">
                            <li><Link href="/collections" className="text-sm text-foreground/70 hover:text-gold-500 transition-colors">Floral Collection</Link></li>
                            <li><Link href="/collections" className="text-sm text-foreground/70 hover:text-gold-500 transition-colors">Fresh Collection</Link></li>
                            <li><Link href="/collections" className="text-sm text-foreground/70 hover:text-gold-500 transition-colors">Classic Collection</Link></li>
                            <li><Link href="/collections" className="text-sm text-foreground/70 hover:text-gold-500 transition-colors">Discovery Sets</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-wider mb-4 text-gold-400">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-sm text-foreground/70 hover:text-gold-500 transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="text-sm text-foreground/70 hover:text-gold-500 transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="text-sm text-foreground/70 hover:text-gold-500 transition-colors">Shipping & Returns</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-wider mb-4 text-gold-400">Newsletter</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border border-gold-500/30 text-foreground px-4 py-2 w-full focus:outline-none focus:border-gold-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-gold-500 text-luxury-black px-4 py-2 uppercase text-sm font-semibold hover:bg-gold-400 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="flex space-x-4 mt-6">
                            <a href="https://www.instagram.com/parfumdelune.in/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gold-500/10 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Parfum de Lune. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
