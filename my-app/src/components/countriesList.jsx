import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavoriteCountry } from '../store/actions/addFavorite'

export default function CountriesList (props) {
  let history = useHistory()
  const dispatch = useDispatch()

  function addFavorite(favCountry) {
    dispatch(addFavoriteCountry(favCountry))
  }
  
  return (
    <div className="col-sm-3" style={{"marginLeft":"4.4rem", "marginBottom":"4rem", "marginRight":"3rem", "textAlign":"center"}}>
      <div className="card border-primary mb-3"  style={{"height":"25rem", "maxWidth": "20rem"}}>
        <div className="card-body">
          <h4 className="card-title mb-4"><a href='#' onClick={() => history.push('/country/' + props.country.name)}>{ props.country.name }</a></h4>
          <img style={{"maxWidth":"12rem"}} src={ props.country.flag }/>
          <p className="card-text mt-4" style={{"fontWeight":"500"}}>Capital: { props.country.capital }</p>
          <p className="card-text" style={{"fontWeight":"500"}}>Population: { props.country.population }</p>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-primary btn-sm" style={{"bottom":"75%"}} onClick={() => addFavorite(props.country)}>Add to Favorites</button>        
        </div>
      </div>
    </div>
  )
}
