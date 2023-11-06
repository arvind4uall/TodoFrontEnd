import axios from 'axios'
const authFetch = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    Accept: 'application/json',
  },
})
export default authFetch
