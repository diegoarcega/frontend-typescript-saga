import jwtDecode from 'jwt-decode'
import { api } from './api'

interface AuthenticateParams {
  email: string
  password: string
}

export const TOKEN_KEY = '@myApp-auth-token'

export function buildToken(token: string): string {
  return `Bearer ${token}`
}

export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY)
export const setToken = (token: string): void => localStorage.setItem(TOKEN_KEY, token)

export const hasToken = (): boolean => Boolean(localStorage.getItem(TOKEN_KEY))

export const logout = (): void => localStorage.removeItem(TOKEN_KEY)

export const isTokenExpired = (token: string): boolean => {
  const decodedToken = jwtDecode(token)
  // @ts-ignore
  if (decodedToken.exp < Date.now() / 1000) {
    return true
  }
  return false
}

export const isAuthenticated = (): boolean => {
  if (hasToken()) {
    const authToken = getToken()
    return !!authToken && !isTokenExpired(authToken)
  }
  return false
}

export const authenticate = (params: AuthenticateParams) => api.post('/login', params)
