import { UsersTypes } from '../types'
import { UserInterface } from '../../interfaces/user.interface'

export const getAll = () => ({
  type: UsersTypes.GET_ALL_USERS_REQUESTED,
})

export const deleteUser = (id: string) => ({
  type: UsersTypes.DELETE_USER_REQUESTED,
  payload: { id },
})

export const updateUser = (user: UserInterface) => ({
  type: UsersTypes.UPDATE_USER_REQUESTED,
  payload: { user },
})
