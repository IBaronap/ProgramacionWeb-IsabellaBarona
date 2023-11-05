import { UserContext } from './UserContext'
import React, { useState } from 'react'

export function UserContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [recipes, setRecipes] = useState([{ title: 'The recipes have not arrived' }])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <UserContext.Provider value={{
      error,
      setError,
      recipes,
      setRecipes,
      isLoading,
      setIsLoading
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
