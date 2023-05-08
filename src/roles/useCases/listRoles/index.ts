import { RolesRepository } from '@roles/repositories/RolesReposiroty'
import { ListRolesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesController'

const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
