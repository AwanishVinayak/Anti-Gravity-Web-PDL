export default function ShippingPage() {
    return (
        <div className="min-h-screen bg-luxury-black text-foreground pt-32 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif text-gold-400 mb-8 text-center">Shipping & Returns</h1>
                <div className="bg-luxury-gray/30 border border-gold-500/20 p-8 rounded-lg shadow-lg space-y-6 text-foreground/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-gold-500 mb-4">Shipping Policy</h2>
                        <p className="mb-2">
                            We provide standard <strong>7-14 day shipping</strong> on all orders. Once your order has been dispatched, you will receive a tracking link via email.
                        </p>
                        <p>
                            A <strong>shipping fee of ₹100</strong> applies to all orders below ₹499. Free shipping is available on orders of ₹499 and above.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gold-500 mb-4">Returns & Refunds</h2>
                        <p>
                            Return is <strong>only possible if the product is damaged before unboxing</strong>.
                            To be eligible for a return, an <strong>unboxing video must be available clearly showing the damage upon opening the package</strong>.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-gold-500/20 mt-8 text-center">
                        <p className="text-lg">
                            For more queries, contact us at: <br />
                            <a href="mailto:parfumdeluned2c@gmail.com" className="text-gold-500 font-semibold hover:text-gold-400 transition-colors mt-2 inline-block">
                                parfumdeluned2c@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
