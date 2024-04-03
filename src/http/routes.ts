import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { hello } from './controllers/hello'

export async function appRoutes(app: FastifyInstance) {
  // app.post('/', hello)

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    console.log(request.body)

    reply.status(200).send()
  })
}
