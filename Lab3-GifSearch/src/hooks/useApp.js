import { useCallback, useEffect, useContext } from 'react'
import { fetchGifs } from '../services/fetchGif'
import debounce from 'just-debounce-it'
import { GifContext } from '../context/GifContext'

export const useApp = () => {
  const context = useContext(GifContext)

  if (!context) {
    throw new Error('This component sould be within a GifsContextrovider Component')
  }
  const {
    query,
    setQuery,
    error,
    setError,
    gifs,
    setGifs,
    isLoading,
    setIsLoading,
    isFirstTime
  } = context

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

  return (
    {
      query,
      error,
      gifs,
      isLoading,
      isFirstTime,
      handleUserSubmit
    }
  )
}
