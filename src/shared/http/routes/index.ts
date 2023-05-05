import { AppError } from '@shared/errors/AppError'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new Error('Acesso negado')
})

export { routes }
