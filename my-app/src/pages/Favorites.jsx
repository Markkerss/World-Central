import { useSelector } from 'react-redux'
import FavoriteCountriesList from '../components/FavoriteCountriesList'

export default function Favorites() {
  const favorites= useSelector(state => state.favoriteReducer.favorites)

  return (
    <>
      <h1 style={{"textAlign":"center", "marginTop":"4.5rem"}}>Favorites</h1>
      <div className="row" style={{"marginTop": "5rem"}}>
        {favorites.map(favorite => 
          <FavoriteCountriesList country={favorite} key={favorite.name}/>
        )}
      </div>
    </>
  )
}