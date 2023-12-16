import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const awsLambdaFastify = require('@fastify/aws-lambda')
const proxy = awsLambdaFastify(app)
module.exports = proxy
app.ready()
