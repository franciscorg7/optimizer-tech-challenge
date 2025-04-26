import React, { useEffect, useState } from 'react';
import ProductList from '../../ProductList';
import { useFormContext } from '../../../context/FormContext';
import productService from '../../../services/productsService';
import { SimplifiedProductDetails } from '../../../types/product';
import Searchbar from '../../Searchbar';

const ProductSelectionStep: React.FC = () => {
  const [products, setProducts] = useState<SimplifiedProductDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const { formData, updateCart } = useFormContext();

  useEffect(() => {
    productService
      .getAll()
      ?.then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        alert('Error fetching products. Please try again later.');
        setLoading(false);
      });
  }, []);

  /**
   * Toggles the selection state of a product in the form data.
   * If the product is already selected, it removes it from the selected products.
   * If the product is not selected, it adds it to the selected products.
   *
   * @param product - The product to toggle in the selection.
   */
  const toggleProduct = (product: SimplifiedProductDetails) => {
    const isSelected = formData.cart.find(
      (p: SimplifiedProductDetails) => p.id === product.id
    );
    if (isSelected) {
      updateCart(
        formData.cart.filter(
          (p: SimplifiedProductDetails) => p.id !== product.id
        )
      );
    } else {
      updateCart([...formData.cart, product]);
    }
  };

  /**
   * Searches for products based on the provided string query.
   * If the query is empty, it fetches all products.
   *
   * @param query - The search query to filter products.
   */
  const searchProducts = (query: string) => {
    if (query.length > 0) {
      productService.search(query).then((data) => {
        setProducts(data);
      });
    } else {
      productService.getAll().then((data) => {
        setProducts(data);
      });
    }
  };

  return (
    <>
      <Searchbar onDebounce={searchProducts}></Searchbar>
      <ProductList
        products={products}
        loading={loading}
        toggleProduct={toggleProduct}
        cartIds={formData.cart?.map((p: SimplifiedProductDetails) => p.id)}
      ></ProductList>
    </>
  );
};

export default ProductSelectionStep;
