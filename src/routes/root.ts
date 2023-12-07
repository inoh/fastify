import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async (fastify: FastifyInstance) => {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return { root: false }
  })
}
