import React from 'react'

export default class CountriesList extends React.Component {
  render() {
    const { country } = this.props
    return (
      <>
        <li>{ country.name }</li>
      </>
    )
  }
}
