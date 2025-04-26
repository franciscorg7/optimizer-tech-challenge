import React from 'react';
import './styles.scss';

interface StepNavigationProps {
  currentStep: number;
  stepIds: string[];
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  stepIds,
  onNext,
  onBack,
  onSubmit,
}) => {
  // Check if there are previous and next steps
  // to determine if the buttons should be enabled or disabled.
  const hasPrevious = currentStep > 0;
  const hasNext = currentStep < stepIds.length - 1;

  return (
    <div className='step-navigation'>
      <button
        className={
          hasPrevious
            ? 'step-navigation__button'
            : 'step-navigation__button--hidden'
        }
        onClick={onBack}
        disabled={!hasPrevious}
      >
        <b>Back</b>
      </button>

      <div className='step-navigation__indicator'>
        {hasPrevious && stepIds[currentStep - 2] && (
          <span>{stepIds[currentStep - 2]}</span>
        )}
        {hasPrevious && <span>{stepIds[currentStep - 1]}</span>}

        <strong>{stepIds[currentStep]}</strong>

        {hasNext && <span>{stepIds[currentStep + 1]}</span>}
        {hasNext && stepIds[currentStep + 2] && (
          <span>{stepIds[currentStep + 2]}</span>
        )}
      </div>

      {hasNext ? (
        <button
          className='step-navigation__button'
          onClick={onNext}
          disabled={!hasNext}
        >
          <b>Next</b>
        </button>
      ) : (
        <button className='step-navigation__submit' onClick={onSubmit}>
          <b>Submit</b>
        </button>
      )}
    </div>
  );
};

export default StepNavigation;
