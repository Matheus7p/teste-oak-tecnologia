import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateProductController } from "./controllers/CreateProductController"
import { ListProductController } from "./controllers/ListProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateProductController().handle(request, reply);
    })

    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListProductController().handle(request, reply);
    })

    fastify.delete("/product", async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteProductController().handle(request, reply);
    })
}