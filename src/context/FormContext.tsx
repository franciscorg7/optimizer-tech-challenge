import { createContext, useContext, useState, ReactNode } from 'react';
import { SimplifiedProductDetails } from '../types/product';
import { ClientInfo } from '../types/client';
import { FormContextType, FormData } from '../types/form';

const defaultFormData: FormData = {
  cart: [],
  clientInfo: {
    name: '',
    address: '',
    phone: '',
  },
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      'useFormContext must be used within a <FormProvider></FormProvider>'
    );
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  /**
   * Updates the cart in the form data.
   *
   * @param cart - The list of products selected.
   */
  const updateCart = (cart: SimplifiedProductDetails[]) => {
    setFormData((prev: FormData) => ({ ...prev, cart }));
  };

  /**
   * Updates the client information in the form data.
   *
   * @param clientInfo - The client information to update.
   */
  const updateClientInfo = (clientInfo: ClientInfo) => {
    setFormData((prev: FormData) => ({ ...prev, clientInfo }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateCart,
        updateClientInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
