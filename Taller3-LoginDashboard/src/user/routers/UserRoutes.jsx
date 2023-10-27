import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, ItemDetailPage, NotFoundPage } from '../pages'

import { UserContextProvider } from '../context/UserContextProvider'

export function UserRouter () {
  return (
    <main>
      <UserContextProvider>
        <Routes>
          <Route
            path='/Dashboard'
            element={<DashboardPage />}
          />
          <Route
            path='/:id'
            element={<ItemDetailPage />}
          />
          <Route
            path='/*'
            element={<NotFoundPage />}
          />
        </Routes>
      </UserContextProvider>
    </main>
  )
}
