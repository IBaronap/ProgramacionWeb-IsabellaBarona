import React, { useState } from 'react'
import { Button } from './Button'
import styles from './Form.module.css'

const initInputValue = ''

export function Form ({ onSubmit, disabled }) {
  const [inputValue, setInputValue] = useState(initInputValue)

  const disableBtn = inputValue.trim() === ''

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (disableBtn) {
      return
    }
    onSubmit(inputValue)
    setInputValue(initInputValue)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formDiv}>
      <input
        type='text'
        placeholder='Search a Gif'
        className={styles.searchBar}
        value={inputValue}
        onChange={handleChange}
      />
      <Button title='Search' type='submit' disabled={disableBtn} />
    </form>
  )
}
