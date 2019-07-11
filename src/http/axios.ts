import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  headers: {
    Authorization: 'token d000a4af1ea8c6275d6e4d6bdcee8f087000e5d9'
  },
  baseURL: '/api',
  timeout: 60000,
}

export default axios.create(config)
