import { useHistory } from 'react-router-dom'

export default function FavoriteCountriesList (props) {
  let history = useHistory()
  
  return (
    <div className="col-sm-3" style={{"marginLeft":"4.4rem", "marginBottom":"4rem", "marginRight":"3rem", "textAlign":"center"}}>
      <div className="card border-primary mb-3"  style={{"maxWidth": "20rem", "height":"20rem"}}>
        <div className="card-body">
          <h4 className="card-title mb-4"><a href='#' onClick={() => history.push('/country/' + props.country.name)}>{ props.country.name }</a></h4>
          <img style={{"maxWidth":"12rem"}} src={ props.country.flag }/>
          <p className="card-text mt-4" style={{"fontWeight":"500"}}>Capital: { props.country.capital }</p>
          <p className="card-text" style={{"fontWeight":"500"}}>Population: { props.country.population }</p>
        </div>
      </div>
    </div>
  )
}
