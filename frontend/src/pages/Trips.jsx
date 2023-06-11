import { useState, useEffect } from 'react';
import TripList from '../components/TripList';
import { getTrips } from '../services/Api';

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getData = async () => {
        try {
          const result = await getTrips();
          setTrips(result.data)
        } catch (error) {
          console.log(error);
        }
      };
    getData()
  }, [])

  console.log(trips)
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

export default Trips;
