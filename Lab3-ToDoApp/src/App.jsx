import React, { useState, useEffect } from 'react'
import 'animate.css'
import { Form, Filter, List, Footer } from './components'

// Estado inicial
const initTaskState = JSON.parse(window.localStorage.getItem('Tasks')) ?? []

export function App () {
  const [tasks, setTasks] = useState(initTaskState)
  const [filter, setFilter] = useState('all')
  const [tasksToDelete, setTasksToDelete] = useState([])

  // Local Storage
  useEffect(() => {
    console.log('Saved in Local Host')
    window.localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks]
  )

  // Crear tareas
  const createTasks = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false
    }
    setTasks(prevState => [...prevState, newTask])
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
  const completedTasks = tasks.filter(task => task.completed).length
  const allTasks = tasks.length

  // Borrar todas las completadas
  const handleDeleteAll = () => {
    const completedTaskIds = tasks.filter((task) => task.completed).map((task) => task.id)

    // Agregar la clase de animación a todas las tareas completadas
    const updatedTasks = tasks.map((task) => {
      if (task.completed) {
        return { ...task, animationClass: 'animate__animated animate__fadeOutRightBig' }
      }
      return task
    })

    setTasksToDelete(completedTaskIds)

    // Agregar una pausa antes de eliminar las tareas
    setTimeout(() => {
      const newTasks = updatedTasks.filter((task) => !task.completed)
      setTasks(newTasks)
    }, 500) // Asegúrate de ajustar el tiempo adecuadamente
  }

  // Render
  return (
    <div className='animate__animated animate__fadeInDown'>
      <header className='Header'>
        <h1>To-do list</h1>
        <Form onSubmit={createTasks} />
      </header>
      <main>
        <Filter
          filters={filters}
          onChange={handleFilterChange}
          currentValue={filter}
        />
        <List
          showList={hasTasks}
          currentValue={filter}
          tasks={filteredTasks}
          onToggle={handleToggle}
          onClick={handleDelete}
          tasksToDelete={tasksToDelete}
        />
        <Footer completedTasks={completedTasks} allTasks={allTasks} onClick={handleDeleteAll} />
      </main>
    </div>
  )
}
