import { api } from './config'

export const getAll = () => api.get('/users')
