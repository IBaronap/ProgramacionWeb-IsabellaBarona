import React from 'react'
import styles from './Gifs.module.css'

export function Gifs ({ gifs, hasGifs, error, loading, query, isFirstTime }) {
  if (loading) {
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
