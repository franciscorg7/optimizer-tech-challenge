import { ClientInfo } from "./client";
import { SimplifiedProductDetails } from "./product";

export interface FormData {
    cart: SimplifiedProductDetails[];
    clientInfo: ClientInfo;
}

export interface FormContextType {
    formData: FormData;
    updateCart: (cart: SimplifiedProductDetails[]) => void;
    updateClientInfo: (clientInfo: ClientInfo) => void;
}