import { UserContext } from './UserContext'
import React, { useState } from 'react'

export function UserContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [recipes, setRecipes] = useState([{ title: 'The recipes have not arrived' }])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(false)
  const [sliderValue, setSliderValue] = useState(560)

  return (
    <UserContext.Provider value={{
      error,
      setError,
      recipes,
      setRecipes,
      selectedCategory,
      setSelectedCategory,
      isLoading,
      setIsLoading,
      sliderValue,
      setSliderValue
    }}
    >
      {children}
    </UserContext.Provider>
  )
}
