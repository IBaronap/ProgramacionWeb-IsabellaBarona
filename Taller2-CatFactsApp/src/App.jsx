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
  if (isLoading) {
    return (
      <div>
        <Header title='Random Cat Facts' />
        <img className='loadingGif' src='./src/Assets/LoadingGif.gif' />
      </div>
    )
  }
  return (
    <div>
      <Header title='Random Cat Facts' />
      <main>
        <Facts text={catFact} img={catImg} error={error} isFirstTime={isFirstTime} />
        <Button title='Get a new fact!' onClick={handleBTN} />
      </main>
    </div>
  )
}
