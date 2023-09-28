import { useCallback, useEffect, useState, useRef } from 'react'
import { fetchImg, fetchFact } from '../services/fetch'
import debounce from 'just-debounce-it'

export const useApp = () => {
  const [error, setError] = useState(null)
  const [catImg, setCatImg] = useState('')
  const [catFact, setCatFact] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Para que el mensaje de que no se encontró gifs no se muestre a la primera
  const isFirstTime = useRef(true)

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = (catFact === '')
    }
  }, [catFact])

  // Submit / input change
  const handleBTN = () => {
    setIsLoading(true)
    getFact()
  }

  // Fetching

  const getFact = useCallback(
    debounce(() => {
      fetchFact()
        .then(newFact => {
          setCatFact(newFact)
          const newImgText = newFact.split(' ').slice(0, 4).join(' ')
          getImg(newImgText)
        })
        .catch(e => setError(e))
    }, 500)
    , [])

  // Get img
  const getImg = useCallback(
    debounce((newImgText) => {
      fetchImg({ newImgText })
        .then(newImg => setCatImg(newImg))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false))
    }, 500)
    , [])

  useEffect(() => {
    console.log('getFact volvió a definirse')
  }, [getFact, getImg])

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
