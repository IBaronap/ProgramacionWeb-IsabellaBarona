import React from 'react'
import styles from './Button.module.css'

export function Button ({ title, onClick }) {
  return (
    <button onClick={onClick} className={styles.Btn}>{title}</button>
  )
}
