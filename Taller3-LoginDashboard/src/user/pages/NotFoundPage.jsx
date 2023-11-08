import React from 'react'

import { Header } from '../components'

export function NotFoundPage () {
  const style = {
    width: '35vw',
    margin: '40vh 30vw'
  }

  return (
    <>
      <Header />
      <h1 style={style}>Nothing to see here</h1>
    </>
  )
}
