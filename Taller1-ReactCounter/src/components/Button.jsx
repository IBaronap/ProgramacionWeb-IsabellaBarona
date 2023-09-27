import React from 'react'
import styles from './Button.module.css'

export function Button ({ type, onClick }) {
  const btnStyle = type === 'add' ? styles.add : styles.substract

  return (
    <div>
      <button onClick={onClick} className={btnStyle}>
        {type}
      </button>
    </div>
  )
}
