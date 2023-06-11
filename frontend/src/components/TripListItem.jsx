import { useNavigate } from 'react-router-dom'
import '../styles/TripListItem.scss'


function TripListItem({ trip }) {
  
  const navigate = useNavigate()
  const handleClick = (trip) => {
    navigate(`/trips/${trip.id}`, { state: { id: trip.id } })
  }

    return (
      <div className='card'>
        <div className='card-header'>
          <div className='overlay'>
            <h2>{trip.name}</h2>
          </div>
        </div>
        <div className='card-content'>
          
        </div>
        <div className='card-footer'>
          <button onClick={() => handleClick(trip)} className='card-actions'>
            Découvrir
          </button>
        </div>
      </div>
    )
  }
  export default TripListItem
  