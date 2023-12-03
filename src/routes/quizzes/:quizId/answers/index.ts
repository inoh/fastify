import { FastifyInstance } from 'fastify'

interface IRouteParams {
  quizId: string;
}

export default async (fastify: FastifyInstance) => {
  fastify.get<{
    Params: IRouteParams
  }>('/', async (request) => {
    return `quizId: ${request.params.quizId}`
  })
}