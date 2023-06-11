import '../styles/TripInfos.scss'


function UserInfos({ user }) {

    return (
      <div className='card-infos'>
        <div className='card-header'>
          <div className='overlay'>
          </div>
        </div>
        <div className='card-content'>
          <p>{user.lastname}</p>
          <p>{user.firstname}</p>
          <p>{user.age}</p>
          <p>{user.description}</p>
        </div>
          <div className='card-footer'>
        </div>
      </div>
    )
  }
  export default UserInfos
  