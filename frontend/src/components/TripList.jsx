function TripList() {
    const [trips, setTrips] = useState([]);
  
    useEffect(() => {
      fetch('/api/trips')
        .then(res => res.json())
        .then(data => setTrips(data))
        .catch(err => console.error(err));
    }, []);
  
    return (
      <div>
        <h1>Trip List</h1>
        <ul>
          {trips.map(trip => (
            <li key={trip._id}>{trip.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TripList;
  
  
  
  
  