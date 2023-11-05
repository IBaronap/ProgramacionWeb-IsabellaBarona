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
    selectedCategory,
    setSelectedCategory,
    isLoading,
    setIsLoading
  } = context

  // Use effect

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

  // Filter recipes (cuisine)

  const filteredRecipes = selectedCategory === 'All'
    ? recipes
    : recipes.filter(recipe => {
      // Si la propiedad "cuisine" es una cadena vacía, considera que pertenece a la categoría "Other"
      return selectedCategory === 'Other' ? !recipe.cuisine : recipe.cuisine === selectedCategory
    })
  // Trending recipes

  const recipesCopy = [...filteredRecipes] // Copia recipes para no dañar el array original

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
      filteredRecipes,
      trendingRecipes,
      selectedCategory,
      setSelectedCategory,
      isLoading
    }
  )
}
