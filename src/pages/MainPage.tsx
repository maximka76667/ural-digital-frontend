import React, { useEffect } from 'react'
import AirportCard from '../components/AirportCard'
import AirportFilter from '../components/AirportFilter'
import AirportSearch from '../components/AirportSearch'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getAirports } from '../store/actions/airportActions'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const { airports, loading, error } = useAppSelector(state => state.airport)

  useEffect(() => {
    dispatch(getAirports());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container mx-auto max-w-[760px] pt-5'>
      <AirportSearch />
      <AirportFilter />
      {airports.map(airport => (
        <AirportCard key={airport.id} airport={airport} />
      ))}
    </div>
  )
}

export default MainPage