import { useCallback, useEffect, useState, useRef } from 'react'
import { fetchGifs } from '../services/fetchGif'
import debounce from 'just-debounce-it'

export const useApp = (initTaskState, initFilterState) => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Para que el mensaje de que no se encontró gifs no se muestre a la primera
  const isFirstTime = useRef(true)

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = (query === '')
    }
  }, [query])

  // Submit / input change
  const handleUserSubmit = (query) => {
    setIsLoading(true)
    getGifs(query)
    setQuery(query)
  }

  // Fetching
  const getGifs = useCallback(
    debounce((query) => {
      fetchGifs({ query, limit: 12 })
        .then(newGif => setGifs(newGif))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }, 500)
    , [])

  useEffect(() => {
    console.log('getGifs volvió a definirse')
  }, [getGifs])

  const hasGifs = gifs.length > 0
  const gifsQuantity = gifs.length

  return (
    {
      query,
      error,
      gifs,
      isLoading,
      isFirstTime,
      hasGifs,
      gifsQuantity,
      handleUserSubmit
    }
  )
}
