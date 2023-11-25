'use strict'

const list = async (request, reply) => {
  return `quizId: ${request.params.quizId}`
}

module.exports = async (fastify, opts) => {
  fastify.get('/', list)
}
