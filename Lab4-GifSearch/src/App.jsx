import React, { useEffect, useState } from 'react'
import { Form, Gifs } from './components'
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

  // Fetching
  useEffect(() => {
    setIsLoading(true)

    fetchGifs({ query, limit: 12 })
      .then(newGif => setGifs(newGif))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false))
  }, [query])

  // Render
  return (
    <div>
      <header className='Header'>
        <h1>GIF SEARCH APP</h1>
      </header>
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Gifs gifs={gifs} error={error} loading={isLoading} />
      </main>
    </div>
  )
}
