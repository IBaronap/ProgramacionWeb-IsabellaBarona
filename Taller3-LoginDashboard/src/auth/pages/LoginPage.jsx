import React from 'react'
import { Form } from '../components'
import styles from './LoginPage.module.css'

export function LoginPage () {
  return (
    <div className={styles.Content}>
      <div className={styles.ContentLeft}>
        <h1>Log in</h1>
        <p>Welcome to a world of awesome recipes!</p>
        <Form />
      </div>

      <div className={styles.ContentRight}>
        <img className={styles.Logo} src='./src/Assets/LogoTradi.svg' />
      </div>
    </div>
  )
}
