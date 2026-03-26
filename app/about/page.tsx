import { Shield, Clock, Award } from 'lucide-react';

export const metadata = {
    title: "About Us | Avian Travels Limo",
    description: "Learn about Avian Travels Limo, the premier luxury transportation service in the DC area. Committed to excellence, safety, and reliability.",
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-zinc-900 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">Our <span className="text-gold">Legacy</span></h1>
                    <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        Avian Travels Limo was founded on a simple premise: to provide a transportation experience that transcends the ordinary. We don't just move people; we curate journeys defined by elegance, comfort, and absolute reliability.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
                        <div className="space-y-6">
                            <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center text-gold border border-white/5">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white">Uncompromising Safety</h3>
                            <p className="text-white/60">
                                Your safety is our paramount concern. Our fleet is rigorously maintained, and our chauffeurs are vetted professionals with extensive training.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center text-gold border border-white/5">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white">Punctuality Promise</h3>
                            <p className="text-white/60">
                                We understand the value of your time. We arrive early, track flights in real-time, and ensure you reach your destination on schedule, every time.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-full flex items-center justify-center text-gold border border-white/5">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white">Excellence in Service</h3>
                            <p className="text-white/60">
                                From the moment you book until you reach your destination, our dedicated team provides personalized service to meet your specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 md:py-24 bg-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-black p-8 md:p-12 border border-white/5 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-20 md:p-32 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 md:mb-6 text-center">Our Mission</h2>
                            <p className="text-white/70 text-center text-base md:text-lg leading-relaxed italic">
                                "To set the gold standard in luxury transportation by delivering consistent, high-quality service that exceeds client expectations through innovation, professionalism, and attention to detail."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
