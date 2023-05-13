import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getTrips = async () => {
  try {
    const response = await api.get('/trips')
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getTripById = async (id) => {
  try {
    const response = await api.get(`/trips/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const login = async (credentials) => {
  const response = await api.post('auth/login', credentials)
  return response.data
}

const register = async (credentials) => {
  const response = await api.post('auth/register', credentials)
  return response.data
}

export {
  getTrips,
  getTripById,
  login,
  register
}
