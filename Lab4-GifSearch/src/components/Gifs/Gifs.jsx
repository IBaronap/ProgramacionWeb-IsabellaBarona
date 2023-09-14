import React from 'react'
import styles from './Gifs.module.css'

export function Gifs ({ gifs, error, loading }) {
  const hasGifs = gifs.length > 0

  if (loading) {
    return (<img src='https://www.onwebchat.com/img/spinner.gif' />)
  }

  if (error) {
    return (<p>{error}</p>)
  }

  if (!hasGifs) {
    return <p>There are no results</p>
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
