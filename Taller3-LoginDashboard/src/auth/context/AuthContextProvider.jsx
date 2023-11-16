import { AuthContext } from './AuthContext'
import React, { useState } from 'react'

export function AuthContextProvider ({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const [users, setUsers] = useState(
    [{
      email: 'IsaBaro@gmail.com',
      password: 'Contra123'
    },
    {
      email: 'AndresN@gmail.com',
      password: 'Contra456'
    }]
  )

  return (
    <AuthContext.Provider value={
      {
        isLogged,
        setIsLogged,
        users,
        setUsers
      }
  }
    >
      {children}
    </AuthContext.Provider>
  )
}
