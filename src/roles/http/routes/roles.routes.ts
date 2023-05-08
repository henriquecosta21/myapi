import { CreateRoleController } from '@roles/useCases/createRole/CreateRoleController'
import { listRolesController } from '@roles/useCases/listRoles'
import { Router } from 'express'

const rolesRouter = Router()
const createRolesController = new CreateRoleController()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response)
})

export { rolesRouter }
