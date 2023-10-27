import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import styles from './Form.module.css'

const initUserValue = ''
const initPasswordValue = ''

export function Form () {
  const [UserValue, setUserValue] = useState(initUserValue)
  const [PasswordValue, setPasswordValue] = useState(initPasswordValue)

  const navigate = useNavigate()

  const disableBtn = UserValue.trim() === '' || PasswordValue.trim() === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    if (disableBtn) {
      return
    }
    setUserValue(initUserValue)
    setPasswordValue(initPasswordValue)
  }

  const handleUserChange = (e) => {
    setUserValue(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value)
  }

  return (
    <form className={styles.FormDiv} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        onChange={handleUserChange}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={handlePasswordChange}
      />
      <Button onClick={() => navigate('/Dashboard')} title='Login' className='login' type='submit' disabled={disableBtn} />
    </form>
  )
}
