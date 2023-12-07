import fastify from "fastify"
// import fp from 'fastify-plugin'

const server = fastify()

server.register(require('@fastify/sensible'), {
  errorHandler: false
})
