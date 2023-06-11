import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CgProfile } from 'react-icons/cg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'

function Navbar () {
  const { state: { isAuthenticated } } = useAuth()
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'> <AiOutlineHome size={25} /> </Link>
        </li>
        <li>
          {
          isAuthenticated
            ? <Link to='/profile'> <CgProfile size={25} /> </Link>
            : (
              <Link to='/auth'> <CgProfile size={25} /> </Link>
              )
        }
        </li>
        <li>
          <Link to='/newTrip'> <AiOutlinePlusCircle size={25} /> </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
