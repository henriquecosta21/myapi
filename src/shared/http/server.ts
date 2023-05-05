import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Olá dev!' })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
