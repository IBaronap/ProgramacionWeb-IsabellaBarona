import { AuthContext } from './AuthContext'
import React from 'react'

export function AuthContextProvider ({ children }) {
  return (
    <AuthContext.Provider value={{

    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
