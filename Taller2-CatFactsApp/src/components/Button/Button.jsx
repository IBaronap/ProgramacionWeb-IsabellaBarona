import React from 'react'
import styles from './Button.module.css'

export function Button ({ title, onClick }) {
  return (
    <div>
      <button className={styles.fetchBtn} onClick={onClick}>{title}</button>
    </div>
  )
}
