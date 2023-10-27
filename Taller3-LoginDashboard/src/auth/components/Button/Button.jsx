import React from 'react'
import styles from './Button.module.css'

export function Button ({ title, className, onClick, disabled }) {
  let btnStyle

  if (className === 'login') {
    btnStyle = styles.login
  }

  return (
    <div>
      <button onClick={onClick} className={btnStyle} disabled={disabled}>{title}</button>
    </div>
  )
}
