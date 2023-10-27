import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TestPage, ModalPage } from './Pages'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<TestPage />}
        />
        <Route
          path='/Modal'
          element={<ModalPage />}
        />
      </Routes>
    </main>
  )
}
