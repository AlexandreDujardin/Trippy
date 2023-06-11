import TripListItem from './TripListItem'
import '../styles/TripList.scss'

function TripList({ trips }) {
  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <TripListItem key={trip.id} trip={trip} />
      ))}
      
    </div>
  )
}

export default TripList
