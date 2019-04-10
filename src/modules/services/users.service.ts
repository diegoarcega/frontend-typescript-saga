import { api } from './api'
import { UserInterface } from '../../interfaces/user.interface'

export const getAll = () => api.get('/users')

export const deleteUser = (id: string) => api.delete(`/users/${id}`)

export const updateUser = (user: UserInterface) => api.put('/users', { user })

export const createUser = (user: UserInterface) => api.post('/users', { user })
