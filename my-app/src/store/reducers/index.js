import { combineReducers } from 'redux'
import favoriteReducer from './favoriteReducer'
import countryReducer from './countryReducers'

const reducer = combineReducers({
  countryReducer,
  favoriteReducer
})

export default reducer
