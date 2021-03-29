import './App.css'
import React from 'react'
import axios from 'axios'
import CountriesList from './components/countriesList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const countries = res.data
        this.setState({ countries })
      })
  }

  render() {
    return (
      <ul>
        { this.state.countries.map(country => 
          <CountriesList country = {country} />
        )}
      </ul>
    )
  }
}

export default App
