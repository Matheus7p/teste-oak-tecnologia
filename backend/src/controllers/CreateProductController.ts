import { FastifyRequest, FastifyReply} from "fastify"
import { CreateProductService } from "../services/CreateProductService"


class CreateProductController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { name, description, value, available_for_sale} = 
    request.body as { name: string, description : string, value: number, available_for_sale : boolean}

    const productService = new CreateProductService()
    const product = await productService.execute({ name, description, value, available_for_sale });

    reply.send(product)
  }
}

export { CreateProductController }