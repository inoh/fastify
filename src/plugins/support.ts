import fastify from "fastify"
// import fp from 'fastify-plugin'

const server = fastify()

server.decorate('someSupport', function () {
  return 'hugs'
})
