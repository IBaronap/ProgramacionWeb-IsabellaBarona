import React from 'react'
import { Header, Button, Facts } from './components'
import { CatContextProvider } from './Context/CatContextProvider'

export function App () {
  return (
    <div>
      <Header title='Random Cat Facts' />
      <main>
        <CatContextProvider>
          <Facts />
          <Button title='Get a new fact!' />
        </CatContextProvider>
      </main>
    </div>
  )
}
