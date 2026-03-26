import FleetCard from "@/components/FleetCard";

export const metadata = {
    title: "Our Fleet | Avian Travels Limo",
    description: "Browse our extensive fleet of luxury sedans, SUVs, sprinters, and buses available for your transportation needs.",
};

export default function FleetPage() {
    const fleet = [
        {
            name: "Luxury SUV",
            category: "SUV",
            description: "Spacious and powerful, our SUVs provide extra comfort and safety, ideal for small groups and families.",
            passengers: 7,
            luggage: 6,
            image: "/images/luxury-suv.jpg"
        },
        {
            name: "Limousine",
            category: "Limousine",
            description: "The epitome of luxury and style. Perfect for weddings, proms, and special occasions.",
            passengers: 8, // Estimated, standard limo
            luggage: 4,
            image: "/images/limousine.jpg"
        },
        {
            name: "Coach",
            category: "Coach",
            description: "The ultimate solution for large group travel. Equipped with restroom, entertainment systems, and reclining seats.",
            passengers: 56,
            luggage: 50,
            image: "/images/coach.jpg"
        }
    ];

    return (
        <div className="pt-20">
            <section className="py-16 md:py-20 bg-black min-h-screen">
                <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">World-Class <span className="text-gold">Fleet</span></h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
                        Meticulously maintained late-model vehicles designed for your safety and comfort.
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {fleet.map((vehicle, idx) => (
                            <FleetCard key={idx} {...vehicle} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
