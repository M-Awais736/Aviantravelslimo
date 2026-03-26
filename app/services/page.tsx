import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Plane, Briefcase, Users, Wine, Map, Calendar } from 'lucide-react';

export const metadata = {
    title: "Premium Services | Avian Travels Limo",
    description: "Explore our range of luxury transportation services including airport transfers, corporate travel, and special events.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "Airport Transfers",
            description: "Reliable and punctual service to and from all major airports. We monitor flight status to ensure timely pickups.",
            features: ["Flight Monitoring", "Meet & Greet", "Luggage Assistance"],
            icon: Plane
        },
        {
            title: "Corporate Travel",
            description: "Executive transportation solutions designed for business professionals who value efficiency and comfort.",
            features: ["Professional Chauffeurs", "Privacy & Confidentiality", "Corporate Accounts"],
            icon: Briefcase
        },
        {
            title: "Group Transportation",
            description: "Luxury vans and buses for large groups. Perfect for conferences, outings, and coordinated travel.",
            features: ["Capacity up to 50+", "Coordination Support", "Comfortable Seating"],
            icon: Users
        },
        {
            title: "Special Occasions",
            description: "Add a touch of elegance to your weddings, galas, and celebrations with our premium fleet.",
            features: ["Red Carpet Service", "Decorated Vehicles", "Champagne Available"],
            icon: Wine
        },
        {
            title: "Sightseeing Tours",
            description: "Explore the city's landmarks in style. Customized routes and knowledgeable drivers.",
            features: ["Custom Itineraries", "Local Insights", "Flexible Scheduling"],
            icon: Map
        },
        {
            title: "Hourly Charters",
            description: "Ultimate flexibility for your day. Keep the vehicle as long as you need for multiple stops.",
            features: ["Unlimited Stops", "Your Schedule", "Wait & Return"],
            icon: Calendar
        },
    ];

    return (
        <div className="pt-20">
            <section className="py-16 md:py-20 bg-black">
                <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">Our <span className="text-gold">Services</span></h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
                        We offer a comprehensive suite of luxury transportation services tailored to meet your unique needs.
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
