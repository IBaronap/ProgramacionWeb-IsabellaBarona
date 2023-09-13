import { useState, useEffect } from 'react'

export const useTasks = (initTaskState, initFilterState) => {
  const [tasks, setTasks] = useState(initTaskState) // Para array de tareas
  const [filter, setFilter] = useState(initFilterState) // Para los filtros
  const [tasksToDelete, setTasksToDelete] = useState([]) // Para animar las tareas que se eliminan a la vez

  // Local Storage
  useEffect(() => {
    window.localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks]
  )

  useEffect(() => {
    window.localStorage.setItem('Filter', JSON.stringify(filter))
  }, [filter]
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

  const hasTasks = tasks.length > 0 // Para saber si hay tareas

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

  // Contar tareas
  const completedTasks = tasks.filter(task => task.completed).length
  const allTasks = tasks.length

  // Borrar todas las completadas
  const handleDeleteAll = () => {
    const completedTaskIds = tasks.filter((task) => task.completed).map((task) => task.id)

    // Agregar la clase de animación al eliminar todas las tareas completadas
    const updatedTasks = tasks.map((task) => {
      if (task.completed) {
        return { ...task, animationClass: 'animate__animated animate__fadeOutRightBig' }
      }
      return task
    })
    setTasksToDelete(completedTaskIds)
    setTimeout(() => {
      const newTasks = updatedTasks.filter((task) => !task.completed)
      setTasks(newTasks)
    }, 500)
  }

  return (
    {
      filter,
      createTasks,
      hasTasks,
      handleToggle,
      handleDelete,
      handleFilterChange,
      filteredTasks,
      completedTasks,
      allTasks,
      handleDeleteAll,
      tasksToDelete
    }
  )
}
