import { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { FromSchema } from "json-schema-to-ts";

const userSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string" },
    age: { type: "integer" }
  },
  required: ["name", "email"],
} as const;

type User = FromSchema<typeof userSchema>;

export default async (fastify: FastifyInstance) => {
  // TODO: response に型を指定する
  fastify.post<{ Body: User }>('/', async ({ body }, response: any) => {
    const prisma = new PrismaClient()
    const user = await prisma.user.create({ data: body })
    return user
  })
  fastify.get('/', async () => {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()

    return { users };
  })
}
