export function addFavoriteCountry(favCountry) {
  return {
    type: "addFavorite",
    newFavorite: favCountry
  }
}