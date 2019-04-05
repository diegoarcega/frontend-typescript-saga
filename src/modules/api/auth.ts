import { api } from './config'

interface AuthenticateParams {
  email: string,
  password: string,
}

export const authenticate = (params: AuthenticateParams) => api.post('/login', params)
