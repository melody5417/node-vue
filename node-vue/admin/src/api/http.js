import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080/admin/api'
})

export default  http