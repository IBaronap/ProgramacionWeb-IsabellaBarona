import React from 'react'
import { Button } from '../Button/Button'
import styles from './Form.module.css'
import { useTasks } from '../../hooks/useTasks'
import { useForm } from '../../hooks/useForm'

export function Form () {
  const { createTasks } = useTasks()

  const {
    inputValue,
    disableBtn,
    handleChange,
    handleSubmit
  } = useForm(createTasks)

  return (
    <form onSubmit={handleSubmit} className={styles.addDiv}>
      <input
        type='text'
        placeholder='Name your task'
        className={styles.taskInput}
        value={inputValue}
        onChange={handleChange}
      />
      <Button className='add' type='submit' disabled={disableBtn} />
    </form>
  )
}
