'use client';

import { UseFormReturn } from 'react-hook-form';
import { ContactData, RideInfoData } from '@/lib/schemas';
import { FLEET_OPTIONS } from '@/lib/data';
import SummaryPanel from './SummaryPanel';

interface ContactDetailsStepProps {
    form: UseFormReturn<ContactData>;
    rideData: RideInfoData | null;
    selectedVehicleId: string | null;
    onSubmit: (data: ContactData) => void;
    onBack: () => void;
    isSubmitting: boolean;
}

export default function ContactDetailsStep({
    form,
    rideData,
    selectedVehicleId,
    onSubmit,
    onBack,
    isSubmitting
}: ContactDetailsStepProps) {
    const { register, formState: { errors } } = form;

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center border-b pb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="w-2 h-6 bg-gold block"></span>
                    Step 3: Final Details
                </h3>
                <button
                    type="button"
                    onClick={onBack}
                    className="text-sm text-gray-500 hover:text-black underline transition-colors"
                >
                    Change Vehicle
                </button>
            </div>

            {/* Booking Summary - Reusing Component */}
            <SummaryPanel rideData={rideData} vehicleId={selectedVehicleId} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500">First Name</label>
                    <input
                        {...register('firstName')}
                        className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500">Last Name</label>
                    <input
                        {...register('lastName')}
                        className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
                    <input
                        type="email"
                        {...register('email')}
                        className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500">Phone Number</label>
                    <input
                        type="tel"
                        {...register('phone')}
                        className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500">Special Requests / Comments</label>
                <textarea
                    {...register('comments')}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 md:py-5 bg-gold text-black uppercase font-bold text-base md:text-lg tracking-widest hover:bg-gold-dark transition-colors rounded-sm shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
                By submitting this form, you request a reservation. No payment is taken now.
            </p>
        </form>
    );
}
