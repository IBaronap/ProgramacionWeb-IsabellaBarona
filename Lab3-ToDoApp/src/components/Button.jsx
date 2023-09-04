import React from 'react'
import styles from './Button.module.css'

export function Button ({ className, onClick }) {
  const btnStyle = className === 'add' ? styles.add : styles.erase
  const content = className === 'add' ? 'Add' : 'X'

  return (
    <div>
      <button className={btnStyle} onClick={onClick}>{content}</button>
    </div>
  )
}
