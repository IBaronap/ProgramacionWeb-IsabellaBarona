import React from 'react'
import styles from './Button.module.css'

export function Button ({ className, onClick, disabled }) {
  let btnStyle, content

  if (className === 'add') {
    btnStyle = styles.add
    content = 'Add'
  } else if (className === 'erase') {
    btnStyle = styles.erase
    content = 'X'
  } else if (className === 'clearAll') {
    btnStyle = styles.clearAll
    content = 'Clear'
  }

  return (
    <div>
      <button className={btnStyle} onClick={onClick} disabled={disabled}>{content}</button>
    </div>
  )
}
