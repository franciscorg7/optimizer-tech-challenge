import axios from "axios";
import { ProductDetails } from "../types/product";

const API_URL = "https://dummyjson.com/products";

const productService = {

    /**
     * Fetches all products.
     * 
     * @returns {Promise<ProductDetails[]>} - A promise that resolves to an array of products.
     */
    getAll: async (): Promise<ProductDetails[]> => {
        try {
            const response = await axios.get(API_URL);
            return response.data?.products || [];
        } catch (error) {
            throw new Error("Failed to fetch products.");
        }
    },

    /**
     * Fetches a single product matching the given query string.
     * 
     * @param {string} query - the search query for product search.
     * @returns {Promise<ProductDetails[]>} - A promise that resolves to the product.
     */
    search: async (query: string): Promise<ProductDetails[]> => {
        try {
            const response = await axios.get(`${API_URL}/search?q=${query}`);
            return response.data?.products || [];
        } catch (error) {
            throw new Error("Failed to search for products.");
        }
    }
};

export default productService;