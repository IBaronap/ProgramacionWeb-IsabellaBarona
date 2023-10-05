import React from 'react'
import styles from './Button.module.css'
import { useApp } from '../../hooks/useApp'

export function Button ({ title }) {
  const {
    isLoading,
    handleBTN
  } = useApp()

  return (
    <div>
      <button className={styles.fetchBtn} onClick={handleBTN} disabled={isLoading}>{title}</button>
    </div>
  )
}
