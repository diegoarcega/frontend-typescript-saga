const BASE_URL = 'http://localhost:3333'

interface Headers {
  'Content-Type': string,
  [propName: string]: any,
}

const HEADERS: Headers = {
  'Content-Type': 'application/json'
}

export const hasToken = () => Boolean(localStorage.getItem('token'))
export const getToken = () => localStorage.getItem('token')

export const post = (path: string, params: any) => {
  const headers = HEADERS

  if (hasToken()) {
    headers['Authorization'] = 'Bearer: ' + getToken()
  }

  return fetch(BASE_URL + path, {
    headers: headers,
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(params)
  }).then(response => response.json())
}

export const get = (path: string, params?: any) => {
  const headers = HEADERS

  if (hasToken()) {
    headers['Authorization'] = 'Bearer: ' + getToken()
  }

  return fetch(BASE_URL + path, {
    headers: headers,
    mode: 'cors',
    method: 'GET',
    body: JSON.stringify(params)
  }).then(response => response.json())
}

export const getAll = () => get('/users')

interface AuthenticateParams {
  email: string,
  password: string,
}

export const authenticate = (params: AuthenticateParams) => post('/login', params)

