import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCountryDetailsAsync } from '../store/actions/setCountries'


function CountryDetailsByName() {
  const { name } = useParams()
  const dispatch = useDispatch()
  const { loading, countryDetails } = useSelector(state => state.countryReducer)

  useEffect (()  => {
    dispatch(setCountryDetailsAsync(name))
  }, [name])

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
      <div style={{"textAlign":"center"}}>
        <h1 style={{"marginTop":"4.5rem", "fontSize":"3rem"}}>{ countryDetails.name }</h1>
        <img style={{"maxWidth":"25rem", "marginTop":"3.5rem"}} src={ countryDetails.flag }/> 
        <p className="mt-5" style={{"fontWeight":"500", "fontSize":"1.5rem"}}>Capital: { countryDetails.capital }</p>
        <p style={{"fontWeight":"500", "fontSize":"1.5rem"}}>Population: { countryDetails.population }</p>
        <p style={{"fontWeight":"500", "fontSize":"1.5rem"}}>Region: { countryDetails.region }</p>
        <p style={{"fontWeight":"500", "fontSize":"1.5rem", "marginBottom":"7rem"}}>Sub-Region: { countryDetails.subregion }</p>
      </div>
    </>
  )
}

export default CountryDetailsByName