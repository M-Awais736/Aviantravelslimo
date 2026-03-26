import * as z from 'zod';

export const rideInfoSchema = z.object({
    serviceType: z.enum(['From Airport', 'To Airport', 'Point-to-Point', 'Hourly Charter']),
    pickupDate: z.string().min(1, 'Date is required'),
    pickupTime: z.string().min(1, 'Time is required'),
    pickupLocation: z.string().min(3, 'Pickup location is required'),
    dropoffLocation: z.string().min(3, 'Dropoff location is required'),
    passengers: z.number().min(1, 'At least 1 passenger is required'),
    luggage: z.number().min(0),
    childSeeds: z.number().min(0).optional(),
    isAccessible: z.boolean().optional(),
});

export const contactSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    comments: z.string().optional(),
});

export type RideInfoData = z.infer<typeof rideInfoSchema>;
export type ContactData = z.infer<typeof contactSchema>;

export type BookingFormData = RideInfoData & ContactData & {
    vehicleId: string | null;
};
