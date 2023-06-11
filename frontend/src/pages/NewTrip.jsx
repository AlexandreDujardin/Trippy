import NewTripForm from '../components/NewTripForm'
import { useAuth } from '../context/AuthContext'
import '../styles/Auth.scss'
import { useState, useEffect } from 'react'
import { createTrip } from '../services/Api';

function NewTrip () {
  const { state: { isAuthenticated } } = useAuth()

  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);
  
  const handleSubmit = async (tripData) => {
    try {

      const result = await createTrip(tripData);
      setTrip(result.data);

      // Trip created successfully, you can redirect or perform any other actions
      console.log('Trip created successfully:', result.data);
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>{
      isAuthenticated
        ? trip ? (
          <h2>Le voyage {trip.name} a bien été crée !</h2>
        ) : (
          <NewTripForm onSubmit={handleSubmit} />
        )
        : <h2> Connectez-vous pour créer un voyage !</h2>
      }
    </>
  )
}

export default NewTrip
