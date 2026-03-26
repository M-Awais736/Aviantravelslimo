'use client';

import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';

type CookiePreference = 'accepted' | 'denied' | 'essential' | null;

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showEssentialInfo, setShowEssentialInfo] = useState(false);
    const [showAcceptInfo, setShowAcceptInfo] = useState(false);
    const [showDenyInfo, setShowDenyInfo] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const savedPreference = localStorage.getItem('cookieConsent');
        if (!savedPreference) {
            // Small delay to avoid flash on page load
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleConsent = (preference: CookiePreference) => {
        if (preference) {
            localStorage.setItem('cookieConsent', preference);
            localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());

            // Based on user choice, enable or disable tracking
            if (preference === 'accepted') {
                // Enable all tracking/analytics
                enableAnalytics();
            } else if (preference === 'denied') {
                // Disable all non-essential tracking
                disableAnalytics();
            } else if (preference === 'essential') {
                // Only essential cookies enabled
                disableAnalytics();
            }
        }
        setShowBanner(false);
    };

    const enableAnalytics = () => {
        // Enable analytics tracking here
        // For example: window.gtag, window.fbq, etc.
        console.log('Analytics enabled');
    };

    const disableAnalytics = () => {
        // Disable analytics tracking here
        console.log('Analytics disabled');
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Cookie Consent Banner */}
            <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <div className="bg-zinc-900 border border-gold/20 rounded-lg shadow-2xl max-w-2xl w-full p-6 md:p-8 relative">
                    <h2 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                        <span>🍪</span> Cookie Preferences
                    </h2>

                    <p className="text-white/70 text-sm md:text-base mb-6">
                        We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. Choose your preferences below:
                    </p>

                    <div className="space-y-4 mb-6">
                        {/* Accept All */}
                        <button
                            onClick={() => handleConsent('accepted')}
                            className="w-full px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors flex items-center justify-between group"
                        >
                            <span>Accept All Cookies</span>
                            <div
                                className="relative p-2 -mr-2"
                                onMouseEnter={() => setShowAcceptInfo(true)}
                                onMouseLeave={() => setShowAcceptInfo(false)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAcceptInfo(!showAcceptInfo);
                                }}
                            >
                                <Info size={18} className="text-black/70 group-hover:text-black" />
                                {showAcceptInfo && (
                                    <div className="absolute right-0 bottom-full mb-2 w-64 bg-black border border-gold/30 p-3 rounded-lg text-xs text-white/80 text-left shadow-xl z-50" onClick={(e) => e.stopPropagation()}>
                                        Allows all cookies including analytics and marketing. This helps us improve our services and show you relevant content.
                                    </div>
                                )}
                            </div>
                        </button>

                        {/* Essential Only */}
                        <button
                            onClick={() => handleConsent('essential')}
                            className="w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-between group"
                        >
                            <span>Essential Cookies Only</span>
                            <div
                                className="relative p-2 -mr-2"
                                onMouseEnter={() => setShowEssentialInfo(true)}
                                onMouseLeave={() => setShowEssentialInfo(false)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowEssentialInfo(!showEssentialInfo);
                                }}
                            >
                                <Info size={18} className="text-white/70 group-hover:text-white" />
                                {showEssentialInfo && (
                                    <div className="absolute right-0 bottom-full mb-2 w-64 bg-black border border-gold/30 p-3 rounded-lg text-xs text-white/80 text-left shadow-xl z-50" onClick={(e) => e.stopPropagation()}>
                                        <p className="font-semibold mb-1">Essential cookies include:</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Session management</li>
                                            <li>Security features</li>
                                            <li>Basic site functionality</li>
                                        </ul>
                                        <p className="mt-2">No tracking or analytics data will be collected.</p>
                                    </div>
                                )}
                            </div>
                        </button>

                        {/* Deny All */}
                        <button
                            onClick={() => handleConsent('denied')}
                            className="w-full px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between group"
                        >
                            <span>Deny All Cookies</span>
                            <div
                                className="relative p-2 -mr-2"
                                onMouseEnter={() => setShowDenyInfo(true)}
                                onMouseLeave={() => setShowDenyInfo(false)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowDenyInfo(!showDenyInfo);
                                }}
                            >
                                <Info size={18} className="text-white/70 group-hover:text-white" />
                                {showDenyInfo && (
                                    <div className="absolute right-0 bottom-full mb-2 w-64 bg-black border border-gold/30 p-3 rounded-lg text-xs text-white/80 text-left shadow-xl z-50" onClick={(e) => e.stopPropagation()}>
                                        Disables all cookies including essential ones. This may impact site functionality and your experience. No data will be collected.
                                    </div>
                                )}
                            </div>
                        </button>
                    </div>

                    <p className="text-xs text-white/50 text-center">
                        By continuing to use our site, you agree to our{' '}
                        <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>
                        {' '}and{' '}
                        <a href="/terms" className="text-gold hover:underline">Terms of Service</a>
                    </p>
                </div>
            </div>
        </>
    );
}
