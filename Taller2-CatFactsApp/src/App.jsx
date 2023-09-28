import React from 'react'
import { Header, Button, Facts } from './components'
import { useApp } from './hooks/useApp.js'

export function App () {
  const {
    error,
    catImg,
    catFact,
    isLoading,
    isFirstTime,
    handleBTN
  } = useApp()

  // Render
  return (
    <div>
      <Header title='Random Cat Facts' />
      <main>
        <Facts text={catFact} img={catImg} loading={isLoading} error={error} isFirstTime={isFirstTime} />
        <Button title='Get a new fact!' onClick={handleBTN} />
      </main>
    </div>
  )
}
