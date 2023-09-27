import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Header, Form, Gifs } from './components'
import { fetchGifs } from './services/fetchGif'
import debounce from 'just-debounce-it'

export function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // First time
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

  // Render
  return (
    <div>
      <Header title='GIF SEARCH APP' />
      <main>
        <Form onSubmit={handleUserSubmit} onChange={handleUserSubmit} />
        <Gifs gifs={gifs} error={error} loading={isLoading} query={query} isFirstTime={isFirstTime.current} />
      </main>
    </div>
  )
}
