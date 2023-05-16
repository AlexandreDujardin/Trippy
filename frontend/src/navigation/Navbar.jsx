import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar () {
  const { state: { isAuthenticated, user } } = useAuth()
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/trips'>Voyages</Link>
        </li>
        <li>
          {
          isAuthenticated
            ? <li>Hello, {user.firstname}</li>
            : (
              <Link to='/auth'>S'inscire / Se connecter</Link>
              )
        }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
