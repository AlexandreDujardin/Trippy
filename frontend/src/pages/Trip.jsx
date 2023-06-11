import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { getTripById } from '../services/Api';
import TripInfos from '../components/TripInfos';

function Trip() {
  const [trip, setTrip] = useState([]);
  const { state: { id } } = useLocation()

  useEffect(() => {
    const getData = async () => {
        try {
          const result = await getTripById(id);
          setTrip(result.data)
        } catch (error) {
          console.log(error);
        }
      };
    getData()
  }, [])

  console.log(trip)
  if (!trip) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <TripInfos trip={trip} />
    </>
  )
}

export default Trip;
