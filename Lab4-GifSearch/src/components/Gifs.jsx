import React from 'react'
import styles from './Gifs.module.css'

export function Gifs () {
  return (
    <div className={styles.gifSection}>
      <GifItem />
      <GifItem />
      <GifItem />
    </div>
  )
}

function GifItem () {
  return (
    <div className={styles.card}>
      <img
        src='https://www.lenomex.com/wp-content/uploads/2016/04/dummy-post-square-1-768x768.jpg'
        alt='Gif'
        className={styles.gif}
      />
      <h3>Gif title</h3>
    </div>
  )
}
