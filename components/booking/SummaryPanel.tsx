import { RideInfoData } from '@/lib/schemas';
import { FLEET_OPTIONS } from '@/lib/data';

interface SummaryPanelProps {
    rideData: RideInfoData | null;
    vehicleId: string | null;
}

export default function SummaryPanel({ rideData, vehicleId }: SummaryPanelProps) {
    const selectedVehicle = FLEET_OPTIONS.find(v => v.id === vehicleId);

    if (!rideData) return null;

    return (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-sm mb-6">
            <h4 className="font-bold text-yellow-800 text-xs md:text-sm uppercase mb-3 border-b border-yellow-200 pb-2">
                Booking Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs md:text-sm text-yellow-900">
                <div className="flex flex-col">
                    <span className="font-semibold text-yellow-700">Pickup Date</span>
                    <span>{rideData.pickupDate} at {rideData.pickupTime}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-yellow-700">Service</span>
                    <span>{rideData.serviceType}</span>
                </div>
                <div className="flex flex-col sm:col-span-2">
                    <span className="font-semibold text-yellow-700">Route</span>
                    <span>{rideData.pickupLocation} <span className="text-yellow-500">→</span> {rideData.dropoffLocation}</span>
                </div>
                {selectedVehicle && (
                    <div className="flex flex-col sm:col-span-2 mt-2 pt-2 border-t border-yellow-200">
                        <span className="font-semibold text-yellow-700">Selected Vehicle</span>
                        <span className="font-bold">{selectedVehicle.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
