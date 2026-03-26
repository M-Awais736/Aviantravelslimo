'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle } from 'lucide-react';
import { rideInfoSchema, contactSchema, RideInfoData, ContactData } from '@/lib/schemas';
import { FLEET_OPTIONS } from '@/lib/data';

// Steps
import StepProgress from './booking/StepProgress';
import RideInfoStep from './booking/RideInfoStep';
import VehicleSelectionStep from './booking/VehicleSelectionStep';
import ContactDetailsStep from './booking/ContactDetailsStep';

export default function BookingForm() {
    const searchParams = useSearchParams();
    const initialVehicle = searchParams.get('vehicle');

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
    const [rideData, setRideData] = useState<RideInfoData | null>(null);
    const [contactData, setContactData] = useState<ContactData | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // If URL has vehicle param, we can store it, but wait until step 2 to select/highlight
    useEffect(() => {
        if (initialVehicle) {
            // Optional: Auto-select or highlight logic
        }
    }, [initialVehicle]);

    // --- FORM HOOKS ---
    const rideForm = useForm<RideInfoData>({
        resolver: zodResolver(rideInfoSchema),
        defaultValues: {
            serviceType: 'From Airport',
            passengers: 1,
            luggage: 0,
            pickupDate: new Date().toISOString().split('T')[0],
            pickupTime: '12:00',
        }
    });

    const contactForm = useForm<ContactData>({
        resolver: zodResolver(contactSchema),
    });

    // --- HANDLERS ---
    const onStep1Submit = (data: RideInfoData) => {
        setRideData(data);
        setCurrentStep(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleVehicleSelect = (vehicleId: string) => {
        setSelectedVehicle(vehicleId);
        setCurrentStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onFinalSubmit = async (data: ContactData) => {
        setContactData(data);
        setIsSubmitting(true);

        try {
            const bookingPayload = {
                ...rideData,
                vehicle: selectedVehicle,
                ...data
            };

            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingPayload),
            });

            const responseData = await response.json().catch(() => ({}));

            if (!response.ok) {
                console.error('API Error Response:', responseData);
                // Try to extract server error message instead of generic alert
                throw new Error(responseData.message || 'Failed to submit booking');
            }

            if (responseData.confirmationCode) {
                setConfirmationCode(responseData.confirmationCode);
            }

            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Submission error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again or call us directly.';
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- RENDER SUCCESS STATE ---
    if (isSuccess) {
        return (
            <div className="bg-white text-black p-12 text-center rounded-sm shadow-xl max-w-2xl mx-auto mt-10 animate-fade-in">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-4">Reservation Request Sent!</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Thank you for booking with Avian Travels Limo. We have received your request for the <strong>{FLEET_OPTIONS.find(v => v.id === selectedVehicle)?.name || 'vehicle'}</strong>.
                </p>
                {confirmationCode && (
                    <div className="bg-gray-50 border border-gray-200 rounded p-6 mb-8 inline-block shadow-inner w-full">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Your Confirmation Code</p>
                        <p className="text-4xl font-mono font-bold text-[#d4af37]">{confirmationCode}</p>
                    </div>
                )}
                <p className="text-gray-600 mb-8 leading-relaxed">
                    A confirmation email has been sent to <strong>{contactData?.email}</strong>. Our team is manually reviewing your reservation and will reach out to you shortly to confirm the booking.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="px-8 py-3 bg-black text-white uppercase font-bold tracking-widest hover:bg-gray-800 transition-colors rounded-sm"
                >
                    Return Home
                </button>
            </div>
        );
    }

    // --- MAIN FORM RENDER ---
    return (
        <div className="bg-gray-50 text-gray-800 rounded-lg shadow-lg overflow-hidden min-h-[600px]">
            <StepProgress currentStep={currentStep} />

            <div className="p-6 md:p-10">
                {currentStep === 1 && (
                    <RideInfoStep
                        form={rideForm}
                        onSubmit={onStep1Submit}
                    />
                )}

                {currentStep === 2 && (
                    <VehicleSelectionStep
                        selectedVehicleId={selectedVehicle}
                        onSelect={handleVehicleSelect}
                        onBack={() => setCurrentStep(1)}
                    />
                )}

                {currentStep === 3 && (
                    <ContactDetailsStep
                        form={contactForm}
                        rideData={rideData}
                        selectedVehicleId={selectedVehicle}
                        onSubmit={onFinalSubmit}
                        onBack={() => setCurrentStep(2)}
                        isSubmitting={isSubmitting}
                    />
                )}
            </div>
        </div>
    );
}
