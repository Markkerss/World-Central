import { useSelector } from 'react-redux'

export default function Favorites() {
  const favorites= useSelector(state => state.favorites)
  console.log(favorites)

  return (
    <>
      <h1>Hello</h1>
      <h2>{JSON.stringify(favorites)}</h2>
    </>
  )
}