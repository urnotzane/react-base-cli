import axios from './axios'

export const getUsers = () => {
  return new Promise(resolve => {
    axios.get('/users?page=1&per_page=8')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        resolve(error)
      })
  })
}