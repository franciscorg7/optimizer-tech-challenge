import React from 'react';
import './App.scss';
import ProductSelectionStep from './components/steps/ProductSelectionStep';
import ClientFormStep from './components/steps/ClientFormStep';
import SummaryStep from './components/steps/SummaryStep';
import MultiStepContainer from './components/MultiStepContainer';
import Header from './components/Header';
import { useFormContext } from './context/FormContext';
import { validateProductsSelection } from './utils/productsValidation';
import { validateClientInfo } from './utils/clientInfoValidation';
import { validateSubmission } from './utils/submitValidation';
import ThankYouLabel from './components/ThankYouLabel';

const App: React.FC = () => {
  const { formData } = useFormContext();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const steps = [
    {
      name: 'Product Selection',
      component: <ProductSelectionStep />,
      validate: () => validateProductsSelection(formData.cart),
    },
    {
      name: 'Client Info',
      component: <ClientFormStep />,
      validate: () => validateClientInfo(formData.clientInfo),
    },
    {
      name: 'Summary',
      component: <SummaryStep />,
      validate: () => validateSubmission(formData),
    },
  ];

  return (
    <div className='app-wrapper'>
      <Header />
      {isSubmitted ? (
        <ThankYouLabel />
      ) : (
        <MultiStepContainer
          steps={steps}
          onSubmit={() => {
            setIsSubmitted(true);
          }}
        />
      )}
    </div>
  );
};

export default App;
