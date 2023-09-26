import React, { useState,useRef } from 'react'
import { Button } from '../Button/Button'
import styles from './Form.module.css'

export function Form ({ onSubmit, onChange }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const disableBtn = query.trim() === ''

  const handleChange = (e) => {
    setQuery(e.target.value)
    onChange(query)
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
