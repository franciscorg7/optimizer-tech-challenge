import React from 'react';
import ClientForm from '../ClientForm';
import { ClientInfo } from '../../types/client';
import {
  validateAddress,
  validateName,
  validatePhone,
} from '../../utils/clientInfoValidation';

interface ClientFormGroupProps {
  localData: ClientInfo;
  handleNameChange: (name: string) => void;
  handleAddressChange: (address: string) => void;
  handlePhoneChange: (phone: string) => void;
}

const ClientFormGroup: React.FC<ClientFormGroupProps> = ({
  localData,
  handleNameChange,
  handleAddressChange,
  handlePhoneChange,
}) => {
  return (
    <div>
      <ClientForm
        name='Name'
        value={localData.name}
        onChange={(e) => handleNameChange(e.target?.value)}
        validation={validateName}
      ></ClientForm>

      <ClientForm
        name='Address'
        value={localData.address}
        onChange={(e) => handleAddressChange(e.target?.value)}
        validation={validateAddress}
      ></ClientForm>

      <ClientForm
        name='Phone'
        value={localData.phone}
        onChange={(e) => handlePhoneChange(e.target?.value)}
        validation={validatePhone}
      ></ClientForm>
    </div>
  );
};

export default ClientFormGroup;
