import React from 'react'
import styles from './Button.module.css'

export function Button ({ title, onClick, onSubmit, disabled }) {
  return (
    <div>
      <button onSubmit={onSubmit} className={styles.login} disabled={disabled}>{title}</button>
    </div>
  )
}
