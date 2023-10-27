import { UserContext } from './UserContext'
import React, { useState, useRef } from 'react'

export function UserContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [recipes, setRecipes] = useState([{ title: 'Prueba' }])
  const [isLoading, setIsLoading] = useState(false)

  const isFirstTime = useRef(true)

  return (
    <UserContext.Provider value={{
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
    </UserContext.Provider>
  )
}
