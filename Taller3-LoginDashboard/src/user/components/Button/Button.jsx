import React from 'react'
import styles from './Button.module.css'

export function Button ({ title }) {
  return (
    <button className={styles.Btn}>{title}</button>
  )
}
