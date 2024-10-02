import prismaClientfrom from "../prisma";

class ListProductService {
  async  execute() {

    const products = await prismaClientfrom.product.findMany({
        orderBy: {
            value: "asc"
        }
    })

    return products

  }
}

export { ListProductService }