import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar () {
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
            <Link to='/auth'>S'inscire / Se connecter</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
