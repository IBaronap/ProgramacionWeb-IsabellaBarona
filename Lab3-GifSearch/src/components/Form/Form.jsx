import React from 'react'
import { Button } from '../Button/Button'
import styles from './Form.module.css'

import { useApp } from '../../hooks/useApp'
import { useForm } from '../../hooks/useForm'

export function Form () {
  const { handleUserSubmit } = useApp()

  const {
    handleSubmit,
    handleChange,
    query,
    inputRef,
    disableBtn
  } = useForm(handleUserSubmit)

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className={styles.formDiv}>
      <input
        type='text'
        placeholder='Search a Gif'
        className={styles.searchBar}
        value={query}
        onChange={handleChange}
        ref={inputRef}
      />
      <Button title='Search' type='submit' disabled={disableBtn} />
    </form>
  )
}
