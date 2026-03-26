'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-20">
            <section className="py-16 md:py-20 bg-black min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">Get in <span className="text-gold">Touch</span></h1>
                        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
                            We are available 24/7 to assist you. Reach out to us for enquiries, custom quotes, or reservation support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-zinc-900 p-8 rounded-sm border border-white/5 hover:border-gold/30 transition-colors">
                                <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-black rounded-lg text-gold">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Office Location</h4>
                                            <p className="text-white/60 capitalize">3635 Eagle Rock Court<br />Woodbridge, VA 22192</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-black rounded-lg text-gold">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Phone</h4>
                                            <p className="text-white/60">Main: 571-702-3338</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-black rounded-lg text-gold">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Email</h4>
                                            <p className="text-white/60">aviantravelslimo@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900 p-8 rounded-sm border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Areas We Serve</h3>
                                <p className="text-white/60">
                                    Proudly serving Washington D.C., Maryland, and Virginia (DMV area). Available for long-distance travel upon request.
                                </p>
                            </div>
                        </div>

                        {/* Message Form*/}
                        <div className="bg-zinc-900 p-8 md:p-10 rounded-sm border border-white/5 relative">
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h3>

                            {submitStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-10 animate-fade-in text-center">
                                    <CheckCircle size={64} className="text-gold mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-white/60 mb-6">We will get back to you shortly.</p>
                                    <button onClick={() => setSubmitStatus('idle')} className="text-gold hover:text-white underline text-sm">Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="text-xs uppercase tracking-wider text-white/50 font-bold block mb-2">Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs uppercase tracking-wider text-white/50 font-bold block mb-2">Email</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            type="email"
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs uppercase tracking-wider text-white/50 font-bold block mb-2">Subject</label>
                                        <input
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs uppercase tracking-wider text-white/50 font-bold block mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold focus:outline-none transition-colors rounded-sm"
                                        ></textarea>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="flex items-center gap-2 text-red-400 text-sm">
                                            <AlertCircle size={16} />
                                            <span>Something went wrong. Please try again.</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-white/10 text-white font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
