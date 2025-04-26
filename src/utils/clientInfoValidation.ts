import { ClientInfo } from "../types/client";

/**
 * Validates the name of the client (starts with a capital letter and contains only letters).
 * 
 * @param name - The name of the client.
 * @returns {boolean} - True if the name is valid, false otherwise. 
 */
export function validateName(name: string): boolean {
    return /^[A-ZÀ-Ÿ][a-zA-ZÀ-ÿ\s]+$/.test(name) && name.trim().length > 1;
}

/**
 * Validates the address of the client (length greater than 5).
 * 
 * @param address - The address of the client.
 * @returns {boolean} - True if the address is valid, false otherwise. 
 */
export function validateAddress(address: string): boolean {
    return address.trim().length > 5;
}

/**
 * Validates the phone number of the client (basic international format).
 * 
 * @param phone - The phone number of the client.
 * @returns {boolean} - True if the phone number is valid, false otherwise.
 */
export function validatePhone(phone: string): boolean {
    return /^\+?\d{7,15}$/.test(phone); // basic international phone number format
}

/**
 * Validates all the client information (name, address and phone).
 * 
 * @param clientInfo - The client information to validate.
 * @returns {boolean} - True if all client information is valid, false otherwise.
 */
export function validateClientInfo(clientInfo: ClientInfo): boolean {
    const { name, address, phone } = clientInfo;

    const isValidName = validateName(name);
    const isValidAddress = validateAddress(address);
    const isValidPhone = validatePhone(phone);

    return isValidName && isValidAddress && isValidPhone;
}