'use client';

import { User, Briefcase, Info } from 'lucide-react';
import { FLEET_OPTIONS } from '@/lib/data';

interface VehicleSelectionStepProps {
    selectedVehicleId: string | null;
    onSelect: (vehicleId: string) => void;
    onBack: () => void;
}

export default function VehicleSelectionStep({ selectedVehicleId, onSelect, onBack }: VehicleSelectionStepProps) {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="w-2 h-6 bg-gold block"></span>
                    Step 2: Select Vehicle
                </h3>
                <button
                    onClick={onBack}
                    className="text-sm text-gray-500 hover:text-black underline transition-colors"
                >
                    Edit Ride Info
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
                {FLEET_OPTIONS.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        className={`flex flex-col md:flex-row bg-white border ${selectedVehicleId === vehicle.id ? 'border-gold ring-2 ring-gold/20' : 'border-gray-200'
                            } rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 group`}
                    >
                        <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 relative overflow-hidden">
                            <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-4 md:p-6 md:w-2/3 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-lg md:text-xl font-bold font-serif">{vehicle.name}</h4>
                                    {vehicle.tag && (
                                        <span className="bg-black text-gold text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                                            {vehicle.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                                    <span className="flex items-center gap-1"><User size={14} /> {vehicle.passengers} Passengers</span>
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> {vehicle.luggage} Luggage</span>
                                </div>
                                <ul className="text-xs md:text-sm text-gray-600 space-y-1 mb-4">
                                    {vehicle.features.slice(0, 3).map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-gold rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-4 md:mt-6 pt-4 border-t border-gray-100">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Estimated Price</p>
                                    <p className="text-xl md:text-2xl font-bold text-black font-serif">
                                        ${vehicle.price}
                                        <span className="text-xs md:text-sm font-normal text-gray-500 font-sans"> / all inclusive</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => onSelect(vehicle.id)}
                                    className="w-full sm:w-auto px-6 py-3 bg-gold text-black font-bold uppercase text-sm tracking-wide hover:bg-gold-dark transition-colors rounded-sm shadow-sm"
                                >
                                    Book This Vehicle
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
