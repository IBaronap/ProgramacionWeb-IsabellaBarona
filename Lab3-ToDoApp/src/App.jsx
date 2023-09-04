import React, { useState } from 'react'
import { Form, List } from './components'

const initTaskState = []

export function App () {
  const [tasks, setTasks] = useState(initTaskState)

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

  const handleDelete = (data) => {
    console.log(data)
    const { id } = data
    const deleteTask = tasks.filter((task) => task.id !== id)
    console.log(deleteTask)
    setTasks(deleteTask)
  }

  return (
    <>
      <header className='Header'>
        <h1>To-do list</h1>
        <Form onSubmit={createTasks} />
      </header>
      <main>
        {
          hasTasks
            ? <List
                tasks={tasks}
                onToggle={handleToggle}
                onClick={handleDelete}
              />
            : <p>There are no tasks to show</p>
        }
      </main>
    </>
  )
}
