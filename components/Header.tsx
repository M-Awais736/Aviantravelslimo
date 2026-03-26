'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils'; // We might need to create this util if it doesn't exist, but standard templates usually have it. Or I'll inline it.


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Fleet', href: '/fleet' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                isScrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img src="/images/avian-logo-new.png" alt="Avian Travels Limo" className="h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 hover:text-gold transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a href="tel:+15717023338" className="flex items-center gap-2 text-white/90 hover:text-gold transition-colors">
                        <Phone size={18} />
                        <span className="text-sm font-medium">571-702-3338</span>
                    </a>

                    <Link
                        href="/reservations"
                        className="px-6 py-2.5 bg-gold text-black font-semibold text-sm uppercase tracking-wide rounded-sm hover:bg-gold-light transition-colors"
                    >
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-gold transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {/* Mobile Navigation Overlay */}
            <div
                className={cn(
                    'fixed inset-0 top-0 left-0 w-screen h-screen bg-black z-[100] transform transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-6 px-6 overflow-y-auto',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {/* Close Button Positioned Top Right inside the overlay */}
                <button
                    className="absolute top-6 right-6 text-white hover:text-gold transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={32} />
                </button>

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-serif font-medium text-white hover:text-gold transition-colors text-center py-3 px-6"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/reservations"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 px-10 py-4 bg-gold text-black font-bold text-lg uppercase tracking-wide rounded-sm hover:bg-gold-light transition-colors"
                >
                    Book Your Ride
                </Link>
            </div>
        </header>
    );
}
