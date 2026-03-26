import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <img src="/images/avian-logo-new.png" alt="Avian Travels Limo" className="h-10 w-auto object-contain" />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Premium chauffeured transportation services for corporate travel, special events, and airport transfers. Experience the journey of a lifetime.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-serif font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-white/60 hover:text-gold text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white/60 hover:text-gold text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/fleet" className="text-white/60 hover:text-gold text-sm transition-colors">
                                    Fleet
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white/60 hover:text-gold text-sm transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservations" className="text-white/60 hover:text-gold text-sm transition-colors">
                                    Book a Ride
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-serif font-semibold text-white">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin size={18} className="text-gold shrink-0" />
                                <span className="capitalize">3635 Eagle Rock Court<br />Woodbridge, VA 22192</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60 text-sm">
                                <Phone size={18} className="text-gold shrink-0" />
                                <a href="tel:+15717023338" className="hover:text-white transition-colors">571-702-3338</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/60 text-sm">
                                <Mail size={18} className="text-gold shrink-0" />
                                <a href="mailto:aviantravelslimo@gmail.com" className="hover:text-white transition-colors">aviantravelslimo@gmail.com</a>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-black transition-all" aria-label="Facebook">
                                <Facebook size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-black transition-all" aria-label="Instagram">
                                <Instagram size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Avian Travels Limo. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-white/40">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
