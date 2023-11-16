import { Navigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'

export function PrivateRoute ({ children }) {
  const { logIn } = useAuth()

  return logIn ? children : <Navigate to='/' />
}
