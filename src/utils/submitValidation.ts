import { validateClientInfo } from "./clientInfoValidation";
import { validateProductsSelection } from "./productsValidation";
import { FormData } from '../types/form'

/**
 * Validates the submission of the form.
 * 
 * @param formData - The form data to validate.
 * @returns {boolean} - True if the submission is valid, false otherwise.
 */
export function validateSubmission(formData: FormData): boolean {
    const isClientInfoValid = validateClientInfo(formData.clientInfo);
    const areProductsValid = validateProductsSelection(formData.cart);

    return isClientInfoValid && areProductsValid;
}