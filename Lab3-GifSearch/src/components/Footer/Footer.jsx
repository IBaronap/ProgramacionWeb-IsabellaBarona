import React from 'react'

export function Footer ({ hasGifs, gifsQuantity, query }) {
  if (hasGifs) {
    return (
      <header className='Footer'>
        <p>Found {gifsQuantity} gifs for {query}</p>
      </header>
    )
  }
}
