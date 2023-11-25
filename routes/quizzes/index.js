'use strict'

const list = async (request, reply) => {
  return 'this is an example'
}

const show = async (request, reply) => {
  return `ID: ${request.params.id}`
}

module.exports = async (fastify, opts) => {
  fastify.get('/', list)
  fastify.get('/:id', show)
}
