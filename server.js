import jsonServer from 'json-server'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
const __dirname = path.resolve()

const port = process.env.PORT || 5000
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '/frontend/build'),
})

server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log('JSON Server is running on port ', port)
})
