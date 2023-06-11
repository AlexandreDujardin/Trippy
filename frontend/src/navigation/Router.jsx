import { Route, Routes } from 'react-router-dom'
import Trips from '../pages/Trips'
import Auth from '../pages/Auth'
import { useAuth } from '../context/AuthContext'
import Trip from '../pages/Trip'
import Profile from '../pages/Profile'
import NewTrip from '../pages/NewTrip'


function Router () {
  const { state: { isAuthenticated } } = useAuth()
  if (isAuthenticated) {    return (
      <Routes>
        <Route index path='/' element={<Trips />} />
        <Route path='/trips/:id' element={<Trip />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/NewTrip' element={<NewTrip />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route index path='/' element={<Trips />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/trips/:id' element={<Trip />} />
        <Route path='/NewTrip' element={<NewTrip />} />
      </Routes>
    )
  }}

  
export default Router
