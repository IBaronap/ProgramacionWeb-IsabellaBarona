import 'animate.css'
import React from 'react'
import { Form, Filter, List, Footer } from './components'
import { TodoContextProvider } from './context/TodoContextProvider'

export function App () {
  // Render
  return (
    <div className='animate__animated animate__fadeInDown'>
      <TodoContextProvider>

        <header className='Header'>
          <h1>To-do list</h1>
          <Form />
        </header>
        <main>
          <Filter />
          <List />
          <Footer />
        </main>
      </TodoContextProvider>
    </div>
  )
}
