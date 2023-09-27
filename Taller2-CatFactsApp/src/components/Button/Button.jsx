import React from 'react'
import styles from './Button.module.css'

export function Button ({ title, onClick, disabled }) {
  return (
    <div>
      <button className={styles.sendBtn} onClick={onClick}>{title}</button>
    </div>
  )
}
