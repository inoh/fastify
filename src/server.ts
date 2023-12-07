import dotenv from 'dotenv'
import app from './app'

dotenv.config()

app.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(0)
  }
  console.log(`Server listening at ${address}`)
})
