import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './auth/pages'
import { UserRouter } from './user/routers/UserRoutes'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />

        <Route
          path='/*'
          element={<UserRouter />}
        />
      </Routes>
    </main>
  )
}
