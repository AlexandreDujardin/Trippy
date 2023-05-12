import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Trips from '../pages/Trips'
import Auth from '../pages/Auth'

function Router () {
    return (
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/trips' element={<Trips />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    )
  }
export default Router
