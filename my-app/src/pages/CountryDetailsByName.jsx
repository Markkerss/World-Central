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
      <p style={{"display":"hidden"}}>{JSON.stringify(countryDetails[0])}</p>
      //problems in displaying information
      {/* <div style={{"text-align":"center"}}>
        <h1 style={{"margin-top":"4.5rem", "font-size":"3rem"}}>{ countryDetails[0].name }</h1>
        <img style={{"max-width":"25rem", "margin-top":"3.5rem"}} src={ countryDetails[0].flag }/> 
        <p class="mt-5" style={{"font-weight":"500", "font-size":"1.5rem"}}>Capital: { countryDetails[0].capital }</p>
        <p style={{"font-weight":"500", "font-size":"1.5rem"}}>Population: { countryDetails[0].population }</p>
        <p style={{"font-weight":"500", "font-size":"1.5rem"}}>Region: { countryDetails[0].region }</p>
        <p style={{"font-weight":"500", "font-size":"1.5rem", "margin-bottom":"7rem"}}>Sub-Region: { countryDetails[0].subregion }</p>
      </div> */}
    </>
  )
}

export default CountryDetailsByName