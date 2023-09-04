import React from 'react'
import { Button } from './Button'
import styles from './List.module.css'

export function List ({ tasks, onToggle, onClick }) {
  const handleToggle = (data) => onToggle(data)
  const handleDelete = (data) => onClick(data)

  return (
    <div className={styles.card}>
      <ul className={styles.list}>
        {
          tasks.map((item) => {
            return (
              <Task
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onClick={handleDelete}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

function Task ({ item, onToggle, onClick }) {
  const { id, text, completed } = item

  const handleCheckboxChange = ({ target }) => {
    const { checked } = target
    onToggle(
      {
        id,
        completed: checked
      })
  }

  const handleDelete = () => {
    onClick({ id })
  }

  return (
    <div key={id} className={styles.task}>
      <input
        type='checkbox'
        id='check'
        checked={completed}
        className={styles.checkbox}
        onChange={handleCheckboxChange}
      />
      <label htmlFor='check' data-content={text}>{text}</label> {/* el data-content es para que funcione el tachado del css */}
      <Button className='erase' onClick={handleDelete} />
    </div>
  )
}
