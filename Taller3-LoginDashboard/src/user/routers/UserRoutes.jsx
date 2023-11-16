import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, ItemDetailPage, NotFoundPage } from '../pages'
import { UserContextProvider } from '../context/UserContextProvider'
import { PrivateRoute } from './PrivateRoute'

export function UserRouter () {
  return (
    <UserContextProvider>
      <main>
        <Routes>
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/recipe/:id'
            element={
              <PrivateRoute>
                <ItemDetailPage />
              </PrivateRoute>
          }
          />
          <Route
            path='/*'
            element={<NotFoundPage />}
          />
        </Routes>
      </main>
    </UserContextProvider>
  )
}
