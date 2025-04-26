import React, { useState, useEffect } from 'react';
import './styles.scss';

interface ClientFormProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validation: (value: string) => boolean;
}

const ClientForm: React.FC<ClientFormProps> = ({
  name,
  value,
  onChange,
  placeholder,
  validation,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isValid, setIsValid] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Debounce the validation to avoid excessive validations and re-renders.
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!hasInteracted) return;

      setIsValid(validation(inputValue));
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, validation, hasInteracted]);

  /**
   * Handles the input change event.
   *
   * @param event - The event triggered by the input change.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target?.value);
    onChange(event);
  };

  /**
   * Handles the input focus event.
   * Sets the hasInteracted state to true when the input is focused.
   */
  const handleInputFocus = () => {
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <div className='client-form'>
      <span>{name}</span>
      <input
        className={`client-form__input ${
          !isValid ? 'client-form__input--invalid' : ''
        }`}
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={placeholder}
      />
      {!isValid && (
        <span className='client-form__invalid-label'>Invalid input</span>
      )}
    </div>
  );
};

export default ClientForm;
