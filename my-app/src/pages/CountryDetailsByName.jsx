import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function CountryDetailsByName() {
  const { name } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [countryDetails, setCountryDetails] = useState({})
   
  useEffect (() => {
    setIsLoading(true)
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => {
        return res.json()
      })
      .then(countryDetails => {
        setCountryDetails(countryDetails)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => setIsLoading(false))
    }, [name])
  
  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <h1>{JSON.stringify(countryDetails)}</h1>
    </>
  )
}

export default CountryDetailsByName