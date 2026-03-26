import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    icon?: LucideIcon;
    href?: string;
}

export default function ServiceCard({ title, description, features, icon: Icon, href = '/reservations' }: ServiceCardProps) {
    return (
        <div className="group relative p-8 bg-zinc-900/50 border border-white/5 rounded-sm overflow-hidden transition-all duration-300 hover:bg-zinc-900 hover:border-gold/30">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 p-20 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-colors" />

            <div className="relative z-10">
                {Icon && (
                    <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-gold group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} />
                    </div>
                )}

                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {title}
                </h3>

                <p className="text-white/60 mb-6 leading-relaxed">
                    {description}
                </p>

                <ul className="space-y-3 mb-8">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                            <Check size={16} className="text-gold mt-1 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider hover:text-gold transition-colors"
                >
                    Book This Service <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}
