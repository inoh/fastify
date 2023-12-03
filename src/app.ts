import fastify from 'fastify'
import autoLoad from '@fastify/autoload'
import { join } from 'path'
import cors from '@fastify/cors'

const app = fastify()

app.register(autoLoad, { dir: join(__dirname, 'plugins') })
app.register(autoLoad, { dir: join(__dirname, 'routes') })

app.register(cors, { origin: true })

export default app
