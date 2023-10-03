import { TodoContext } from './TodoContext'
import React, { useState } from 'react'

export function TodoContextProvider ({ children }) {
  const initTaskState = JSON.parse(window.localStorage.getItem('Tasks')) ?? []
  const initFilterState = JSON.parse(window.localStorage.getItem('Filter')) ?? 'all'

  const [tasks, setTasks] = useState(initTaskState) // Para array de tareas
  const [currentFilter, setFilter] = useState(initFilterState) // Para los filtros
  const [tasksToDelete, setTasksToDelete] = useState([]) // Para animar las tareas que se eliminan a la vez

  return (
    <TodoContext.Provider value={{
      tasks,
      setTasks,
      currentFilter,
      setFilter,
      tasksToDelete,
      setTasksToDelete
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
