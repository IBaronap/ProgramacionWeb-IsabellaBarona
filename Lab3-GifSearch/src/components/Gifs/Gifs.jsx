import styles from './Gifs.module.css'
import React from 'react'
import { useApp } from '../../hooks/useApp'

export function Gifs () {
  const {
    query,
    error,
    gifs,
    isLoading,
    isFirstTime
  } = useApp()

  const hasGifs = gifs.length > 0

  if (isLoading) {
    return (<img className={styles.loadingGif} src='https://hotelnumberfour.com/wp-content/uploads/2017/09/loading.gif' />)
  }

  if (error) {
    return (<p>{error}</p>)
  }

  if (!hasGifs && !isFirstTime) {
    return <p>There are no results for <i>"{query}"</i></p>
  }

  return (
    <ul id='gifs-grid' className={styles.gifGrid}>
      {
        gifs.map(gif => {
          const { id, title, img } = gif
          return (
            <li className={styles.card} key={id}>
              <img
                src={img}
                alt={title}
                width='200px'
                className={styles.gif}
              />
              <h3>{title}</h3>
            </li>
          )
        })
      }
    </ul>
  )
}
