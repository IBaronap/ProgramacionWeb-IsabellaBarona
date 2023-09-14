import { GifsModel } from '../models/gif.models'
const API_KEY = import.meta.env.VITE_GIPHY_KEY
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`

export const fetchGifs = async ({ query, limit }) => {
  return fetch(`${BASE_URL}&q=${query}&limit=${limit}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from API')
      }
      return res.json()
    })
    .then(({ data }) => {
      const newGif = data.map(gif => {
        const { id, title, images } = gif
        return new GifsModel(id, title, images.original.url)
      })
      return newGif
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
