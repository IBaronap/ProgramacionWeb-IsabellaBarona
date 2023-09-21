import React, { useCallback, useEffect, useState } from 'react'
import { Header, Form, Gifs } from './components'
import { fetchGifs } from './services/fetchGif'

export function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Submit
  const handleFormSubmit = (query) => {
    setQuery(query)
    console.log(query)
  }

  const handleOnChange = (query) => {
    setQuery(query)
    console.log(query)
  }

  const getGifs = useCallback(() => {
    setIsLoading(true)

    fetchGifs({ query, limit: 12 })
      .then(newGif => setGifs(newGif))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false))
  }, [])

  // Fetching
  useEffect(() => {
    getGifs()
  }, [query])

  useEffect(() => {
    console.log('getGifs volvió a definirse')
  }, [getGifs])

  // Render
  return (
    <div>
      <Header title='GIF SEARCH APP' />
      <main>
        <Form onSubmit={handleFormSubmit} onChange={handleOnChange} />
        <Gifs gifs={gifs} error={error} loading={isLoading} />
      </main>
    </div>
  )
}
