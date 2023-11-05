import { useCallback, useEffect, useContext } from 'react'
import { fetchRecipes } from '../services/fetchRecipes'
import { UserContext } from '../context/UserContext'

export const useUserApp = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('This component sould be within a UserContextrovider Component')
  }
  const {
    error,
    setError,
    recipes,
    setRecipes,
    isLoading,
    setIsLoading
  } = context

  useEffect(() => {
    console.log('useApp is running')
    getRecipes()
  }, [])

  // Fetching

  const getRecipes = useCallback(() => {
    fetchRecipes()
      .then(newRecipe => setRecipes(newRecipe))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    console.log('getRecipes volvió a definirse')
  }, [getRecipes])

  const recipesCopy = [...recipes] // Copia recipes para no dañar el array original

  const trendingRecipes = [] // Array de los 4 recipes al azar

  // Seleccionar 4 objetos al azar.
  for (let i = 0; i < 4; i++) {
    if (recipesCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipesCopy.length)
      trendingRecipes.push(recipesCopy.splice(randomIndex, 1)[0])
    }
  }

  return (
    {
      error,
      recipes,
      trendingRecipes,
      isLoading
    }
  )
}
