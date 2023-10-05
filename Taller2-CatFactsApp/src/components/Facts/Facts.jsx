import React from 'react'
import styles from './Facts.module.css'
import { useApp } from '../../hooks/useApp'

export function Facts () {
  const {
    catFact,
    catImg,
    error,
    isLoading,
    isFirstTime
  } = useApp()

  if (error) {
    return (<p>{error}</p>)
  }

  if (isLoading) {
    return (
      <img className='loadingGif' src='./src/Assets/LoadingGif.gif' />
    )
  }

  if (isFirstTime.current) {
    return (
      <p className={styles.firstTime}>Click the button to get a random fact!</p>
    )
  }

  return (
    <div className={styles.card}>
      <img className={styles.cat_img} src={catImg} />
      <p className={styles.cat_fact}>{catFact}</p>
    </div>
  )
}
