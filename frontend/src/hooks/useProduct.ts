import { useQuery } from "@tanstack/react-query"
import { Product } from "../domains/model/product.model"
import { fetchProducts } from "../api/product"

export const useProduct = () => {
    return useQuery<Product[]>({
      queryKey: ["products"],
      queryFn: fetchProducts
    })
}