import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import App from './App';
import { FormProvider } from './context/FormContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
