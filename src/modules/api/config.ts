import axios from 'axios'

function config() {
  return axios.create({
    baseURL: 'http://localhost:3333',
  })
}

export const api = config()
