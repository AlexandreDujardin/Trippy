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
    return response
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

export {
  getTrips,
  getTripById
}
