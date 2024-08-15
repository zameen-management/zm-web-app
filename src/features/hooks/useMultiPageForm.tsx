import { ReactElement, useState } from "react";

interface UseMultiPageFormReturn {
	currentStep: number;
	totalSteps: number;
	currentComponent: ReactElement;
	next: () => void;
	previous: () => void;
	goTo: (step: number) => void;
	isFirstStep: boolean;
	isLastStep: boolean;
}

const useMultiPageForm = (steps: ReactElement[]): UseMultiPageFormReturn => {
	const [currentStep, setCurrentStep] = useState(0);

	const next = async () => {
		setCurrentStep((current) => Math.min(current + 1, steps.length - 1));
	};

	const previous = () => {
		setCurrentStep((current) => Math.max(current - 1, 0));
	};

	const goTo = (step: number) => {
		setCurrentStep(step);
	};

	return {
		currentStep,
		totalSteps: steps.length,
		currentComponent: steps[currentStep],
		next,
		previous,
		goTo,
		isFirstStep: currentStep === 0,
		isLastStep: currentStep === steps.length - 1,
	};
};

export default useMultiPageForm;
