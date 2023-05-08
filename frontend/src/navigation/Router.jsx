import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Trips from '../pages/Trips'

function Router () {
    return (
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/trips' element={<Trips />} />
      </Routes>
    )
  }
export default Router
