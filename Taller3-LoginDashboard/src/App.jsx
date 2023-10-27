import React from 'react'
import { AppRouter } from './AppRouter'
import { fetchRecipes } from './services/fetchRecipes'

function App () {
  fetchRecipes()
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
