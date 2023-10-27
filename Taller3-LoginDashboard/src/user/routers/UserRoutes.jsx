import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, ItemDetailPage, NotFoundPage } from '../pages'

export function UserRouter () {
  return (
    <main>
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
    </main>
  )
}
