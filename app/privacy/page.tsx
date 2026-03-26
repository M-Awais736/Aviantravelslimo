import { Shield, Eye, Lock, FileText } from 'lucide-react';

export const metadata = {
    title: "Privacy Policy | Avian Travels Limo",
    description: "Learn how Avian Travels Limo collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="pt-20">
            <section className="py-16 md:py-20 bg-zinc-900 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">Privacy <span className="text-gold">Policy</span></h1>
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
                                    <Eye className="text-gold" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Information We Collect</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p><strong className="text-white">Personal Information:</strong> When you book a ride or contact us, we collect your name, email address, phone number, pickup/dropoff locations, and payment information.</p>
                                        <p><strong className="text-white">Usage Data:</strong> We automatically collect information about your device, browser type, IP address, and how you interact with our website.</p>
                                        <p><strong className="text-white">Cookies:</strong> We use cookies and similar technologies to enhance your experience. You can control cookies through our consent banner and browser settings.</p>
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
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">How We Use Your Information</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p>We use your information to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Process and fulfill your reservation requests</li>
                                            <li>Communicate with you about your bookings and our services</li>
                                            <li>Improve our website and customer experience</li>
                                            <li>Send promotional communications (only with your consent)</li>
                                            <li>Comply with legal obligations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold/10 rounded-lg">
                                    <Lock className="text-gold" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Data Protection & Security</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.</p>
                                        <p>Your payment information is processed securely through encrypted channels and we do not store credit card details on our servers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gold/10 rounded-lg">
                                    <Shield className="text-gold" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Your Rights</h2>
                                    <div className="text-white/70 space-y-3">
                                        <p>You have the right to:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Access the personal information we hold about you</li>
                                            <li>Request correction of inaccurate information</li>
                                            <li>Request deletion of your personal data</li>
                                            <li>Object to processing of your information</li>
                                            <li>Withdraw consent at any time</li>
                                        </ul>
                                        <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:aviantravelslimo@gmail.com" className="text-gold hover:underline">aviantravelslimo@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">Cookies & Tracking</h2>
                            <div className="text-white/70 space-y-3">
                                <p><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly (e.g., session management, security).</p>
                                <p><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our site (only with your consent).</p>
                                <p><strong className="text-white">Marketing Cookies:</strong> Used to deliver personalized advertisements (only with your consent).</p>
                                <p className="mt-4">You can manage your cookie preferences through the banner that appears on your first visit or by adjusting your browser settings.</p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">Contact Us</h2>
                            <div className="text-white/70">
                                <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
