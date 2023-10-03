import React from 'react'
import { Header, Form, Gifs, Footer } from './components'
import { GifContextProvider } from './context/GifContextProvider'

export function App () {
  // Render
  return (
    <div>
      <Header title='GIF SEARCH APP' />
      <GifContextProvider>
        <main>
          <Form />
          <Gifs />
        </main>
        <Footer />
      </GifContextProvider>
    </div>
  )
}
