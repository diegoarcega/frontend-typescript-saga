import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getToken, buildToken } from './auth.service'
import store from '../../redux/store'
import { logout } from '../../redux/actions/auth'
import config from '../../config'

export const api = axios.create({
  baseURL: config.apiBaseUrl,
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = config
  const authToken = getToken()
  if (!!authToken && !newConfig.headers.authorization) {
    newConfig.headers.authorization = buildToken(authToken)
  }
  return newConfig
})

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (!error.response) return Promise.reject(error)

    const { status } = error.response
    if (!status || (status && status === 401)) {
      store.dispatch(logout())
      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)
