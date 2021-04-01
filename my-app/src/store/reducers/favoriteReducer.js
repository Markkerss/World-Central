const initialState = {
  favorites: [],
  loading: false,
  error: null
}

export default function reducer(state = initialState, action) {
  if(action.type === 'addFavorite') {
    return {...state, favorites: [...state.favorites, action.newFavorite]}
  }
  return state
}