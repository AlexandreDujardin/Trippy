import TripListItem from './TripListItem'

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
