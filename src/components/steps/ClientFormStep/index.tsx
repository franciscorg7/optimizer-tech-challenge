import React, { useState, useEffect } from 'react';
import { useFormContext } from '../../../context/FormContext';
import { ClientInfo } from '../../../types/client';
import ClientFormGroup from '../../ClientFormGroup';

const ClientFormStep: React.FC = () => {
  const { formData, updateClientInfo } = useFormContext();
  const [localData, setLocalData] = useState(formData.clientInfo);

  // Sets the state of the local data to the form data's client info.
  useEffect(() => {
    updateClientInfo(localData);
  }, [localData]);

  /**
   * Handles the change of the client's name local data.
   *
   * @param name - The name of the client.
   */
  const handleNameChange = (name: string) => {
    setLocalData((prev: ClientInfo) => ({ ...prev, name }));
  };

  /**
   * Handles the change of the client's address local data.
   *
   * @param address - The address of the client.
   */
  const handleAddressChange = (address: string) => {
    setLocalData((prev: ClientInfo) => ({ ...prev, address }));
  };

  /**
   * Handles the change of the client's phone local data.
   *
   * @param phone - The phone number of the client.
   */
  const handlePhoneChange = (phone: string) => {
    setLocalData((prev: ClientInfo) => ({ ...prev, phone }));
  };

  return (
    <div>
      <ClientFormGroup
        localData={localData}
        handleNameChange={handleNameChange}
        handleAddressChange={handleAddressChange}
        handlePhoneChange={handlePhoneChange}
      ></ClientFormGroup>
    </div>
  );
};

export default ClientFormStep;
