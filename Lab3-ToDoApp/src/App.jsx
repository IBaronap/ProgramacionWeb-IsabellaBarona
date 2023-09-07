import React, { useState } from 'react'
import { Form, Filter, List } from './components'

// Estado inicial
const initTaskState = []

export function App () {
  const [tasks, setTasks] = useState(initTaskState)
  const [filter, setFilter] = useState('all')

  // Crear tareas
  const createTasks = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false
    }
    setTasks(prevState => [...prevState, newTask])

    console.log(newTask)
  }

  const hasTasks = tasks.length > 0

  // Cambiar completed
  const handleToggle = (data) => {
    console.log(data)
    const { id, completed } = data
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        const newTask = {
          ...task,
          completed
        }
        return newTask
      }
      return task
    })
    setTasks(newTasks)

    // Version Cris
  //   const updatedTasks = tasks.map((task) => {
  //     if (task.id === id) {
  //       task.completed = completed
  //     }
  //     return task
  //   })
  //   setTasks(updatedTasks)
  }

  // Borrar tareas
  const handleDelete = (data) => {
    console.log(data)
    const { id } = data
    const deleteTask = tasks.filter((task) => task.id !== id)
    console.log(deleteTask)
    setTasks(deleteTask)
  }

  // Filtrar tareas

  const filters = [
    {
      id: 1,
      label: 'All',
      value: 'all'
    },
    {
      id: 2,
      label: 'Completed',
      value: 'completed'
    },
    {
      id: 3,
      label: 'Pending',
      value: 'pending'
    }
  ]

  const handleFilterChange = (filterValue) => {
    console.log(filterValue)
    setFilter(filterValue)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed
    } if (filter === 'pending') {
      return !task.completed
    } else {
      return task
    }
  })

  // Filtro con map
  // const filteredTasks = tasks.map((task) => {
  //   if (filter === 'all') {
  //     return task
  //   } else if (filter === 'completed' && task.completed) {
  //     return task
  //   } else if (filter === 'pending' && !task.completed) {
  //     return task
  //   }

  //   console.log('Filtered amount ' + tasks.length)
  //   return null
  // }).filter((task) => task !== null)

  // Contar tareas
  const taskAmount = () => {
    switch (filter) {
      case 'all':
        return tasks.length
      case 'completed':
        return tasks.filter(task => task.completed).length
      case 'pending':
        return tasks.filter(task => !task.completed).length
    }
  }

  // Render
  return (
    <>
      <header className='Header'>
        <h1>To-do list</h1>
        <Form onSubmit={createTasks} />
      </header>
      <main>
        {
          hasTasks
            ? <div>
              <Filter
                filters={filters}
                onChange={handleFilterChange}
                currentValue={filter}
              />
              {/* <Filter onFilterChange={handleFilterChange} /> */}

              <p>Quantity: {taskAmount()}</p>
              <List
                currentValue={filter}
                tasks={filteredTasks}
                onToggle={handleToggle}
                onClick={handleDelete}
              />
            </div>
            : <p>There are no tasks to show</p>
        }
      </main>
    </>
  )
}
