import { useCallback, useEffect, useContext } from 'react'
import { fetchImg, fetchFact } from '../services/fetch'
import debounce from 'just-debounce-it'
import { CatContext } from '../Context/CatContext'

export const useApp = () => {
  const context = useContext(CatContext)

  if (!context) {
    throw new Error('This component sould be within a GifsContextrovider Component')
  }
  const {
    error,
    setError,
    catFact,
    setCatFact,
    catImg,
    setCatImg,
    isLoading,
    setIsLoading,
    isFirstTime
  } = context

  // Para mostrar mensaje si es la primera vez
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = (catFact === '')
    }
  }, [catFact])

  // Pedir nuevo Fact e img con el boton
  const handleBTN = () => {
    setIsLoading(true)
    getFact()
  }

  // Fetching de fact
  const getFact = useCallback(
    debounce(() => {
      fetchFact()
        .then(newFact => {
          setCatFact(newFact) // Setea el dato
          const newImgText = newFact.split(' ').slice(0, 4).join(' ') // Corta el texto para que solo sea 4 palabras
          getImg(newImgText) // Llama al fetch de la imagen y le envia el texto de 4 palabras
        })
        .catch(e => setError(e))
    }, 500)
    , [])

  // Fetching de img
  const getImg = useCallback(
    debounce((newImgText) => {
      fetchImg({ newImgText }) // Hace fetch con el texto
        .then(newImg => setCatImg(newImg)) // Setea la imagen
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }, 500)
    , [])

  useEffect(() => {
    console.log('getFact volvió a definirse')
  }, [getFact])

  useEffect(() => {
    console.log('getImg volvió a definirse')
  }, [getImg])

  return (
    {
      error,
      catImg,
      catFact,
      isLoading,
      isFirstTime,
      handleBTN
    }
  )
}
