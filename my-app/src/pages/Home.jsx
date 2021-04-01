import React, { useEffect } from 'react'
import CountriesList from '../components/CountriesList.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setCountriesAsync } from '../store/actions/setCountries'

function Home() {
  const dispatch = useDispatch()
  const { loading, countries } = useSelector(state => state.countryReducer)

  useEffect (()  => {
    dispatch(setCountriesAsync())
  }, [])
  
  if (loading) return( 
    <>
      <div className="d-flex justify-content-center" style={{"marginTop":"5rem"}}>
        <h1>Loading</h1>
        <div class="spinner-border ml-3" role="status"></div>
      </div>
    </>
  ) 

  return (
    <>
      <h1 style={{"textAlign":"center", "marginTop":"4.5rem"}}>Countries of the World</h1>
      <div className="row" style={{"marginTop": "5rem"}}>
        {countries.map(country => 
          <CountriesList country={country} key={country.name}/>
        )}
      </div>
    </>
  )
}

export default Home