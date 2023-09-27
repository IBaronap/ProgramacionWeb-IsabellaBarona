import React from 'react'
import { Header, Form, Gifs } from './components'
import { useApp } from './hooks/useApp.js'

export function App () {
  const {
    query,
    error,
    gifs,
    isLoading,
    isFirstTime,
    handleUserSubmit
  } = useApp()

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
