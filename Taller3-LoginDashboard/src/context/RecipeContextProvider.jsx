import { RecipeContext } from './RecipeContext'
import React, { useState, useRef } from 'react'

export function RecipeContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const isFirstTime = useRef(true)
  return (
    <RecipeContext.Provider value={{
      error,
      setError,
      recipes,
      setRecipes,
      isLoading,
      setIsLoading,
      isFirstTime
    }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
