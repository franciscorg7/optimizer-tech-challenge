import { SimplifiedProductDetails } from "../types/product";

/**
 * Validates products selection in the cart.
 * 
 * @param cart - The current cart state.
 * @returns {boolean} - True if the cart is valid, false otherwise.
 */
export function validateProductsSelection(cart: SimplifiedProductDetails[]): boolean {
    return (cart ?? []).length > 0;
}