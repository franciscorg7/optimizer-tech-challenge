import React, { useState } from 'react';
import './styles.scss';
import { Step } from '../../types/steps';
import StepNavigation from '../StepNavigation';

interface MultiStepContainerProps {
  steps: Step[];
  onSubmit: () => void;
}

const MultiStepContainer: React.FC<MultiStepContainerProps> = ({
  steps,
  onSubmit,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  /**
   * Function to go to the next step, alerts if validation fails.
   *
   * @returns void
   */
  const goNext = () => {
    if (currentStep.validate && currentStep.validate()) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      alert('Please make sure the step is valid.');
    }
  };

  /**
   * Function to go back to the previous step.
   *
   * @returns void
   */
  const goBack = () => {
    setCurrentStepIndex((prev) => prev - 1);
  };

  /**
   * Function to handle form submission, alerts if validation fails.
   *
   * @returns void
   */
  const handleSubmit = () => {
    if (currentStep.validate) {
      onSubmit();
    } else {
      alert('Please complete all required fields before submitting.');
    }
  };

  return (
    <div className='multi-step'>
      <div className='multi-step__card'>
        <div className='multi-step__card__step-title-wrapper'>
          <span>{currentStep.name}</span>
        </div>
        <div className='multi-step__card__step-content-wrapper'>
          {currentStep.component}
        </div>
        <div className='multi-step__card__stepper-wrapper'>
          <StepNavigation
            currentStep={currentStepIndex}
            stepIds={steps.map((_, index) => (index + 1).toString())}
            onNext={goNext}
            onBack={goBack}
            onSubmit={handleSubmit}
          ></StepNavigation>
        </div>
      </div>
    </div>
  );
};

export default MultiStepContainer;
