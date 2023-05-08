function TripListItem({ trip }) {
    const { attributes } = trip
  
    return (
      <div className='card'>
        <div className='card-header'>
          <div className='overlay'>
            <h2>{attributes.name}</h2>
          </div>
        </div>
        <div className='card-content'>
          <p>{attributes.description.substring(0, 180)}...</p>
        </div>
      </div>
    )
  }
  
  export default TripListItem
  