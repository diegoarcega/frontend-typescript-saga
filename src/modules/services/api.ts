import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { hasToken, getToken } from './auth.service'
import store from '../../redux/store'
import { logout } from '../../redux/actions/auth'
import config from '../../config'

export const api = axios.create({
  baseURL: config.apiBaseUrl,
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = config
  if (hasToken() && !newConfig.headers.authorization) {
    newConfig.headers.authorization = getToken()
  }
  return newConfig
})

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (!error.response) return error

    const { status } = error.response
    if (!status || (status && status === 401)) {
      store.dispatch(logout())
    }

    return error
  }
)
