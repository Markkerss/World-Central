import React, { useState, useEffect} from 'react'
import CountriesList from '../components/CountriesList.jsx'

function Home() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect (() => {
    setIsLoading(true)
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json()
      })
      .then(countries => {
        setCountries(countries)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => setIsLoading(false))
    }, [])
  
  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <h1 style={{"text-align":"center", "margin-top":"4.5rem"}}>Countries of the World</h1>
      <div class="row" style={{"margin-top": "5rem"}}>
        {countries.map(country => 
          <CountriesList country={country} key={country.name}/>
        )}
      </div>
    </>
  )
}

export default Home