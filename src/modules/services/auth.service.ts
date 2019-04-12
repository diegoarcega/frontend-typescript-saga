import { api } from './api'

export const TOKEN_KEY = '@myApp-auth-token'

export function buildToken(token: string): string {
  return `Bearer ${token}`
}

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY)
export const setToken = (token: string): void => localStorage.setItem(TOKEN_KEY, buildToken(token))

export const hasToken = (): boolean => Boolean(localStorage.getItem(TOKEN_KEY))

export const logout = (): void => localStorage.removeItem(TOKEN_KEY)

interface AuthenticateParams {
  email: string
  password: string
}

export const authenticate = (params: AuthenticateParams) => api.post('/login', params)
