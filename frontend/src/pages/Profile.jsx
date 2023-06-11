import { useAuth } from '../context/AuthContext'
import UserInfos from '../components/UserInfos';
import '../styles/Profile.scss'

function Profile() {
    const { state: { user }, logout } = useAuth()


  if (!user) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <UserInfos user={user} />
      <button className='logout-btn' onClick={logout}>Se déconnecter</button>
    </>
  )
}

export default Profile;
