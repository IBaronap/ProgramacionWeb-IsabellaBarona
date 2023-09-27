import React from 'react'
import btnStyles from './Button.module.css'

export function Button ({ title, type }) {
  const btnStyle = type === 'main' ? btnStyles.mainBTN : btnStyles.secondBTN
  return (
    <button className={btnStyle}>{title}</button>
  )
}
