import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
import { subscribeToTrip } from '../services/Api'
import { AiOutlinePlus } from 'react-icons/ai'
import '../styles/TripInfos.scss'


function TripInfos({ trip }) {
  const { state: { isAuthenticated, user } } = useAuth()

  const handleSubscribe = () => {
    if (isAuthenticated) {
      const userId = user?.id;
      const journeyId = trip.id;
      subscribeToTrip(userId, journeyId)
        .then((data) => {
          // Handle successful subscription
          console.log('Subscription successful:', data);
          toast.success("T'es inscrit, criss de cave!");
        })
        .catch((error) => {
          // Handle subscription error
          console.error('Subscription error:', error);
          toast.error("Erreur lors de l'inscription.");
        });
    } else {
      toast.error("Connais-toé, tabarnak, pour t'inscrire.");
    }
  };

  const startDate = new Date(trip.date_start).toLocaleDateString();
  const endDate = new Date(trip.date_end).toLocaleDateString();
    return (
      <div className='card-infos'>
        <div className='card-header'>
          <div className='overlay'>
            <h2>{trip.name}</h2>
          </div>
        </div>
        <div className='card-content'>
          <p>Description: {trip.description}</p>
          <p>Date départ: {startDate}</p>
          <p>Date Retour: {endDate}</p>
          <p>Budget: {trip.budget}</p>
          <p>Nombre de personnes maximum: {trip.max_people}</p>
        </div>
          <div className='card-footer'>
            <button onClick={handleSubscribe}> 
              <AiOutlinePlus size={30} />
            </button>
        </div>
      </div>
    )
  }
  export default TripInfos
  