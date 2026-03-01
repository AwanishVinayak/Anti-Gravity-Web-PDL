"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { MessageCircle } from 'lucide-react';

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [shipping, setShipping] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleWhatsAppOrder = () => {
        if (cart.length === 0) return;
        setLoading(true);

        // Format order message
        let orderDetails = `*New Order - Parfum de Lune* \n\n`;
        orderDetails += `*Customer Details:*\n`;
        orderDetails += `Name: ${shipping.firstName} ${shipping.lastName}\n`;
        orderDetails += `Address: ${shipping.address}, ${shipping.city}, ${shipping.state} - ${shipping.zip}\n\n`;

        orderDetails += `*Order Items:*\n`;
        cart.forEach(item => {
            orderDetails += `- ${item.quantity}x ${item.name} (${item.size}) (₹${(item.price * item.quantity).toFixed(2)})\n`;
        });

        const shippingCost = cartTotal < 499 ? 100 : 0;
        const finalTotal = cartTotal + shippingCost;

        if (shippingCost > 0) {
            orderDetails += `\nShipping Fee: ₹${shippingCost.toFixed(2)}\n`;
        } else {
            orderDetails += `\nShipping Fee: Free\n`;
        }

        orderDetails += `\n*Total Order Value: ₹${finalTotal.toFixed(2)}*\n\n`;
        orderDetails += `I would like to order the above items please.`;

        // Encode for URL
        const encodedMessage = encodeURIComponent(orderDetails);
        const whatsappNumber = "917743089718"; // Real business number
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');

        // Clear cart and redirect to dashboard
        clearCart();
        router.push('/dashboard');
        setLoading(false);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-luxury-black">
                <h2 className="text-2xl font-serif text-foreground mb-4">Cart is empty</h2>
                <button onClick={() => router.push('/shop')} className="text-gold-500 uppercase text-sm tracking-widest">
                    Return to Shop
                </button>
            </div>
        );
    }

    return (
        <div className="bg-luxury-black min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-serif text-center text-foreground mb-12">Complete Order</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Shipping Form */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-serif text-gold-500 border-b border-gold-500/20 pb-4">Shipping Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={shipping.firstName}
                                onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
                                className="w-full bg-transparent border border-gold-500/30 p-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={shipping.lastName}
                                onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
                                className="w-full bg-transparent border border-gold-500/30 p-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Address"
                            value={shipping.address}
                            onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                            className="w-full bg-transparent border border-gold-500/30 p-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={shipping.city}
                            onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                            className="w-full bg-transparent border border-gold-500/30 p-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="State/Province"
                                value={shipping.state}
                                onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
                                className="w-full bg-transparent border border-gold-500/30 p-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Postal Code"
                                value={shipping.zip}
                                onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                                className="w-full bg-transparent border border-gold-500/30 p-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Order Summary & Payment */}
                    <div className="bg-luxury-gray/50 p-8 border border-gold-500/20 h-fit">
                        <h2 className="text-xl font-serif text-gold-500 border-b border-gold-500/20 pb-4 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-foreground/80">{item.quantity}x {item.name}</span>
                                    <span className="text-foreground">₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gold-500/20 pt-4 mb-4">
                            <div className="flex justify-between text-sm text-foreground/80 mb-2">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-foreground/80 mb-4">
                                <span>Shipping</span>
                                <span>{cartTotal < 499 ? '₹100.00' : 'Free'}</span>
                            </div>
                            <div className="flex justify-between text-lg font-serif text-foreground pt-4 border-t border-gold-500/20 mb-8">
                                <span>Total</span>
                                <span>₹{(cartTotal + (cartTotal < 499 ? 100 : 0)).toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleWhatsAppOrder}
                            disabled={loading || !shipping.firstName || !shipping.address}
                            className="w-full bg-[#25D366] text-white py-4 uppercase font-semibold tracking-widest flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors disabled:opacity-50"
                        >
                            <MessageCircle size={20} /> {loading ? 'Processing...' : 'Order via WhatsApp'}
                        </button>

                        {!shipping.firstName || !shipping.address ? (
                            <p className="text-center text-xs text-red-400 mt-4 tracking-wide">
                                Please fill out the shipping details first
                            </p>
                        ) : null}
                    </div>

                </div>
            </div>
        </div>
    );
}
