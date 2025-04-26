import React from 'react';
import './styles.scss';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  onToggle: () => void;
  isSelected?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  price,
  onToggle,
  isSelected = false,
}) => {
  return (
    <div
      className={`product-card ${isSelected ? 'product-card--selected' : ''}`}
      key={id}
      onClick={onToggle}
    >
      <img src={thumbnail} alt={title} className='product-card__image' />
      <div className='product-card__content'>
        <span className='product-card__content__title'>{title}</span>
        <span className='product-card__content__description'>
          {description}
        </span>
        <span className='product-card__content__price'>{price}€</span>
      </div>
    </div>
  );
};

export default ProductCard;
