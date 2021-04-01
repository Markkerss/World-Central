import setLoading from './setLoading'
import Swal from 'sweetalert2'

export function setCountries(countries) {
  return {
    type: "setCountries",
    newCountries: countries
  }
}

export function setCountriesAsync() {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json()
      })
      .then(countries => {
        dispatch(setCountries(countries))
      })
      .catch(err => {
        Swal.fire({
          title: err,
          icon: 'error'
        })
      })
      .finally(_=> dispatch(setLoading(false)))
  }
} 

export function setCountryDetails(countryDetails) {
  return {
    type: "setCountryDetails",
    newCountryDetails: countryDetails
  }
}

export function setCountryDetailsAsync(name) {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => {
        return res.json()
      })
      .then(countryDetails => {
        dispatch(setCountryDetails(countryDetails[0]))
      })
      .catch(err => {
        Swal.fire({
          title: err,
          icon: 'error'
        })
      })
      .finally(_=> dispatch(setLoading(false)))
  }
} 
