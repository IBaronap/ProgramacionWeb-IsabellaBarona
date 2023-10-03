import { GifContext } from './GifContext'
import React, { useState, useRef } from 'react'

export function GifContextProvider ({ children }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // Para que el mensaje de que no se encontró gifs no se muestre a la primera
  const isFirstTime = useRef(true)
  return (
    <GifContext.Provider value={{
      query,
      setQuery,
      error,
      setError,
      gifs,
      setGifs,
      isLoading,
      setIsLoading,
      isFirstTime
    }}
    >
      {children}
    </GifContext.Provider>
  )
}
