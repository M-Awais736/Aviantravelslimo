import { CheckCircle } from 'lucide-react';

interface StepProgressProps {
    currentStep: number;
}

const STEPS = [
    { step: 1, label: 'Ride Info' },
    { step: 2, label: 'Select Vehicle' },
    { step: 3, label: 'Final Details' }
];

export default function StepProgress({ currentStep }: StepProgressProps) {
    return (
        <div className="bg-zinc-100 border-b border-gray-200 p-3 md:p-4">
            <div className="flex justify-between max-w-2xl mx-auto">
                {STEPS.map((item) => (
                    <div
                        key={item.step}
                        className={`flex items-center gap-1 md:gap-2 ${currentStep === item.step ? 'text-gold-dark font-bold' : 'text-gray-400'}`}
                    >
                        <div
                            className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 text-xs md:text-sm ${currentStep === item.step ? 'border-gold-dark bg-white' : 'border-gray-300'
                                }`}
                        >
                            {currentStep > item.step ? <CheckCircle size={14} /> : item.step}
                        </div>
                        <span className="text-[10px] md:text-xs uppercase tracking-wider">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
