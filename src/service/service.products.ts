import { OnlyProduct, Product } from "@/interface/interface";
import axios, { AxiosResponse } from "axios";
export const API_PRODUCT = axios.create({
  baseURL: "https://fakestoreapi.com",
});

class ProductSerVice {
  async getAllProduct(): Promise<Product[]> {
    const response = await API_PRODUCT.get(`/products`);
    return response.data;
  }
  async getsingleProduct(id: number): Promise<OnlyProduct> {
    const response = await API_PRODUCT.get(`/products/${id}`);
    return response.data;
  }
}

export default ProductSerVice;
