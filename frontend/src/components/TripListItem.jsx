function TripListItem({ trip }) {

    return (
      <div className='card'>
        <div className='card-header'>
          <div className='overlay'>
            <h2>{trip.name}</h2>
          </div>
        </div>
        <div className='card-content'>
          <p>Description: {trip.description.substring(0, 180)}...</p>
          <p>Date départ: {trip.date_start}</p>
          <p>Date Retour: {trip.date_end}</p>
          <p>Budget: {trip.budget}</p>
          <p>Maximum People: {trip.max_people}</p>
        </div>
      </div>
    )
  }
  export default TripListItem
  