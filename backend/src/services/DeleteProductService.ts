import prismaClient from "../prisma";


interface DeleteProductProps {
    id : string;
}
class DeleteProductService {
  async execute({ id }: DeleteProductProps) {

    if(!id) {
        throw new Error("Solicitação invalida.")
    }

    const findProduct = await prismaClient.product.findFirst({
        where:{
          id: id
        }
    })

    if(!findProduct) {
      throw new Error("Produto não existe!")
    }


    await prismaClient.product.delete({
      where:{
        id: findProduct.id
      }
    })

    return { message: "Deletado com sucesso!"}
  }
}


export { DeleteProductService }