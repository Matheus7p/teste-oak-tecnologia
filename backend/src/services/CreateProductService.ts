import prismaClient from "../prisma";

interface CreateProductProps {
  name: string;
  description: string;
  value: number;
  available_for_sale: boolean;
}

class CreateProductService {
  async execute({
    name,
    description,
    value,
    available_for_sale,
  }: CreateProductProps) {
    if (!name || !description || !value || available_for_sale === undefined) {
      throw new Error("Preencha todos os campos");
    }

    const product = await prismaClient.product.create({
      data: {
        name,
        description,
        value,
        available_for_sale,
      },
    });

    return product;
  }
}

export { CreateProductService };
