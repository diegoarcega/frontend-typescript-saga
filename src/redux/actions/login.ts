import { AuthTypes } from '../types'

export const login = (email: string, password: string) => ({
  type: AuthTypes.LOGIN_REQUESTED,
  payload: { email, password },
})
