import { createStore } from 'redux'

const initialState = {
  favorites: []
}

function reducer(state = initialState, action) {
  if(action.type === 'addFavorite') {
    return {...state, favorites: [...state.favorites, action.newFavorite]}
  }
  return state
}

const store = createStore(reducer)

export default store