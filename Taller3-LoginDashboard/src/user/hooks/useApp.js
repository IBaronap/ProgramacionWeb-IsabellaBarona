import { useCallback, useEffect, useContext } from 'react'
import debounce from 'just-debounce-it'
import { fetchRecipes } from '../services/fetchRecipes'
import { RecipeContext } from '../context/RecipeContext'

export const useApp = () => {
  const context = useContext(RecipeContext)

  if (!context) {
    throw new Error('This component sould be within a RecipeContextrovider Component')
  }
  const {
    error,
    setError,
    recipes,
    setRecipes,
    isLoading,
    setIsLoading,
    isFirstTime
  } = context

  //   useEffect(() => {
  //     if (isFirstTime.current) {
  //       isFirstTime.current = (query === '')
  //     }
  //   }, [query])

  // Submit / input change
  useEffect(() => {
    getRecipes()
  }, [])

  // Fetching
  const getRecipes = useCallback(
    debounce(() => {
      fetchRecipes()
        .then(json => setRecipes(json))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }, 500)
    , [])

  useEffect(() => {
    console.log('getRecipes volvió a definirse')
    console.log(recipes)
  }, [getRecipes])

  return (
    {
      error,
      recipes,
      isLoading,
      isFirstTime
    }
  )
}
