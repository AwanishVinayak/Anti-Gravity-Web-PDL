export default function ContactPage() {
    return (
        <div className="min-h-screen bg-luxury-black text-foreground pt-32 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-serif text-gold-400 mb-8">Contact Us</h1>
                <div className="bg-luxury-gray/30 border border-gold-500/20 p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        We would love to hear from you. For any inquiries, please contact us at:
                    </p>
                    <a
                        href="mailto:parfumdeluned2c@gmail.com"
                        className="text-2xl font-semibold text-gold-500 hover:text-gold-400 transition-colors"
                    >
                        parfumdeluned2c@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
