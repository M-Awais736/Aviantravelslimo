import Hero from "@/components/Hero";
import FleetCard from "@/components/FleetCard";
import Link from "next/link";
import { Plane, Briefcase, Users, Map, GlassWater, ArrowRight } from "lucide-react";

export default function Home() {
  const featuredFleet = [
    {
      name: "Luxury SUV",
      category: "1-7 PASSENGERS",
      description: "Our large luxury SUVs offer 7 passenger seating, plus features like a flat-screen monitor, special lighting, leather seats, and a sunroof.",
      passengers: 7,
      luggage: 6,
      image: "/images/luxury-suv.jpg"
    },
    {
      name: "Limousine",
      category: "1-8 PASSENGERS",
      description: "The ultimate in luxury and style. Features leather seating, mood lighting, bar area, and privacy partition. Perfect for weddings and proms.",
      passengers: 8,
      luggage: 4,
      image: "/images/limousine.jpg"
    },
    {
      name: "Coach Bus",
      category: "53 PASSENGER",
      description: "Full-size luxury coaches for up to 57 passengers and luggage. All vehicles are equipped with cellular phones, tinted windows, and a television unit.",
      passengers: 56,
      luggage: 50,
      image: "/images/coach.jpg"
    }
  ];

  const services = [
    {
      title: "Airport and Private Aviation",
      desc: "Transport services to and from the airport",
      icon: Plane
    },
    {
      title: "Corporate Travel",
      desc: "Secure transit en route to your business",
      icon: Briefcase
    },
    {
      title: "Meetings and Events",
      desc: "Expedient transportation to your next meeting or event.",
      icon: Users
    },
    {
      title: "Sightseeing Service",
      desc: "Cozy and personalized accommodation while traveling",
      icon: Map
    },
    {
      title: "Special Occasions",
      desc: "Exclusive services for special occasions",
      icon: GlassWater
    },
    {
      title: "View More Services",
      desc: "Call for a vehicle more luxurious than a standard taxi.",
      icon: ArrowRight
    }
  ];

  return (
    <>
      <Hero />

      {/* Vehicles We Provide Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-white mb-12 md:mb-16">
            Vehicles We <span className="text-gold">Provide</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredFleet.map((vehicle, idx) => (
              <FleetCard key={idx} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="py-16 md:py-24 bg-zinc-900 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Introducing to You!</span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
              Avian Travels Limo
            </h2>
            <h3 className="text-lg md:text-xl text-white/80 font-medium mb-6 md:mb-8">
              Luxury Service in Springfield, Virginia
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-white/60 leading-relaxed mb-8 md:mb-12">
              There are many ways to get from point A to B. But what about one that gives some gravitas? We go above and beyond the rideshare programs and traditional taxi services. Preserve your time and attention with our professional chauffeur and Limo Service in Springfield, Virginia. We are committed to providing an exceptional transportation service that others simply cannot provide. Avian Travels Limo is an established leader in specialty transportation. We can guarantee you a safe, affluent, and discreet ride aboard our luxury vehicles.
            </p>
            <Link href="/about" className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-white/10 text-white font-semibold text-sm md:text-base uppercase tracking-wide hover:bg-gold hover:text-black transition-colors rounded-sm">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
              Services We <span className="text-gold">Offer</span>
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
              Preserve your time and attention with expedient and luxurious transportation with vehicles that can do what you want them to do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group p-6 md:p-8 bg-zinc-900/50 border border-white/5 hover:border-gold/30 transition-all rounded-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-full flex items-center justify-center text-gold mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2 md:mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-white/60 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="text-xs font-bold text-white uppercase tracking-widest border-b border-gold/50 pb-1 hover:text-gold transition-colors">
                  Click Here
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
