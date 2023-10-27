import { useCallback, useEffect, useContext } from 'react'
import debounce from 'just-debounce-it'
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
    setIsLoading,
    isFirstTime
  } = context

  useEffect(() => {
    console.log('useApp is running')
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
