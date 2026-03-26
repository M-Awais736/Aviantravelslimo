export const SERVICE_TYPES = [
    'From Airport',
    'To Airport',
    'Point-to-Point',
    'Hourly Charter'
] as const;

export interface Vehicle {
    id: string;
    name: string;
    passengers: number;
    luggage: number;
    image: string;
    price: number;
    features: string[];
    tag?: string;
}

export const FLEET_OPTIONS: Vehicle[] = [
    {
        id: 'luxury-suv',
        name: 'Luxury SUV',
        passengers: 7,
        luggage: 6,
        image: '/images/luxury-suv.jpg',
        price: 150,
        features: [
            'Leather seating',
            'Tinted windows',
            'Complimentary water',
            'Professional chauffeur',
            'All-wheel drive'
        ],
        tag: 'BEST VALUE'
    },
    {
        id: 'limousine',
        name: 'Limousine',
        passengers: 8,
        luggage: 4,
        image: '/images/limousine.jpg',
        price: 200,
        features: [
            'Premium sound system',
            'Mood lighting',
            'Privacy partition',
            'Bar setup (upon request)',
            'Plush leather interiors'
        ]
    },
    {
        id: 'coach',
        name: 'Coach Bus',
        passengers: 56,
        luggage: 50,
        image: '/images/coach.jpg',
        price: 500,
        features: [
            'Reclining seats',
            'Onboard restroom',
            'Overhead storage',
            'PA system',
            'Climate control'
        ]
    }
];
