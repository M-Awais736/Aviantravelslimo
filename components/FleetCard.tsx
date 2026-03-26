import Link from 'next/link';
import { User, Briefcase, Shield } from 'lucide-react';
import Image from 'next/image';

interface FleetCardProps {
    name: string;
    category: string;
    description: string;
    passengers: number;
    luggage: number;
    image?: string;
}

export default function FleetCard({ name, category, description, passengers, luggage, image }: FleetCardProps) {
    return (
        <div className="group bg-zinc-900 rounded-sm overflow-hidden border border-white/5 hover:border-gold/50 transition-colors">
            <div className="h-64 bg-zinc-800 relative overflow-hidden flex items-center justify-center">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                {image ? (
                    <div className="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
                ) : (
                    <span className="text-white/20 text-4xl font-serif italic z-0">Vehicle Image</span>
                )}

                <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gold text-black text-xs font-bold uppercase tracking-wide rounded-sm mb-2 inline-block">
                        {category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{name}</h3>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-6 mb-6 text-white/60 text-sm border-b border-white/5 pb-6">
                    <div className="flex items-center gap-2" title="Passengers">
                        <User size={16} className="text-gold" />
                        <span>Up to {passengers}</span>
                    </div>
                    <div className="flex items-center gap-2" title="Luggage Capacity">
                        <Briefcase size={16} className="text-gold" />
                        <span>{luggage} Bags</span>
                    </div>
                </div>

                <p className="text-white/70 mb-8 line-clamp-3">
                    {description}
                </p>

                <div className="grid grid-cols-3 gap-2">
                    <Link
                        href="/fleet"
                        className="py-2 bg-transparent border border-white/20 text-center text-white/80 font-semibold uppercase tracking-wide text-xs hover:bg-white hover:text-black transition-colors rounded-sm flex items-center justify-center"
                    >
                        View
                    </Link>
                    <Link
                        href="/reservations"
                        className="py-2 bg-gold text-center text-black font-bold uppercase tracking-wide text-xs hover:bg-gold-light transition-colors rounded-sm flex items-center justify-center"
                    >
                        Book
                    </Link>
                    <a
                        href="tel:+15717023338"
                        className="py-2 bg-zinc-800 text-center text-white font-semibold uppercase tracking-wide text-xs hover:bg-zinc-700 transition-colors rounded-sm flex items-center justify-center"
                    >
                        Call
                    </a>
                </div>
            </div>
        </div>
    );
}
