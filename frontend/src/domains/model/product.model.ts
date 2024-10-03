export interface Product {
  id: string,
  name: string,
  description: string,
  value: number,
  available_for_sale: boolean,
  created_ad: string,
}

export interface CreateProduct {
  name: string,
  description: string,
  value: number,
  available_for_sale: boolean,

}