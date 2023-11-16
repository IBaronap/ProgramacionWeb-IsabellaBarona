import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('This component sould be within a UserContextrovider Component')
  }

  const {
    isLogged,
    setIsLogged,
    users
  } = context

  const logIn = (user) => {
    console.log(user, isLogged)
    setIsLogged(true)
  }

  return (
    {
      isLogged,
      users,
      logIn
    }
  )
}
