const initialState = {
  countries: [],
  countryDetails: {},
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  if(action.type === 'setCountries') {
    return {...state, countries: action.newCountries}
  } else if (action.type === 'setCountryDetails') {
    return {...state, countryDetails: action.newCountryDetails}
  } else if (action.type === 'setLoading') {
    return {...state, loading: action.payload}
  }
  return state
}