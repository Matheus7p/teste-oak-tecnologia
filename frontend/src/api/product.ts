import { CreateProduct, Product } from "../domains/model/product.model";
import { api } from "./api";

export const fetchProducts = async (): Promise<Product[]>=> {
    const { data } = await api.get<Product[]>("/products")
    return data
}

export const createProducts = async ( product: CreateProduct) => {
    const response = await api.post(
        "/product", 
        { ...product },
        {
          headers: {
              "Content-Type": "application/json",
            }
        }
    )
    console.log("product created: ", response.data)
}