import axios from 'axios'

function config() {
  return axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  })
}

const api = config()

export function buildToken(token: string): string {
  return `Bearer ${token}`
}

export function setApiToken(token: string): void {
  api.defaults.headers.common.authorization = buildToken(token)
}

export { api }
