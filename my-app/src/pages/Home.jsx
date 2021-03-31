import React, { useState, useEffect} from 'react'
import CountriesList from '../components/CountriesList.jsx'

function AllCountries() {
  const [countries, setCountries] = useState([])
   
  useEffect (() => {
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
    }, [])

  return (
    <>
      <h1>Home</h1>
      <h2>Countries List:</h2>
      <ul>
        {countries.map(country => 
          <CountriesList country={country} key={country.name}/>
        )}
      </ul>
    </>
  )
}

export default AllCountries