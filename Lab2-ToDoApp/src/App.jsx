import 'animate.css'
import React from 'react'
import { Form, Filter, List, Footer } from './components'
import { filters } from './const/filters.js'
import { useTasks } from './hooks/useTasks.js'

// Estado inicial
const initTaskState = JSON.parse(window.localStorage.getItem('Tasks')) ?? []
const initFilterState = JSON.parse(window.localStorage.getItem('Filter')) ?? 'all'

export function App () {
  const {
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
  } = useTasks(initTaskState, initFilterState)

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
