import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Trips from '../pages/Trips'
import Auth from '../pages/Auth'
import { useAuth } from '../context/AuthContext'


function Router () {
  const { state: { isAuthenticated } } = useAuth()
  if (isAuthenticated) {
    return (
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/trips' element={<Trips />} />s
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/trips' element={<Trips />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    )
  }}

  
export default Router
