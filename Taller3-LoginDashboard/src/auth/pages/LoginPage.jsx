import React from 'react'
import { Form } from '../components'
import styles from './LoginPage.module.css'

export function LoginPage () {
  return (
    <div className={styles.DivFlex}>
      <div className={styles.DivForm}>
        <h1>Login</h1>
        <p>Texto bonito</p>
        <Form />
      </div>
      <div className={styles.DivLogo}>
        <h1>Logo</h1>
      </div>
    </div>
  )
}
