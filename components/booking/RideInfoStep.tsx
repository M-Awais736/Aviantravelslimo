'use client';

import { UseFormReturn, Controller } from 'react-hook-form';
import { Calendar, Clock, MapPin, Plus, Minus } from 'lucide-react';
import { RideInfoData } from '@/lib/schemas';
import { SERVICE_TYPES } from '@/lib/data';

interface RideInfoStepProps {
    form: UseFormReturn<RideInfoData>;
    onSubmit: (data: RideInfoData) => void;
}

export default function RideInfoStep({ form, onSubmit }: RideInfoStepProps) {
    const { register, control, formState: { errors } } = form;

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="flex-1 space-y-5 md:space-y-6">
                <h3 className="text-xl font-bold border-b pb-2 flex items-center gap-2">
                    <span className="w-2 h-6 bg-gold block"></span>
                    Step 1: Ride Information
                </h3>

                <div className="space-y-4">
                    {/* Service Type */}
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Select Service Type</label>
                        <select
                            {...register('serviceType')}
                            className="w-full p-3 border border-gray-300 rounded-sm bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                        >
                            {SERVICE_TYPES.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Pickup Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input
                                    type="date"
                                    {...register('pickupDate')}
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                                />
                            </div>
                            {errors.pickupDate && <p className="text-red-500 text-xs mt-1">{errors.pickupDate.message}</p>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Pickup Time</label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-3 text-gray-400" size={16} />
                                <input
                                    type="time"
                                    {...register('pickupTime')}
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                                />
                            </div>
                            {errors.pickupTime && <p className="text-red-500 text-xs mt-1">{errors.pickupTime.message}</p>}
                        </div>
                    </div>

                    {/* Locations */}
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Pickup Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input
                                {...register('pickupLocation')}
                                placeholder="Enter address, airport, or hotel"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                            />
                        </div>
                        {errors.pickupLocation && <p className="text-red-500 text-xs mt-1">{errors.pickupLocation.message}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Drop-off Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input
                                {...register('dropoffLocation')}
                                placeholder="Enter destination"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-sm focus:border-gold outline-none transition-all"
                            />
                        </div>
                        {errors.dropoffLocation && <p className="text-red-500 text-xs mt-1">{errors.dropoffLocation.message}</p>}
                    </div>

                    {/* Passengers & Luggage */}
                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Number of Passengers</label>
                            <div className="flex items-center">
                                <Controller
                                    name="passengers"
                                    control={control}
                                    render={({ field }) => (
                                        <div className="flex items-center border border-gray-300 rounded-sm">
                                            <button type="button" onClick={() => field.onChange(Math.max(1, field.value - 1))} className="p-2 hover:bg-gray-100 text-gray-600"><Minus size={16} /></button>
                                            <input type="number" {...field} className="w-12 text-center border-none focus:ring-0 p-1" readOnly />
                                            <button type="button" onClick={() => field.onChange(field.value + 1)} className="p-2 hover:bg-gray-100 text-gray-600"><Plus size={16} /></button>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Luggage Count</label>
                            <div className="flex items-center">
                                <Controller
                                    name="luggage"
                                    control={control}
                                    render={({ field }) => (
                                        <div className="flex items-center border border-gray-300 rounded-sm">
                                            <button type="button" onClick={() => field.onChange(Math.max(0, field.value - 1))} className="p-2 hover:bg-gray-100 text-gray-600"><Minus size={16} /></button>
                                            <input type="number" {...field} className="w-12 text-center border-none focus:ring-0 p-1" readOnly />
                                            <button type="button" onClick={() => field.onChange(field.value + 1)} className="p-2 hover:bg-gray-100 text-gray-600"><Plus size={16} /></button>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 md:py-4 mt-6 bg-gold text-black uppercase font-bold tracking-widest hover:bg-gold-dark transition-colors rounded-sm shadow-md text-sm md:text-base cursor-pointer"
                >
                    Select Vehicle
                </button>
            </div>

            {/* Map Placeholder */}
            <div className="hidden lg:block lg:w-1/2 bg-gray-200 rounded-sm min-h-[400px] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/images/map-placeholder.jpg')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="bg-white/80 p-6 rounded-md shadow-lg z-10 text-center backdrop-blur-sm border border-white/50">
                    <MapPin size={40} className="text-red-500 mx-auto mb-2" />
                    <p className="font-bold text-gray-600">Map Visualization</p>
                    <p className="text-xs text-gray-500">Route preview available after booking</p>
                </div>
            </div>
        </form>
    );
}
