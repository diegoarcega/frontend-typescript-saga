import { AuthTypes } from '../types'
import { ActionInterface } from '../../interfaces/action.interface'

export const login = (email: string, password: string): ActionInterface => ({
  type: AuthTypes.LOGIN_REQUESTED,
  payload: { email, password },
})

export const logout = (): ActionInterface => ({
  type: AuthTypes.LOGOUT,
})
