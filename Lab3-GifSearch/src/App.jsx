import React from 'react'
import { Header, Form, Gifs, Footer } from './components'
import { useApp } from './hooks/useApp.js'

export function App () {
  const {
    query,
    error,
    gifs,
    isLoading,
    isFirstTime,
    hasGifs,
    gifsQuantity,
    handleUserSubmit
  } = useApp()

  // Render
  return (
    <div>
      <Header title='GIF SEARCH APP' />
      <main>
        <Form onSubmit={handleUserSubmit} onChange={handleUserSubmit} />
        <Gifs gifs={gifs} hasGifs={hasGifs} error={error} loading={isLoading} query={query} isFirstTime={isFirstTime.current} />
      </main>
      <Footer gifsQuantity={gifsQuantity} query={query} hasGifs={hasGifs} />
    </div>
  )
}
