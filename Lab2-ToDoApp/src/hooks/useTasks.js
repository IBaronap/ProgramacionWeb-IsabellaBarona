import { useEffect, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTasks = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('This component sould be within a TodoContextrovider Component')
  }
  const {
    tasks,
    setTasks,
    currentFilter,
    setFilter,
    tasksToDelete,
    setTasksToDelete
  } = context

  // Local Storage
  useEffect(() => {
    window.localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks]
  )

  useEffect(() => {
    window.localStorage.setItem('Filter', JSON.stringify(currentFilter))
  }, [currentFilter]
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
    if (currentFilter === 'completed') {
      return task.completed
    } if (currentFilter === 'pending') {
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
      currentFilter,
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
