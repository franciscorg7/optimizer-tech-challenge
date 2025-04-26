import { SimplifiedProductDetails } from '../../types/product';
import ProductCard from '../ProductCard';
import './styles.scss';

interface ProductListProps {
  products: SimplifiedProductDetails[];
  loading: boolean;
  cartIds: number[];
  toggleProduct: (product: SimplifiedProductDetails) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
  cartIds,
  toggleProduct,
}: ProductListProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-list'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          thumbnail={product.thumbnail}
          price={product.price}
          isSelected={cartIds.includes(product.id)}
          onToggle={() => toggleProduct(product)}
        />
      ))}
      {products.length === 0 && <div>No products available.</div>}
    </div>
  );
};

export default ProductList;
