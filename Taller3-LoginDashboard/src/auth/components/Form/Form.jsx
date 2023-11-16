import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../Button/Button'
import styles from './Form.module.css'
import Swal from 'sweetalert2' // Swal es una libreria de alertas

export function Form () {
  const navigate = useNavigate()

  const { logIn, users } = useAuth()

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const disableBtn = formState.email.trim() === '' || formState.password.trim() === '' || formState.password.trim().length < 6

  const handleSubmit = (event) => {
    event.preventDefault()
    if (users.some(u => u.email === formState.email && u.password === formState.password)) {
      logIn(formState)
      navigate('/dashboard')
    } else {
      Swal.fire({
        title: 'Invalid credentials!',
        text: 'The user or password is incorrect. Please try again',
        icon: 'error',
        confirmButtonText: 'Ok',
        customClass: {
          confirmButton: 'swal-button'
        }
      })
    }
  }

  const handleOnChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
    console.log(target)
  }

  return (
    <form className={styles.FormDiv} onSubmit={handleSubmit}>
      <input
        type='email'
        name='email'
        id=''
        onChange={handleOnChange}
        value={formState.email}
        placeholder='Username'
      />
      <input
        type='password'
        name='password'
        onChange={handleOnChange}
        value={formState.password}
        placeholder='Password'
      />
      <Button
        title='Login'
        className='login'
        type='submit'
        disabled={disableBtn}
      />
    </form>
  )
}
