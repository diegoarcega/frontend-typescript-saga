export const login = (email: string, password: string) => ({
  type: 'LOGIN',
  payload: { email, password }
})
