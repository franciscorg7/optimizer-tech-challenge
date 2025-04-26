import React from 'react';
import { useFormContext } from '../../../context/FormContext';
import './styles.scss';

const SummaryStep: React.FC = () => {
  const { formData } = useFormContext();
  const { clientInfo, cart } = formData;
  const totalPrice = (cart ?? []).reduce(
    (total, product) => total + product.price || 0,
    0
  );

  return (
    <div className='summary-step'>
      <div className='summary-step__client-info'>
        <h3>Client Info</h3>
        <p>
          <b>Name:</b> {clientInfo.name}
        </p>
        <p>
          <b>Address:</b> {clientInfo.address}
        </p>
        <p>
          <b>Phone:</b> {clientInfo.phone}
        </p>
      </div>
      <div className='summary-step__selected-products'>
        <h3>Selected Products</h3>
        <div className='summary-step__selected-products__wrapper'>
          {(cart ?? []).map((product, index) => (
            <span key={index}>
              {product.title} ({product.price}€)
            </span>
          ))}
        </div>
      </div>
      <div className='summary-step__total-price'>
        <div className='summary-step__total-price__wrapper'>
          <h2>Total Price</h2>
          <span>{totalPrice.toFixed(2)}€</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;
