import { useState, useEffect } from 'react';
import TripList from '../components/TripList';
import { getTrips } from '../services/Api';

function Trip() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getTrips()
      setTrips(result.data)
    }
    getData()
  }, [])
  if (!trips) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <h1>VOYAGES</h1>
      <TripList trips={trips} />
    </>
  )
}

export default Trip;
