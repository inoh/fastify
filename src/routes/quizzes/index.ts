import { FastifyInstance } from 'fastify'
import OpenAI from "openai"

interface IRouteParams {
  id: string;
}

export default async (fastify: FastifyInstance) => {
  fastify.get('/', async () => {
    const openai = new OpenAI()
    const completion = await openai.chat.completions.create({
      messages: [
        {"role": "user", "content": "ドラクエのクイズを教えて"}
      ],
      // model: "gpt-3.5-turbo",
      model: "gpt-4",
      // model: "gpt-4-1106-preview",
    });
  
    return { questions: completion.choices };
  })
  fastify.get<{
    Params: IRouteParams
  }>('/:id', async (request) => {
    request.params
    return `ID: ${request.params.id}`
  })
}
