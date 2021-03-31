import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function CountriesList (props) {
  let history = useHistory()
  const dispatch = useDispatch()

  function addFavorite(favCountry) {
    dispatch({type: 'addFavorite', newFavorite: favCountry})
  }

  return (
    <div class="col-sm-3" style={{"margin-left":"4.4rem", "margin-bottom":"4rem", "margin-right":"3rem", "text-align":"center"}}>
      <div class="card border-primary mb-3"  style={{"max-width": "20rem"}}>
        <div class="card-body">
          <h4 class="card-title mb-4"><a href='#' onClick={() => history.push('/country/' + props.country.name)}>{ props.country.name }</a></h4>
          <img style={{"max-width":"12rem"}} src={ props.country.flag }/>
          <p class="card-text mt-4" style={{"font-weight":"500"}}>Capital: { props.country.capital }</p>
          <p class="card-text" style={{"font-weight":"500"}}>Population: { props.country.population }</p>
          <button type="button" class="btn btn-primary btn-sm mb-3 mt-3" onClick={() => addFavorite(props.country)}>Add to Favorites</button>        
        </div>
      </div>
    </div>
  )
}
