import React from 'react'
import styles from './Button.module.css'

export function Button ({ title, onClick, disabled }) {
  return (
    <div>
      <button onClick={onClick} className={styles.login} disabled={disabled}>{title}</button>
    </div>
  )
}
