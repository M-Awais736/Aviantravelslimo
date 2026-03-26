import { Scale, AlertCircle, FileText, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: "Terms of Service | Avian Travels Limo",
    description: "Read the terms and conditions for using Avian Travels Limo services.",
};

export default function TermsPage() {
    return (
        <div className="pt-20">
            <section className="py-16 md:py-20 bg-zinc-900 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">Terms of <span className="text-gold">Service</span></h1>
                        <p className="text-white/60 text-base md:text-lg">
                            Last updated: February 2026
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold/10 rounded-lg">
                                    <Scale className="text-gold" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Acceptance of Terms</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p>By accessing or using Avian Travels Limo's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                                        <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold/10 rounded-lg">
                                    <FileText className="text-gold" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Booking & Reservations</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p><strong className="text-white">Reservation Confirmation:</strong> All bookings are subject to availability and confirmation. We will confirm your reservation via email or phone.</p>
                                        <p><strong className="text-white">Payment:</strong> Payment is required at the time of booking or as agreed upon. We accept major credit cards and other payment methods as specified.</p>
                                        <p><strong className="text-white">Cancellation Policy:</strong> Cancellations must be made at least 24 hours in advance for a full refund. Cancellations within 24 hours may incur charges.</p>
                                        <p><strong className="text-white">No-Show Policy:</strong> Failure to show up for a scheduled reservation will result in full charges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold/10 rounded-lg">
                                    <ShieldCheck className="text-gold" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Service Standards</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p>We strive to provide the highest quality transportation services. Our commitments include:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Professional, licensed, and background-checked chauffeurs</li>
                                            <li>Well-maintained, clean, and safe vehicles</li>
                                            <li>Punctual pickups and drop-offs</li>
                                            <li>Courteous and respectful service</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold/10 rounded-lg">
                                    <AlertCircle className="text-gold" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Passenger Responsibilities</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p>Passengers agree to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Provide accurate pickup and drop-off information</li>
                                            <li>Be ready at the scheduled pickup time</li>
                                            <li>Treat the vehicle and chauffeur with respect</li>
                                            <li>Follow all safety instructions</li>
                                            <li>Not engage in illegal activities during service</li>
                                            <li>Pay for any damages caused to the vehicle</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">Limitation of Liability</h2>
                            <div className="text-white/70 space-y-3">
                                <p>Avian Travels Limo shall not be liable for:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Delays caused by traffic, weather, or circumstances beyond our control</li>
                                    <li>Loss or damage to personal belongings left in vehicles</li>
                                    <li>Indirect, incidental, or consequential damages</li>
                                </ul>
                                <p className="mt-4">Our total liability shall not exceed the amount paid for the service in question.</p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">Dispute Resolution</h2>
                            <div className="text-white/70 space-y-3">
                                <p>Any disputes arising from these terms or our services shall be resolved through good faith negotiations. If resolution cannot be reached, disputes shall be subject to binding arbitration in accordance with the laws of Virginia.</p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">Contact Information</h2>
                            <div className="text-white/70">
                                <p>For questions about these Terms of Service, please contact us:</p>
                                <div className="mt-4 space-y-2">
                                    <p>Email: <a href="mailto:aviantravelslimo@gmail.com" className="text-gold hover:underline">aviantravelslimo@gmail.com</a></p>
                                    <p>Phone: <a href="tel:+15717023338" className="text-gold hover:underline">571-702-3338</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
