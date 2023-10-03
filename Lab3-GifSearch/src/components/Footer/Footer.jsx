import React, { useContext } from 'react'
import { GifContext } from '../../context/GifContext'

export function Footer () {
  const {
    query,
    gifs
  } = useContext(GifContext)

  const hasGifs = gifs.length > 0
  const gifsQuantity = gifs.length

  if (hasGifs) {
    return (
      <header className='Footer'>
        <p>Found {gifsQuantity} gifs for {query}</p>
      </header>
    )
  }
}
