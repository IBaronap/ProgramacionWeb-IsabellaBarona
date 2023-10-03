import React, { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './List.module.css'
import { useTasks } from '../../hooks/useTasks'

export function List () {
  const {
    filteredTasks,
    hasTasks,
    tasksToDelete,
    handleDelete,
    handleToggle
  } = useTasks()

  return (
    <div className={styles.card}>
      <ul className={styles.list}>
        {hasTasks
          ? filteredTasks.map((item) => {
            const deleteAllAnimation = tasksToDelete.includes(item.id)
              ? 'animate__animated animate__fadeOutRightBig'
              : ''
            return (
              <Task
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onClick={handleDelete}
                animationClass={item.animationClass || ''}
                deleteAllAnimation={deleteAllAnimation}
              />
            )
          })
          : <p className={`${styles.altText} animate__animated animate__fadeIn`}>There are no tasks to show</p>}
      </ul>

    </div>
  )
}

function Task ({ item, onToggle, onClick, deleteAllAnimation }) {
  const [animationClass, setAnimationClass] = useState('')

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
    setAnimationClass('animate__animated animate__fadeOutRightBig')

    setTimeout(() => {
      onClick({ id })
    }, 500)
  }

  return (
    <div
      key={id}
      className={`${styles.task} animate__animated animate__backInDown ${animationClass} ${deleteAllAnimation} `}
    >
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
