import { useState, useEffect } from 'react'

function Trips () {
  const [trips, setTrips] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurants()
      setRestaurants(result.data)
    }
    getData()
  }, [])

  if (!restaurants) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <h1>RESTAURANTS</h1>
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Restaurants
