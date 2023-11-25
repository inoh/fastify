'use strict'

const OpenAI = require('openai')

const openai = new OpenAI()

// https://platform.openai.com/docs/api-reference
const list = async (request, reply) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "user", "content": "ドラクエのクイズを教えて"}
    ],
    // model: "gpt-3.5-turbo",
    model: "gpt-4",
    // model: "gpt-4-1106-preview",
  });

  return { questions: completion.choices };
}

const show = async (request, reply) => {
  return `ID: ${request.params.id}`
}

module.exports = async (fastify, opts) => {
  fastify.get('/', list)
  fastify.get('/:id', show)
}
