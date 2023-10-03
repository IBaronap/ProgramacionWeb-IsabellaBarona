import React from 'react'
import { Button } from '../Button/Button'
import { useTasks } from '../../hooks/useTasks'

export function Footer () {
  const {
    completedTasks,
    allTasks,
    handleDeleteAll
  } = useTasks()

  const divStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
  return (
    <div style={divStyle}>
      <p> <strong> {completedTasks} completed</strong> out of <strong>{allTasks}</strong></p>
      <Button className='clearAll' onClick={handleDeleteAll} />
    </div>
  )
}
