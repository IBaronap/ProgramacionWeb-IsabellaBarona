import React from 'react'
import { Button } from './Button'

export function Footer ({ completedTasks, allTasks, onClick }) {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
  return (
    <div style={divStyle}>
      <p> <strong> {completedTasks} completed</strong> out of <strong>{allTasks}</strong></p>
      <Button className='clearAll' onClick={onClick} />
    </div>
  )
}
