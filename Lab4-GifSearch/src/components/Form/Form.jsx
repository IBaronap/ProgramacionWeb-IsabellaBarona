import React, { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './Form.module.css'

export function Form ({ onSubmit, disabled }) {
  const [query, setQuery] = useState('')

  const disableBtn = query.trim() === ''

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '' || query.trim().length < 2) {
      return
    }
    if (disableBtn) {
      return
    }
    onSubmit(query)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formDiv}>
      <input
        type='text'
        placeholder='Search a Gif'
        className={styles.searchBar}
        value={query}
        onChange={handleChange}
      />
      <Button title='Search' type='submit' disabled={disableBtn} />
    </form>
  )
}
