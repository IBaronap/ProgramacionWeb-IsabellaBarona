import React from 'react'
import styles from './Facts.module.css'

export function Facts ({ text, img, error, isFirstTime }) {
  if (error) {
    return (<p>{error}</p>)
  }

  if (isFirstTime.current) {
    return (
      <p className={styles.firstTime}>Click the button to get a random fact!</p>
    )
  }

  return (
    <div className={styles.card}>
      <img className={styles.cat_img} src={img} />
      <p className={styles.cat_fact}>{text}</p>
    </div>
  )
}
