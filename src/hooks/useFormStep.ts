import { useState } from 'react';

export function useFormStep(totalSteps: number) {
    const [step, setStep] = useState(0);

    const next = () => {
        setStep(prev => Math.min(prev + 1, totalSteps - 1));
    };

    const back = () => {
        setStep(prev => Math.max(prev - 1, 0));
    };

    const goTo = (index: number) => {
        if (index >= 0 && index < totalSteps) {
            setStep(index);
        }
    };

    const reset = () => {
        setStep(0);
    };

    return {
        step,
        isFirstStep: step === 0,
        isLastStep: step === totalSteps - 1,
        next,
        back,
        goTo,
        reset
    };
}