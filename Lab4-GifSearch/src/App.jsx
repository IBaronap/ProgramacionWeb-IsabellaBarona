import React from 'react'
import { Form, Gifs, Footer } from './components'

export function App () {

  // Render
  return (
    <div>
      <header className='Header'>
        <h1>GIF SEARCH APP</h1>
      </header>
      <main>
        <Form />
        <Gifs />
      </main>
    </div>
  )
}
