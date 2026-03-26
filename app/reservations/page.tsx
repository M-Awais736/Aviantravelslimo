import { Suspense } from 'react';
import BookingForm from "@/components/BookingForm";

export const metadata = {
    title: "Book a Ride | Avian Travels Limo",
    description: "Reserve your luxury transportation online. Easy booking for airport transfers, corporate travel, and special events.",
};

export default function ReservationsPage() {
    return (
        <div className="pt-20">
            <section className="py-16 md:py-20 bg-black min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10 md:mb-12">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
                                Reserve Your <span className="text-gold">Chauffeur</span>
                            </h1>
                            <p className="text-white/60 text-base md:text-lg">
                                Complete the form below to request a reservation. Our team will review your details and confirm availability instantly.
                            </p>
                        </div>

                        <Suspense fallback={<div className="text-white text-center">Loading form...</div>}>
                            <BookingForm />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
