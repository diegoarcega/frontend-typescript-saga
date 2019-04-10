import { UsersTypes } from '../types'
import { UserInterface } from '../../interfaces/user.interface'
import { ActionInterface } from '../../interfaces/action.interface'

export const getAll = (): ActionInterface => ({
  type: UsersTypes.GET_ALL_USERS_REQUESTED,
})

export const deleteUser = (id: string): ActionInterface => ({
  type: UsersTypes.DELETE_USER_REQUESTED,
  payload: { id },
})

export const updateUser = (user: UserInterface): ActionInterface => ({
  type: UsersTypes.UPDATE_USER_REQUESTED,
  payload: { user },
})

export const createUser = (user: UserInterface): ActionInterface => ({
  type: UsersTypes.CREATE_USER_REQUESTED,
  payload: { user },
})
